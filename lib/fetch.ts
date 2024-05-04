import fetch from 'isomorphic-unfetch'
import { StorageItems } from './constants/Storage'
import { ServerError } from './error_types'

const getAccessToken = () => localStorage.getItem(StorageItems.AccessToken)

export const fetchGet = async <JSON = any>(input: any, init?: any): Promise<JSON> => {
  const res = await fetch(input, Object.assign(init || {}, await formatPayload(init)))

  if (!res.ok) {
    checkBadResponse(res)
    throw new Error(`Error during GET ${input}`)
  }

  return res?.json()
}

export const fetchGetFile = async <JSON = any>(input: any, noAuth?: boolean): Promise<Blob> => {
  const res = await fetch(input, noAuth ? {} : await formatPayload())

  if (!res.ok) {
    checkBadResponse(res)
    throw new Error(`An error occurred while downloading file`)
  }

  return res?.blob()
}

export const fetchPost = async <JSON = any>(
  input: RequestInfo,
  payload: any = {},
  isFile?: boolean
): Promise<JSON> => {
  const res = await fetch(
    input,
    Object.assign({ method: 'POST' }, await formatPayload(payload, isFile))
  )

  if (!res.ok) {
    throw new Error(data.error || `An error occurred while pushing data for ${input}.`)
  }

  const contentType = res.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    return res.json()
  } else {
    return
  }
}

export async function fetchPut<JSON = any>(
  input: RequestInfo,
  payload: any = {},
  isFile?: boolean
): Promise<JSON> {
  const res = await fetch(
    input,
    Object.assign({ method: 'PUT' }, await formatPayload(payload, isFile))
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'An error occurred while updating data.')
  }
  return data
}

export async function fetchDelete<JSON = any>(
  input: RequestInfo,
  payload: any = {}
): Promise<JSON> {
  const res = await fetch(input, Object.assign({ method: 'DELETE' }, await formatPayload(payload)))
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.error || 'An error occurred while deleting data.')
  }

  return data
}

export const formatPayload = async (body?: unknown, isFile?: boolean): Promise<any> => {
  const accessToken = await getAccessToken()

  const headers = {
    accept: 'application/json;v=1.0.3',
    'accept-language': 'en-US,en;q=0.9,bg;q=0.8',
    'access-control-allow-origin': '*',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    ...(isFile ? {} : { 'content-type': 'application/json' }),
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
  }

  const payload = { headers }

  if (body) {
    // @ts-ignore
    payload.body = isFile ? body : JSON.stringify(body)
  }

  return payload
}

export const fetchGetAll = async (urls: string[]) => {
  const responses = await Promise.allSettled(urls.map(url => fetchGet(url)))
  const successfulResponses = responses
    .filter(response => response.status === 'fulfilled')
    .map(response => (response as any).value)
  return successfulResponses
}

const checkBadResponse = async (res: any) => {
  if (res.status === 403) {
    const text = await res.text()

    // handle keycloak session expired
    if (text === 'Access denied') {
      // logout()
    }
  }
}

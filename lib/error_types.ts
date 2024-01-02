import ErrorCode from './error_codes'

type ErrorObject = { message: string; errorCode: ErrorCode } | string

export class ServerError extends Error {
  errorCode: ErrorCode
  statusCode: number

  constructor(error: ErrorObject, statusCode: number) {
    if (typeof error === 'string') {
      super(error)
      this.errorCode = ErrorCode.INTERNAL_SERVER_ERROR
    } else {
      super(error.message)
      this.errorCode = error.errorCode
    }

    this.statusCode = statusCode
  }
}

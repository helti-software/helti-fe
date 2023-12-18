import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'bg'] as const

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    bg: '/pfadnamen'
  }
} satisfies Pathnames<typeof locales>

export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames

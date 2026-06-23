import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'bn'] as const
export type Locale = (typeof locales)[number]

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: 'en',
  localePrefix: 'never',
  localeCookie: {
    name: 'lang',
    maxAge: 60 * 60 * 24 * 365,
  },
})

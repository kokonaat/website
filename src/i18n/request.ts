import { cookies, headers } from 'next/headers'

import { getRequestConfig } from 'next-intl/server'

import { routing, type Locale } from './routing'

function resolveLocale(value: string | undefined): Locale | undefined {
  if (value && routing.locales.includes(value as Locale)) {
    return value as Locale
  }
  return undefined
}

function localeFromAcceptLanguage(header: string | null): Locale | undefined {
  if (!header) return undefined

  const preferred = header
    .split(',')
    .map((part) => part.split(';')[0]?.trim().toLowerCase())
    .filter(Boolean)

  for (const tag of preferred) {
    if (tag.startsWith('bn')) return 'bn'
    if (tag.startsWith('en')) return 'en'
  }

  return undefined
}

export default getRequestConfig(async () => {
  const cookieStore = await cookies()
  const cookieLocale = resolveLocale(cookieStore.get('lang')?.value)

  const headerStore = await headers()
  const acceptLanguageLocale = localeFromAcceptLanguage(
    headerStore.get('accept-language'),
  )

  const locale =
    cookieLocale ?? acceptLanguageLocale ?? routing.defaultLocale

  return {
    locale,
    messages: (await import(`../locales/${locale}/website.json`)).default,
  }
})

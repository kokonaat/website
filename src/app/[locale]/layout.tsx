import { notFound } from 'next/navigation'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server'

import { Footer } from '@/components/blocks/footer'
import { Navbar } from '@/components/blocks/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { routing, type Locale } from '@/i18n/routing'
import { pickClientMessages } from '@/lib/client-messages'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    metadataBase: new URL('https://kokonaat.com'),
    title: {
      default: t('title'),
      template: `%s | Kokonaat`,
    },
    description: t('description'),
    authors: [{ name: 'kokonaat.com' }],
    creator: 'Kokonaat',
    publisher: 'Kokonaat',
    robots: { index: true, follow: true },
    alternates: {
      languages: {
        en: '/',
        bn: '/',
      },
    },
    icons: {
      icon: [{ url: '/favicon/favicon.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/logo.svg', sizes: '180x180', type: 'image/svg+xml' }],
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      siteName: 'Kokonaat',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const clientMessages = pickClientMessages(messages as Record<string, unknown>)

  return (
    <NextIntlClientProvider locale={locale} messages={clientMessages}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}

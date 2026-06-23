import { Inter, Manrope, Noto_Sans_Bengali } from 'next/font/google'

import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'

import { Footer } from '@/components/blocks/footer'
import { Navbar } from '@/components/blocks/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-bengali',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('meta')

  return {
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
      icon: [
        { url: '/favicon/favicon.ico', sizes: '48x48' },
        { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      siteName: 'Kokonaat',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Kokonaat' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.jpg'],
    },
  }
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()
  const isBengali = locale === 'bn'

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={isBengali ? 'font-bengali' : undefined}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Kokonaat',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'BDT' },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${notoSansBengali.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

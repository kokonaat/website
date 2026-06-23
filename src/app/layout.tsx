import { getLocale } from 'next-intl/server'

import { manrope, notoSansBengali } from '@/lib/fonts'
import '@/styles/globals.css'

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const isBengali = locale === 'bn'

  const fontClasses = isBengali
    ? `${manrope.variable} ${notoSansBengali.variable} font-bengali`
    : manrope.variable

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
      <body className={`${fontClasses} font-sans antialiased`}>{children}</body>
    </html>
  )
}

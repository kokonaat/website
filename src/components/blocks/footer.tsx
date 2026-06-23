import Link from 'next/link'

import { getTranslations } from 'next-intl/server'

import { Button } from '@/components/ui/button'

const APP_URL = 'https://app.kokonaat.com'

export async function Footer() {
  const t = await getTranslations('footer')
  const tNav = await getTranslations('nav')
  const year = new Date().getFullYear()

  const productLinks = [
    { label: t('links.howItWorks'), href: '#how-it-works' },
    { label: t('links.features'), href: '#features' },
    { label: t('links.pricing'), href: '#pricing' },
    { label: t('links.faq'), href: '#faq' },
  ]

  return (
    <footer className="mt-12 bg-black text-white">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2 font-bold">
              <span className="bg-white text-black flex size-8 items-center justify-center text-sm font-bold">
                K
              </span>
              Kokonaat
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {t('description')}
            </p>
            <Button className="mt-4" asChild>
              <a href={`${APP_URL}/sign-up`}>{tNav('getStarted')}</a>
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              {t('product')}
            </h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              {t('company')}
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
              App
            </h3>
            <p className="mt-4 text-sm text-white/80">app.kokonaat.com</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 text-sm text-white/60 sm:flex-row">
          <p>{t('copyright', { year })}</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

const APP_URL = 'https://app.kokonaat.com'

export function Pricing() {
  const t = useTranslations('pricing')

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>

        <div className="box mx-auto mt-12 max-w-lg px-8 py-14 text-center">
          <div className="bg-muted mx-auto mb-4 flex size-16 items-center justify-center">
            <Sparkles className="text-foreground size-7" />
          </div>
          <span className="bg-foreground text-background inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider">
            {t('comingSoon')}
          </span>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            {t('comingSoonDescription')}
          </p>
          <Button className="mt-6" size="lg" asChild>
            <a href={`${APP_URL}/sign-up`}>{t('cta')}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

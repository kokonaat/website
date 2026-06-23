'use client'

import { HelpCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const faqKeys = ['1', '2', '3', '4', '5'] as const

export function FAQ() {
  const t = useTranslations('faq')

  return (
    <section id="faq" className="border-y bg-muted/30 py-16 lg:py-24">
      <div className="container max-w-screen-lg">
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {faqKeys.map((key) => (
            <div key={key} className="box p-6">
              <div className="bg-muted flex size-10 items-center justify-center">
                <HelpCircle className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{t(`items.${key}.question`)}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {t(`items.${key}.answer`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

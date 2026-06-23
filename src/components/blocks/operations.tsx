'use client'

import { useTranslations } from 'next-intl'

const cardKeys = ['transactions', 'inventory', 'ledgers', 'reports'] as const

export function Operations() {
  const t = useTranslations('operations')

  return (
    <section id="operations" className="py-16 lg:py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {cardKeys.map((key) => {
            const flow = t.raw(`cards.${key}.flow`) as string[]
            return (
              <div key={key} className="box p-6">
                <h3 className="text-lg font-semibold">{t(`cards.${key}.title`)}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{t(`cards.${key}.description`)}</p>

                <div className="box-muted mt-5 grid divide-x divide-border/80 overflow-hidden" style={{ gridTemplateColumns: `repeat(${flow.length}, minmax(0, 1fr))` }}>
                  {flow.map((step) => (
                    <div key={step} className="px-2 py-3 text-center text-xs font-medium">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

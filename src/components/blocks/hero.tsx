import { ArrowRight } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import { HowItWorksFlow } from '@/components/blocks/how-it-works-flow'
import { Button } from '@/components/ui/button'

const APP_URL = 'https://app.kokonaat.com'

const stepKeys = ['1', '2', '3', '4', '5'] as const
const stripKeys = ['sale', 'stock', 'ledger', 'report'] as const

export async function Hero() {
  const t = await getTranslations('hero')
  const tFlow = await getTranslations('howItWorks')

  const steps = stepKeys.map((key, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title: tFlow(`steps.${key}.title`),
    description: tFlow(`steps.${key}.description`),
  }))

  const operationsStrip = stripKeys.map((key) => t(`operationsStrip.${key}`))

  return (
    <section className="overflow-x-hidden pt-28 pb-16 lg:pt-36 lg:pb-24" id="hero">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <span className="bg-foreground text-background inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            {t('processFlowLabel')}
          </span>
          <h1 className="mt-4 text-3xl tracking-tight md:text-4xl lg:text-5xl lg:leading-tight">
            {t('title')}
          </h1>
          <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg md:text-xl">
            {t('subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href={`${APP_URL}/sign-up`}>{t('getStarted')}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={`${APP_URL}/sign-in`} className="gap-2">
                {t('startFree')}
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <HowItWorksFlow
          title={tFlow('title')}
          steps={steps}
          operationsStripLabel={t('operationsStripLabel')}
          operationsStrip={operationsStrip}
        />
      </div>
    </section>
  )
}

'use client'

import {
  ArrowRight,
  BarChart3,
  FileSpreadsheet,
  Package,
  Store,
  UserPlus,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

const APP_URL = 'https://app.kokonaat.com'

const stepIcons = [UserPlus, Store, Package, BarChart3, FileSpreadsheet]
const steps = ['1', '2', '3', '4', '5'] as const
const stripKeys = ['sale', 'stock', 'ledger', 'report'] as const

export function Hero() {
  const t = useTranslations('hero')
  const tFlow = useTranslations('howItWorks')

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

        <div id="how-it-works" className="mx-auto mt-14 max-w-5xl scroll-mt-28 lg:mt-16">
          <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
            {tFlow('title')}
          </p>

          <div className="box overflow-hidden">
            <div className="hidden lg:grid lg:grid-cols-5 lg:divide-x lg:divide-border">
              {steps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <div
                    key={step}
                    className="bg-muted/20 flex flex-col items-center p-5 text-center"
                  >
                    <div className="bg-muted flex size-12 items-center justify-center">
                      <Icon className="text-foreground size-5" />
                    </div>
                    <span className="text-muted-foreground mt-3 text-xs font-semibold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold leading-snug">
                      {tFlow(`steps.${step}.title`)}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                      {tFlow(`steps.${step}.description`)}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="divide-y divide-border lg:hidden">
              {steps.map((step, i) => {
                const Icon = stepIcons[i]
                return (
                  <div key={step} className="flex gap-4 bg-muted/20 p-5">
                    <div className="bg-muted flex size-12 shrink-0 items-center justify-center">
                      <Icon className="text-foreground size-5" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-semibold">
                        {String(i + 1).padStart(2, '0')} · {tFlow(`steps.${step}.title`)}
                      </p>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {tFlow(`steps.${step}.description`)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-border bg-muted/20 p-5">
              <p className="text-muted-foreground mb-3 text-center text-xs font-semibold uppercase tracking-wider">
                {t('operationsStripLabel')}
              </p>
              <div className="box-muted grid grid-cols-2 divide-x divide-y divide-border/80 sm:grid-cols-4 sm:divide-y-0">
                {stripKeys.map((key) => (
                  <div
                    key={key}
                    className="flex items-center justify-center px-3 py-3 text-center text-xs font-medium sm:text-sm"
                  >
                    {t(`operationsStrip.${key}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

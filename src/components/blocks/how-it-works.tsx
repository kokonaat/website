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

import { DashedLine } from '@/components/dashed-line'

const stepIcons = [UserPlus, Store, Package, BarChart3, FileSpreadsheet]

export function HowItWorks() {
  const t = useTranslations('howItWorks')
  const steps = ['1', '2', '3', '4', '5'] as const

  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>

        <div className="relative mt-14">
          <DashedLine
            orientation="horizontal"
            className="absolute top-8 right-0 left-0 hidden lg:block"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={step} className="relative flex flex-col items-center text-center">
                  <div className="bg-primary text-primary-foreground relative z-10 flex size-16 items-center justify-center rounded-full shadow-md">
                    <Icon className="size-6" />
                    <span className="bg-background text-primary absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full border text-xs font-bold">
                      {step}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{t(`steps.${step}.title`)}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">{t(`steps.${step}.description`)}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="text-muted-foreground absolute top-8 -right-4 hidden size-4 lg:block" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

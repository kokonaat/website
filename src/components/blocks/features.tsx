'use client'

import {
  BarChart3,
  LayoutDashboard,
  Package,
  Receipt,
  Users,
  ClipboardList,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { ModulePreview } from '@/components/module-preview'

const moduleIcons = {
  dashboard: LayoutDashboard,
  transactions: Package,
  inventory: ClipboardList,
  expense: Receipt,
  partners: Users,
  reports: BarChart3,
}

const previewVariants = {
  dashboard: 'dashboard',
  transactions: 'transactions',
  inventory: 'inventory',
  expense: 'dashboard',
  partners: 'transactions',
  reports: 'reports',
} as const

const moduleKeys = [
  'dashboard',
  'transactions',
  'inventory',
  'expense',
  'partners',
  'reports',
] as const

export function Features() {
  const t = useTranslations('features')

  return (
    <section id="features" className="border-y bg-muted/30 py-16 lg:py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moduleKeys.map((key) => {
            const Icon = moduleIcons[key]
            return (
              <div
                key={key}
                className="box flex flex-col p-5 transition-shadow hover:shadow-md"
              >
                <div className="bg-muted flex size-11 items-center justify-center">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-semibold">{t(`modules.${key}.title`)}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{t(`modules.${key}.description`)}</p>
                <div className="mt-4 overflow-hidden border border-border">
                  <ModulePreview variant={previewVariants[key]} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

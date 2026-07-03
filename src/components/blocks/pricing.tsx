import { getTranslations } from 'next-intl/server'

import { PricingPlans } from '@/components/blocks/pricing-plans'

const planKeys = ['free', 'pro', 'max'] as const

export async function Pricing() {
  const t = await getTranslations('pricing')

  const plans = planKeys.map((key) => ({
    key,
    name: t(`plans.${key}.name`),
    description: t(`plans.${key}.description`),
    monthlyPrice: t(`plans.${key}.monthlyPrice`),
    yearlyPrice: t(`plans.${key}.yearlyPrice`),
    features: t.raw(`plans.${key}.features`) as string[],
    popular: key === 'pro',
    ctaText: key === 'free' ? t('ctaFree') : t('cta'),
    ctaHref: 'https://app.kokonaat.com/sign-up',
  }))

  const labels = {
    monthly: t('monthly'),
    yearly: t('yearly'),
    yearlySave: t('yearlySave'),
    taka: t('taka'),
    perMonth: t('perMonth'),
    perYear: t('perYear'),
    free: t('free'),
    cta: t('cta'),
    ctaFree: t('ctaFree'),
    popularBadge: t('popularBadge'),
  }

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>

        <PricingPlans labels={labels} plans={plans} />
      </div>
    </section>
  )
}

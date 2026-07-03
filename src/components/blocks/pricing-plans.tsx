'use client'

import { useState } from 'react'

import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'

const APP_URL = 'https://app.kokonaat.com'

interface Plan {
  key: 'free' | 'pro' | 'max'
  name: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
  features: string[]
  popular: boolean
  ctaText: string
  ctaHref: string
}

interface PricingPlansProps {
  labels: {
    monthly: string
    yearly: string
    yearlySave: string
    taka: string
    perMonth: string
    perYear: string
    free: string
    cta: string
    ctaFree: string
    popularBadge: string
  }
  plans: Plan[]
}

export function PricingPlans({ labels, plans }: PricingPlansProps) {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mt-10">
        <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
          {labels.monthly}
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex h-6 w-11 items-center border transition-colors focus-visible:outline-none ${
            isYearly ? 'bg-foreground border-foreground' : 'bg-muted border-border'
          }`}
          role="switch"
          aria-checked={isYearly}
        >
          <span
            className={`inline-block size-4 bg-background transition-transform ${
              isYearly ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
          {labels.yearly}
        </span>
        {isYearly && (
          <span className="bg-foreground text-background px-2 py-0.5 text-xs font-semibold uppercase tracking-wider">
            {labels.yearlySave}
          </span>
        )}
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`box flex flex-col p-6 ${plan.popular ? 'bg-foreground text-background' : ''}`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className={`font-semibold text-lg ${plan.popular ? 'text-background' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-sm ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>
              {plan.popular && (
                <span className="bg-background text-foreground shrink-0 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider">
                  {labels.popularBadge}
                </span>
              )}
            </div>

            <div className="mt-6">
              <div className="flex items-baseline gap-1">
                <span className={`text-sm font-medium ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {labels.taka}
                </span>
                <span className={`text-4xl font-bold tracking-tight ${plan.popular ? 'text-background' : 'text-foreground'}`}>
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
              </div>
              <span className={`text-sm ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
                {plan.key === 'free'
                  ? labels.free
                  : isYearly
                    ? labels.perYear
                    : labels.perMonth}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <Check
                    className={`mt-0.5 size-4 shrink-0 ${plan.popular ? 'text-background' : 'text-foreground'}`}
                  />
                  <span className={plan.popular ? 'text-background/85' : 'text-muted-foreground'}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              className="mt-8"
              variant={plan.popular ? 'secondary' : 'outline'}
              asChild
            >
              <a href={`${APP_URL}/sign-up`}>
                {plan.key === 'free' ? labels.ctaFree : labels.cta}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

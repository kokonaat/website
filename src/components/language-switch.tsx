'use client'

import { useState, useTransition } from 'react'

import { Languages, Check, ChevronDown } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from '@/i18n/navigation'
import { type Locale } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const LOCALES: { value: Locale; labelKey: 'english' | 'bengali' }[] = [
  { value: 'en', labelKey: 'english' },
  { value: 'bn', labelKey: 'bengali' },
]

export function LanguageSwitch() {
  const locale = useLocale() as Locale
  const t = useTranslations('language')
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [pending, startTransition] = useTransition()

  const setLocale = (next: Locale) => {
    if (next === locale) {
      setOpen(false)
      return
    }

    startTransition(() => {
      router.replace(pathname, { locale: next })
      setOpen(false)
    })
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        aria-label={t('toggle')}
        aria-expanded={open}
        disabled={pending}
        className="border-foreground/25 gap-1.5 px-2.5"
        onClick={() => setOpen((value) => !value)}
      >
        <Languages className="size-4" />
        <span className="hidden text-xs font-medium sm:inline">
          {locale === 'bn' ? t('bengali') : t('english')}
        </span>
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </Button>

      {open && (
        <>
          <button
            type="button"
            aria-label={t('toggle')}
            className="fixed inset-0 z-40 cursor-default bg-transparent"
            onClick={() => setOpen(false)}
          />
          <div className="absolute end-0 top-full z-50 mt-1 min-w-[140px] border border-border bg-background shadow-sm">
            {LOCALES.map(({ value, labelKey }) => (
              <button
                key={value}
                type="button"
                onClick={() => setLocale(value)}
                className={cn(
                  'flex w-full items-center gap-2 border-b border-border px-3 py-2 text-sm last:border-b-0 hover:bg-muted',
                  locale === value && 'bg-muted font-medium',
                )}
              >
                <span className="flex-1 text-start">{t(labelKey)}</span>
                {locale === value && <Check className="size-3.5" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

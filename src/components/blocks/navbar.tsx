"use client"

import { useState } from 'react'

import Link from 'next/link'

import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { LanguageSwitch } from '@/components/language-switch'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const APP_URL = 'https://app.kokonaat.com'

export function Navbar() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)

  const links = [
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('features'), href: '#features' },
    { label: t('operations'), href: '#operations' },
    { label: t('pricing'), href: '#pricing' },
    { label: t('faq'), href: '#faq' },
    { label: t('contact'), href: '#contact' },
  ]

  return (
    <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-screen-xl lg:top-6">
      <nav className="border border-border bg-background/80 shadow-sm backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-4 lg:h-16">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center text-sm font-bold">
              K
            </span>
            <span>Kokonaat</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <LanguageSwitch />
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
              <a href={`${APP_URL}/sign-in`}>{t('login')}</a>
            </Button>
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={`${APP_URL}/sign-up`}>{t('getStarted')}</a>
            </Button>
            <Button
              variant="outline"
              size="icon-sm"
              className="lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border lg:hidden">
            <div className="flex flex-col px-4 py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-muted border-b border-border px-2 py-3 text-sm font-medium last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              <div className={cn('mt-2 flex flex-col gap-2 border-t border-border pt-3')}>
                <Button variant="outline" asChild>
                  <a href={`${APP_URL}/sign-in`}>{t('login')}</a>
                </Button>
                <Button asChild>
                  <a href={`${APP_URL}/sign-up`}>{t('getStarted')}</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

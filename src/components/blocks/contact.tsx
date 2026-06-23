'use client'

import { useTranslations } from 'next-intl'

import { ContactForm } from '@/components/blocks/contact-form'

export function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container max-w-4xl">
        <div className="section-heading">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mt-3">{t('subtitle')}</p>
        </div>
        <div className="mx-auto mt-10 max-w-lg">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

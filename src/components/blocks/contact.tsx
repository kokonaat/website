import dynamic from 'next/dynamic'

import { getTranslations } from 'next-intl/server'

const ContactForm = dynamic(
  () => import('@/components/blocks/contact-form').then((mod) => mod.ContactForm),
  {
    loading: () => (
      <div className="box min-h-[320px] animate-pulse bg-muted/30 p-6" aria-hidden />
    ),
  },
)

export async function Contact() {
  const t = await getTranslations('contact')

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

import { Languages } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export async function LanguageSection() {
  const t = await getTranslations('languageSection')

  return (
    <section className="py-14 lg:py-16">
      <div className="container">
        <div className="bg-foreground text-background mx-auto max-w-screen-lg px-6 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="bg-background text-foreground flex size-14 items-center justify-center">
              <Languages className="size-7" />
            </div>
            <div className="max-w-2xl">
              <span className="text-background/70 mb-4 inline-block text-xs font-semibold uppercase tracking-wider">
                {t('badge')}
              </span>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{t('title')}</h2>
              <p className="text-background/80 mt-3">{t('description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

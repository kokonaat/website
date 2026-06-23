import { Globe, Languages, FileSpreadsheet, Store } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

const badgeIcons = [Languages, Store, FileSpreadsheet, Globe]

export async function TrustStrip() {
  const t = await getTranslations('trust')
  const badgeKeys = ['bilingual', 'multiShop', 'reports', 'ledger'] as const

  return (
    <section className="border-y bg-muted/30 py-10">
      <div className="container">
        <p className="text-muted-foreground mb-6 text-center text-sm font-semibold uppercase tracking-wider">
          {t('title')}
        </p>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {badgeKeys.map((key, i) => {
            const Icon = badgeIcons[i]
            return (
              <div
                key={key}
                className="box flex flex-col items-center p-6 text-center"
              >
                <div className="bg-muted flex size-10 items-center justify-center">
                  <Icon className="text-foreground size-4" />
                </div>
                <p className="mt-3 text-sm font-medium">{t(`badges.${key}`)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

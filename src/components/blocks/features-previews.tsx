'use client'

import { useEffect, useRef, useState } from 'react'

import { ModulePreview } from '@/components/module-preview'

type FeaturesPreviewsProps = {
  variant: 'dashboard' | 'transactions' | 'inventory' | 'reports'
}

export function FeaturesPreviews({ variant }: FeaturesPreviewsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mt-4 overflow-hidden border border-border min-h-[120px]">
      {visible ? (
        <ModulePreview variant={variant} />
      ) : (
        <div className="bg-muted/35 h-[120px] w-full" aria-hidden />
      )}
    </div>
  )
}

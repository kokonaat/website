'use client'

import {
  BarChart3,
  FileSpreadsheet,
  Package,
  Store,
  UserPlus,
} from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

const stepIcons = [UserPlus, Store, Package, BarChart3, FileSpreadsheet]

export type HowItWorksFlowProps = {
  title: string
  steps: { number: string; title: string; description: string }[]
  operationsStripLabel: string
  operationsStrip: string[]
}

const viewport = { once: true, margin: '-40px' } as const

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const stepsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const stripVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.2, ease: 'easeOut' },
  },
}

export function HowItWorksFlow({
  title,
  steps,
  operationsStripLabel,
  operationsStrip,
}: HowItWorksFlowProps) {
  const prefersReducedMotion = useReducedMotion()

  const sectionProps = prefersReducedMotion
    ? { initial: 'visible' as const, animate: 'visible' as const }
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport }

  return (
    <motion.div
      id="how-it-works"
      className="mx-auto mt-14 max-w-5xl scroll-mt-28 lg:mt-16"
      variants={sectionVariants}
      {...sectionProps}
    >
      <motion.p
        className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider"
        variants={itemVariants}
      >
        {title}
      </motion.p>

      <motion.div className="box overflow-hidden" variants={itemVariants}>
        <motion.div
          className="hidden lg:grid lg:grid-cols-5 lg:divide-x lg:divide-border"
          variants={stepsContainerVariants}
        >
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <motion.div
                key={step.number}
                className="bg-muted/20 flex flex-col items-center p-5 text-center"
                variants={itemVariants}
              >
                <div className="bg-muted flex size-12 items-center justify-center">
                  <Icon className="text-foreground size-5" />
                </div>
                <span className="text-muted-foreground mt-3 text-xs font-semibold">
                  {step.number}
                </span>
                <h3 className="mt-2 text-sm font-semibold leading-snug">{step.title}</h3>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="divide-y divide-border lg:hidden"
          variants={stepsContainerVariants}
        >
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <motion.div
                key={step.number}
                className="flex gap-4 bg-muted/20 p-5"
                variants={itemVariants}
              >
                <div className="bg-muted flex size-12 shrink-0 items-center justify-center">
                  <Icon className="text-foreground size-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold">
                    {step.number} · {step.title}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="border-t border-border bg-muted/20 p-5"
          variants={stripVariants}
        >
          <p className="text-muted-foreground mb-3 text-center text-xs font-semibold uppercase tracking-wider">
            {operationsStripLabel}
          </p>
          <div className="box-muted grid grid-cols-2 divide-x divide-y divide-border/80 sm:grid-cols-4 sm:divide-y-0">
            {operationsStrip.map((label, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-3 py-3 text-center text-xs font-medium sm:text-sm"
              >
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

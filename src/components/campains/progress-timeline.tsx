'use client'

import { motion } from 'framer-motion'
import { TRANSFORMATION_STAGES } from '@/lib/site-config'

export function ProgressTimeline({ activeStage }: { activeStage: number }) {
  const total = TRANSFORMATION_STAGES.length
  const progress = total > 1 ? activeStage / (total - 1) : 0

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Desktop : horizontale */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-5 h-[2px] rounded-full bg-white/10" />
        <motion.div
          className="absolute left-0 top-5 h-[2px] rounded-full bg-gradient-to-r from-rdc-sky to-rdc-gold"
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        <ol className="relative grid grid-cols-6 gap-2">
          {TRANSFORMATION_STAGES.map((s, i) => {
            const active = i <= activeStage
            const Icon = s.icon
            return (
              <li key={s.id} className="flex flex-col items-center text-center">
                <motion.span
                  animate={{
                    scale: i === activeStage ? 1.12 : 1,
                    borderColor: active
                      ? 'rgba(242,169,59,0.9)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                  transition={{ duration: 0.4 }}
                  className={`grid h-10 w-10 place-items-center rounded-full border bg-rdc-navy transition-colors duration-300 ${
                    active ? 'text-rdc-gold' : 'text-white/40'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </motion.span>
                <span
                  className={`mt-3 font-display text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    active ? 'text-white' : 'text-white/35'
                  }`}
                >
                  {s.title}
                </span>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Mobile : verticale */}
      <ol className="relative ml-3 space-y-6 md:hidden">
        <div className="absolute bottom-2 left-[19px] top-2 w-[2px] rounded-full bg-white/10" />
        <motion.div
          className="absolute left-[19px] top-2 w-[2px] rounded-full bg-gradient-to-b from-rdc-sky to-rdc-gold"
          animate={{ height: `${progress * 100}%` }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        {TRANSFORMATION_STAGES.map((s, i) => {
          const active = i <= activeStage
          const Icon = s.icon
          return (
            <li key={s.id} className="relative flex items-center gap-4">
              <motion.span
                animate={{
                  scale: i === activeStage ? 1.1 : 1,
                  borderColor: active
                    ? 'rgba(242,169,59,0.9)'
                    : 'rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.4 }}
                className={`z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-rdc-navy ${
                  active ? 'text-rdc-gold' : 'text-white/40'
                }`}
              >
                <Icon className="h-4 w-4" />
              </motion.span>
              <span
                className={`font-display text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  active ? 'text-white' : 'text-white/35'
                }`}
              >
                {s.title}
              </span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

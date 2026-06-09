"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { label: "Years Experience", value: "4", suffix: "+" },
  { label: "Merged Open-Source PRs", value: "6", suffix: "" },
  { label: "Upstream Orgs Contributed", value: "3", suffix: "" },
  { label: "Public Repositories", value: "60", suffix: "+" },
]

function AnimatedNumber({
  value,
  suffix,
  animate,
}: {
  value: string
  suffix: string
  animate: boolean
}) {
  const [display, setDisplay] = useState("0")
  const numericPart = parseInt(value.replace(/\D/g, ""), 10)
  const letterSuffix = value.replace(/[0-9]/g, "")

  useEffect(() => {
    if (!animate) return
    if (isNaN(numericPart)) {
      setDisplay(value)
      return
    }

    let start = 0
    const duration = 1500
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * numericPart)
      setDisplay(`${start}${letterSuffix}`)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [animate, numericPart, value, letterSuffix])

  return (
    <span className="font-mono text-3xl font-bold text-primary md:text-4xl">
      {display}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  animate={isInView}
                />
                <p className="mt-2 text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

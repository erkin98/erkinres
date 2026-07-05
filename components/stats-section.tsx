"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const STATS = [
  { target: 4, suffix: "+", label: "YEARS_EXPERIENCE" },
  { target: 5, suffix: "", label: "MERGED_OSS_PRS" },
  { target: 3, suffix: "", label: "UPSTREAM_ORGS" },
  { target: 60, suffix: "+", label: "PUBLIC_REPOS" },
]

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref)
  const prefersReducedMotion = useReducedMotion()
  const [values, setValues] = useState<number[]>([0, 0, 0, 0])

  useEffect(() => {
    if (!isInView) return
    if (prefersReducedMotion) {
      setValues(STATS.map((s) => s.target))
      return
    }
    const t0 = performance.now()
    const dur = 1400
    let raf = 0
    const step = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setValues(STATS.map((s) => Math.floor(s.target * e)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, prefersReducedMotion])

  return (
    <section ref={ref} style={{ padding: "8px clamp(20px,4.5vw,48px) 0" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 16,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="cc-corner-tl"
            style={{
              position: "relative",
              background: "#10151d",
              border: "1px solid rgba(148,168,190,.16)",
              borderRadius: 8,
              padding: "22px 24px",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 34, fontWeight: 700, color: "#2dd4c8" }}>
              {values[i]}
              {s.suffix}
            </span>
            <p
              style={{
                margin: "6px 0 0",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".12em",
                color: "#758495",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

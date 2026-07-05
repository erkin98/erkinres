"use client"

import { useEffect, useRef } from "react"

type RGB = [number, number, number]

function hexRgb(hex: string): RGB {
  const h = hex.replace("#", "")
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ]
}

const rgba = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const mix = (c1: RGB, c2: RGB, t: number): RGB => [
  Math.floor(lerp(c1[0], c2[0], t)),
  Math.floor(lerp(c1[1], c2[1], t)),
  Math.floor(lerp(c1[2], c2[2], t)),
]

type Particle = { x: number; y: number; px: number; py: number; sp: number; hue: number }

interface FxCanvasProps {
  accent?: string
  accent2?: string
  density?: number
}

/**
 * Flow-field particle drift, ported from the approved design's fx-canvas
 * `flow` variant. Replaces the previous R3F neural-net hero background.
 */
export default function FxCanvas({
  accent = "#2dd4c8",
  accent2 = "#38bdf8",
  density = 1,
}: FxCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const c1 = hexRgb(accent)
    const c2 = hexRgb(accent2)

    let w = 0
    let h = 0
    let particles: Particle[] = []
    let t = 0
    let last = performance.now()
    let raf = 0
    let running = false

    const init = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      if (!w || !h) return
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(340, Math.round(((w * h) / 5200) * density))
      particles = Array.from({ length: n }, () => {
        const x = Math.random() * w
        const y = Math.random() * h
        return { x, y, px: x, py: y, sp: 26 + Math.random() * 44, hue: Math.random() }
      })
    }

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      t += dt
      ctx.clearRect(0, 0, w, h)
      ctx.lineCap = "round"
      for (const p of particles) {
        const a =
          (Math.sin(p.x * 0.004 + t * 0.22) +
            Math.cos(p.y * 0.005 - t * 0.17) +
            Math.sin((p.x + p.y) * 0.0016 + t * 0.09)) *
          1.7
        p.px = p.x
        p.py = p.y
        p.x += Math.cos(a) * p.sp * dt
        p.y += Math.sin(a) * p.sp * dt
        if (p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10 || Math.random() < 0.002) {
          p.x = Math.random() * w
          p.y = Math.random() * h
          p.px = p.x
          p.py = p.y
        }
        const col = mix(c1, c2, p.hue)
        ctx.strokeStyle = rgba(col, 0.28)
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(p.x - Math.cos(a) * 9, p.y - Math.sin(a) * 9)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()
        if (p.hue > 0.93) {
          ctx.fillStyle = rgba(col, 0.5)
          ctx.fillRect(p.x - 1, p.y - 1, 2, 2)
        }
      }
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      if (!running) return
      running = false
      cancelAnimationFrame(raf)
    }

    init()

    const ro = new ResizeObserver(() => init())
    ro.observe(canvas)
    const io = new IntersectionObserver(
      (entries) => (entries[0].isIntersecting ? start() : stop()),
      { rootMargin: "160px" },
    )
    io.observe(canvas)

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
    }
  }, [accent, accent2, density])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  )
}

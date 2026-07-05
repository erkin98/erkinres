"use client"

import { useEffect, useState } from "react"
import FxCanvas from "@/components/fx-canvas"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const roles = [
  "Senior Software Engineer",
  "Full-Stack Engineer",
  "AI / LLM Engineer",
  "Open-Source Contributor",
]

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(roles[0])
      return
    }
    const role = roles[currentRole]
    let holdTimer: ReturnType<typeof setTimeout> | undefined
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            holdTimer = setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )
    return () => {
      clearTimeout(timeout)
      if (holdTimer) clearTimeout(holdTimer)
    }
  }, [displayText, isDeleting, currentRole, prefersReducedMotion])

  const cmd = { color: "#758495" }
  const answer = { margin: "0 0 12px", color: "#dce6f0" } as const

  return (
    <section style={{ position: "relative" }}>
      {!prefersReducedMotion && <FxCanvas />}
      <div
        style={{
          position: "relative",
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(32px,4vw,56px)",
          alignItems: "center",
          padding: "clamp(48px,7vw,88px) clamp(20px,4.5vw,48px) clamp(40px,5vw,64px)",
        }}
      >
        {/* Left column */}
        <div style={{ flex: "1 1 520px", minWidth: "min(100%, 320px)" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".14em",
              color: "#2dd4c8",
            }}
          >
            <span style={{ color: "#5d6b7c" }}>{"//"}</span> SENIOR SOFTWARE ENGINEER
          </p>
          <h1
            style={{
              margin: "18px 0 24px",
              fontSize: "clamp(54px,7vw,92px)",
              fontWeight: 700,
              lineHeight: 0.96,
              letterSpacing: "-.03em",
            }}
          >
            Erkin
            <br />
            Qarayev
            <span aria-hidden="true" style={{ color: "#2dd4c8", animation: "blink 1.1s steps(1) infinite" }}>
              _
            </span>
          </h1>
          <p style={{ margin: "0 0 36px", maxWidth: 520, fontSize: 16, lineHeight: 1.65, color: "#8a97a8" }}>
            4+ years shipping production software at Technosec.io — JupyterLab analytics platform, notebook-native LLM
            tooling, merged OSS upstream.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              className="cc-btn"
              href="#projects"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".04em",
                background: "#2dd4c8",
                color: "#071614",
                padding: "15px 24px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              [ VIEW_PROJECTS ]
            </a>
            <a
              className="cc-btn-ghost"
              href="#contact"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: ".04em",
                border: "1px solid rgba(45,212,200,.35)",
                color: "#2dd4c8",
                padding: "15px 24px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              [ GET_IN_TOUCH ]
            </a>
          </div>
        </div>

        {/* Right column — terminal window */}
        <div
          className="cc-corners"
          style={{
            flex: "1 1 400px",
            minWidth: "min(100%, 320px)",
            background: "rgba(13,18,25,.9)",
            border: "1px solid rgba(148,168,190,.18)",
            borderRadius: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 16px",
              borderBottom: "1px solid rgba(148,168,190,.14)",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f56", opacity: 0.75 }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ffbd2e", opacity: 0.75 }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#27c93f", opacity: 0.75 }} />
            <span
              style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}
            >
              eq@technosec — zsh
            </span>
          </div>
          <div style={{ padding: "22px 24px", fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.7 }}>
            <p className="sr-only">
              role: Senior Software Engineer · Full-Stack Engineer · AI / LLM Engineer · Open-Source Contributor
            </p>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2dd4c8" }}>$</span> <span style={cmd}>whoami</span>
            </p>
            <p style={answer}>erkin.qarayev · senior software engineer</p>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2dd4c8" }}>$</span> <span style={cmd}>current_focus</span>
            </p>
            <p style={answer}>jupyterlab analytics platform · notebook-native LLM tooling</p>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2dd4c8" }}>$</span> <span style={cmd}>role</span>
            </p>
            <p aria-hidden="true" style={{ margin: "0 0 12px", height: 22, color: "#dce6f0" }}>
              {displayText}
              <span style={{ color: "#2dd4c8", animation: "blink 1.1s steps(1) infinite" }}>▉</span>
            </p>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2dd4c8" }}>$</span> <span style={cmd}>oss --merged</span>
            </p>
            <p style={answer}>jupyterlab@4.2.0 · jupyter-ai · jupyter-chat</p>
            <p style={{ margin: 0 }}>
              <span style={{ color: "#2dd4c8" }}>$</span> <span style={cmd}>status</span>
            </p>
            <p style={{ margin: 0, color: "#2dd4c8" }}>available_for_opportunities ●</p>
          </div>
        </div>
      </div>
    </section>
  )
}

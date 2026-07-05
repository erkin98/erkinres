"use client"

import { useState, useEffect } from "react"

const navItems = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [clock, setClock] = useState("--:--:--")

  useEffect(() => {
    const onScroll = () => {
      const ids = ["contact", "changelog", "skills", "projects", "experience", "about"]
      let found = ""
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 170) {
          found = id
          break
        }
      }
      setActiveSection(found)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const setNow = () => setClock(new Date().toUTCString().slice(17, 25))
    setNow()
    const iv = setInterval(setNow, 1000)
    return () => clearInterval(iv)
  }, [])

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        padding: "12px clamp(16px,3vw,28px)",
        borderBottom: "1px solid rgba(148,168,190,.14)",
        background: "rgba(10,14,19,.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 12, whiteSpace: "nowrap" }}>
        <span style={{ color: "#2dd4c8" }}>erkin@portfolio</span>
        <span style={{ color: "#5d6b7c" }}>:~$</span>{" "}
        <span style={{ color: "#dce6f0" }}>./run --mode=recruiter</span>
      </p>

      <nav aria-label="Primary" style={{ display: "flex", gap: "clamp(12px,2vw,22px)", flexWrap: "wrap" }}>
        {navItems.map((item) => (
          <a
            key={item.href}
            className="cc-navlink"
            href={item.href}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: activeSection === item.href.slice(1) ? "#2dd4c8" : "#8a97a8",
              textDecoration: "none",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
          <span
            aria-hidden="true"
            style={{
              width: 7,
              height: 7,
              borderRadius: 999,
              background: "#2dd4c8",
              animation: "pulseDot 2s ease-in-out infinite",
            }}
          />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#2dd4c8" }}>OPEN_TO_WORK</span>
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#758495" }}>UTC {clock}</span>
      </div>
    </header>
  )
}

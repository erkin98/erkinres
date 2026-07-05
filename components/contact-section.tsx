"use client"

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{ padding: "clamp(64px,8vw,88px) clamp(20px,4.5vw,48px) clamp(64px,8vw,92px)" }}
    >
      <div
        className="cc-corners"
        style={{
          position: "relative",
          maxWidth: 760,
          margin: "0 auto",
          background: "#10151d",
          border: "1px solid rgba(148,168,190,.16)",
          borderRadius: 10,
          padding: "clamp(28px,5vw,48px)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 14px", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", color: "#2dd4c8" }}>
          [ 06 // CONTACT ]
        </p>
        <h2 style={{ margin: "0 0 12px", fontFamily: "var(--font-mono)", fontSize: "clamp(22px,3vw,30px)", fontWeight: 600 }}>
          initiate_contact()
        </h2>
        <p style={{ margin: "0 auto 30px", maxWidth: 480, fontSize: 14.5, lineHeight: 1.6, color: "#8a97a8" }}>
          Open to new opportunities, AI architecture challenges, and innovative engineering problems.
        </p>
        <a
          href="mailto:erkinqara@proton.me"
          className="cc-btn"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: ".04em",
            background: "#2dd4c8",
            color: "#071614",
            padding: "16px 28px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          [ erkinqara@proton.me ]
        </a>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
          <a
            className="cc-link"
            href="https://github.com/erkin98"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#758495", textDecoration: "none" }}
          >
            github.com/erkin98 ↗
          </a>
          <a
            className="cc-link"
            href="https://linkedin.com/in/garayev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#758495", textDecoration: "none" }}
          >
            linkedin.com/in/garayev ↗
          </a>
        </div>
      </div>
    </section>
  )
}

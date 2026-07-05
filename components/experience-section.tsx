"use client"

const TAGS = ["LangGraph", "MCP", "FastAPI", "Tornado", "React", "TypeScript", "JupyterLab", "Python", "Security"]

const BULLETS = [
  "Primary author of the platform's JupyterLab frontend extension — custom file browser, a dozen-component React/TypeScript design system, and the core plugin entry point",
  "Built Datanout, a notebook-native LLM assistant — LangChain/LangGraph tool-calling agent, human-in-the-loop approval with resumable persisted interrupts, a full Model Context Protocol client, OpenAI vector-store file search, and AST-based code safety",
  "Architected a cross-origin notebook ↔ analytics integration across 3 hosting modes, secured by an HMAC-SHA256 authenticated RPC bridge",
  "Built a custom React Flow pipeline-graph editor and led an AG Grid major-version migration (v27 → v35)",
  "Hardened filesystem, persistence, and lifecycle layers against path-traversal, SSRF, and environment-variable injection; enforced per-tenant session isolation",
  "Rebuilt the test suite on real fixtures (~1,000 tests) and decomposed a large coordinator class with zero behavior change",
  "Merged contributions to JupyterLab core (shipped in 4.2.0) and the Jupyter-AI agent stack",
]

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "clamp(56px,7vw,80px) clamp(20px,4.5vw,48px) 0" }}>
      <h2 className="sr-only">Experience</h2>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", color: "#2dd4c8" }}>
            [ 02 // EXPERIENCE ]
          </span>
          <span style={{ flex: 1, height: 1, background: "rgba(148,168,190,.14)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>2021 — PRESENT</span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: "#10151d",
            border: "1px solid rgba(148,168,190,.16)",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              flex: "0 1 300px",
              minWidth: "min(100%,280px)",
              padding: 28,
              borderRight: "1px solid rgba(148,168,190,.14)",
            }}
          >
            <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 15, color: "#2dd4c8" }}>
              Technosec.io ↗
            </p>
            <h3 style={{ margin: "8px 0 6px", fontSize: 21, fontWeight: 700 }}>Senior Software Engineer</h3>
            <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 12, color: "#758495" }}>
              2021 — present
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10.5,
                    color: "#2dd4c8",
                    background: "rgba(45,212,200,.06)",
                    border: "1px solid rgba(45,212,200,.22)",
                    padding: "3px 8px",
                    borderRadius: 4,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ flex: "1 1 480px", minWidth: "min(100%,300px)", padding: 28 }}>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {BULLETS.map((text, i) => (
                <li
                  key={i}
                  style={{ display: "flex", gap: 10, padding: "6px 0", fontSize: 14, lineHeight: 1.6, color: "#8a97a8" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#2dd4c8", marginTop: 2 }}>▸</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

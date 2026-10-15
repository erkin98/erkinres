"use client"

const MODULES = [
  {
    num: "01",
    title: "LLM Agents & Tooling",
    body: "Built Datanout, a notebook-native LLM assistant — a LangChain/LangGraph tool-calling agent with human-in-the-loop approval and a full Model Context Protocol client.",
  },
  {
    num: "02",
    title: "Memory & Safety",
    body: "Cross-session memory with summarization, prompt-injection screening, secret masking on tool output, and an AST-based safety gate that blocks unsafe imports and calls in model-generated code.",
  },
  {
    num: "03",
    title: "Full-Stack Development",
    body: "Python/FastAPI/Tornado backends and React/TypeScript frontends — custom JupyterLab extensions, a React Flow pipeline editor, and real-time WebSocket streaming.",
  },
  {
    num: "04",
    title: "Testing & Safety",
    body: "Selenium, Playwright and pytest suites run on every push through CI, plus Datanout's defense-in-depth safety stack — an AST gate on generated code, prompt-injection screening, and secret masking.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "clamp(56px,7vw,80px) clamp(20px,4.5vw,48px) 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", color: "#2dd4c8" }}>
            [ 01 // ABOUT ]
          </span>
          <span style={{ flex: 1, height: 1, background: "rgba(148,168,190,.14)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>4 MODULES</span>
        </div>

        <h2 style={{ margin: "0 0 12px", fontSize: "clamp(28px,3.4vw,36px)", fontWeight: 700, letterSpacing: "-.02em" }}>
          Building intelligent systems.
        </h2>
        <p style={{ margin: "0 0 28px", maxWidth: 640, fontSize: 15.5, lineHeight: 1.6, color: "#8a97a8" }}>
          Senior Software Engineer with 5+ years at Gain Theory — JupyterLab-based analytics platform and
          notebook-native LLM tooling. Open-source contributor to JupyterLab and the Jupyter-AI ecosystem.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
            gap: 16,
          }}
        >
          {MODULES.map((m) => (
            <div
              key={m.num}
              className="cc-card"
              style={{
                background: "#10151d",
                border: "1px solid rgba(148,168,190,.16)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#2dd4c8",
                    background: "rgba(45,212,200,.08)",
                    border: "1px solid rgba(45,212,200,.25)",
                    padding: "3px 8px",
                    borderRadius: 4,
                  }}
                >
                  {m.num}
                </span>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{m.title}</h3>
              </div>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "#8a97a8" }}>{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

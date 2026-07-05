"use client"

type SkillChip = { label: string; tier: string }
type SkillCategory = { title: string; swatch: string; description: string; chips: SkillChip[] }

const categories: SkillCategory[] = [
  {
    title: "AI & LLM Orchestration",
    swatch: "#2dd4c8",
    description:
      "Datanout — LangGraph tool-calling agent with human-in-the-loop control, an MCP client, and AST-based safety.",
    chips: [
      { label: "LangGraph", tier: "CORE" },
      { label: "LangChain", tier: "CORE" },
      { label: "Tool-Calling Agents", tier: "CORE" },
      { label: "MCP Protocol", tier: "ADV" },
      { label: "Vector-Store Search", tier: "CORE" },
      { label: "Human-in-the-Loop", tier: "CORE" },
      { label: "Prompt Engineering", tier: "ADV" },
      { label: "Claude / OpenAI / Ollama", tier: "PROV" },
    ],
  },
  {
    title: "Languages & Frameworks",
    swatch: "#38bdf8",
    description: "Full-stack development with Python and TypeScript — real-time dashboards and FastAPI backends.",
    chips: [
      { label: "Python", tier: "PRIMARY" },
      { label: "TypeScript", tier: "PRIMARY" },
      { label: "React", tier: "FRONT" },
      { label: "Next.js", tier: "FRONT" },
      { label: "FastAPI", tier: "BACK" },
      { label: "Pydantic", tier: "BACK" },
      { label: "Tornado", tier: "BACK" },
      { label: "JupyterLab", tier: "TOOLING" },
    ],
  },
  {
    title: "Testing & Quality",
    swatch: "#2dd4c8",
    description: "Real-fixture test suites (~1,000 tests) and integration-first QA wired into CI/CD.",
    chips: [
      { label: "pytest", tier: "UNIT" },
      { label: "Vitest", tier: "UNIT" },
      { label: "Playwright", tier: "E2E" },
      { label: "Selenium", tier: "E2E" },
      { label: "Visual Regression", tier: "QA" },
      { label: "E2E Automation", tier: "QA" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    swatch: "#38bdf8",
    description: "CI/CD pipelines reducing deployment from hours to minutes, with parallel execution and Docker.",
    chips: [
      { label: "CI/CD Pipelines", tier: "CORE" },
      { label: "Jenkins", tier: "CI" },
      { label: "GitLab CI/CD", tier: "CI" },
      { label: "Docker", tier: "INFRA" },
      { label: "RESTful APIs", tier: "API" },
      { label: "WebSocket", tier: "API" },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "clamp(56px,7vw,80px) clamp(20px,4.5vw,48px) 0" }}>
      <h2 className="sr-only">Skills</h2>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", color: "#2dd4c8" }}>
            [ 04 // SKILLS ]
          </span>
          <span style={{ flex: 1, height: 1, background: "rgba(148,168,190,.14)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>STACK</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
            gap: 16,
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: "#10151d",
                border: "1px solid rgba(148,168,190,.16)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ width: 10, height: 10, background: cat.swatch }} />
                <h3 style={{ margin: 0, fontSize: 15.5, fontWeight: 600 }}>{cat.title}</h3>
              </div>
              <p style={{ margin: "0 0 14px", fontSize: 12.5, lineHeight: 1.55, color: "#758495" }}>
                {cat.description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 8 }}>
                {cat.chips.map((chip) => (
                  <div
                    key={chip.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1px solid rgba(148,168,190,.14)",
                      background: "rgba(148,168,190,.04)",
                      padding: "7px 10px",
                      borderRadius: 5,
                    }}
                  >
                    <span style={{ fontSize: 13 }}>{chip.label}</span>
                    <span
                      style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: cat.swatch }}
                    >
                      {chip.tier}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

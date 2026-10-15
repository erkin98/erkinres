"use client"

const TAGS = ["LangGraph", "MCP", "FastAPI", "Tornado", "React", "TypeScript", "JupyterLab", "Python", "Security"]

const BULLETS = [
  "Primary author of the platform's full-stack JupyterLab extension — a custom file browser, a from-scratch React/TypeScript widget library over Ant Design and AG Grid, a module-federation app-shell, and the core plugin entry point over a Python/Tornado backend, held across two major version upgrades",
  "Built Datanout, a notebook-native LLM assistant — LangChain/LangGraph tool-calling agent, human-in-the-loop approval with resumable persisted interrupts, a full Model Context Protocol client, prompt-injection screening, and AST-based code safety",
  "Developed the platform's data-pipeline wizard, including a React Flow pipeline-graph editor with two-way ipywidgets/React state sync, now being rebuilt as a standalone FastAPI/Next.js/React app (MVP in development)",
  "Sole-authored two internal developer tools — a JupyterLab diagnostics/issue-reporter extension that files privacy-redacted Jira tickets, and a Python Redmine REST toolkit with a Typer CLI, a Textual TUI and an MCP server, across 506 tests",
  "Configured the team's AI coding assistants (Claude Code, Cursor, GitHub Copilot) with custom instruction files and hooks that hold generated code to the codebase's conventions before review",
  "Migrated the platform's data layer from SQLAlchemy to SQLModel on PostgreSQL, reworking the Alembic migrations, and implemented a ZeroMQ log transport between server extensions",
  "Wrote a TypeScript-to-Python code-generation tool that turns widget type definitions into matching Pydantic classes and fails the build on any drift between the two sides",
  "Diagnosed and fixed a platform-wide freeze where blocking kernel calls stalled the async event loop, moving kernel traffic onto the kernel's IOPub channel to unblock concurrent users",
  "Owned the platform's test automation — Selenium and Playwright end-to-end tests plus a pytest suite, run on every push through CI",
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
              Gain Theory ↗
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

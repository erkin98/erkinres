"use client"

type Entry = { year: string; title: string; text: string }

const entries: Entry[] = [
  {
    year: "2021",
    title: "Joined Gain Theory",
    text: "Joined the Agile team building the JupyterLab analytics platform; became primary author of its frontend extension and test infrastructure.",
  },
  {
    year: "2022",
    title: "Frontend extension",
    text: "Custom file browser, a React/TS widget library over Ant Design and AG Grid, core plugin (primary author).",
  },
  {
    year: "2023",
    title: "Pipeline wizard",
    text: "Data-pipeline wizard with a React Flow editor and two-way ipywidgets/React state sync.",
  },
  {
    year: "2024",
    title: "Internal dev tools",
    text: "Sole-authored a JupyterLab diagnostics/issue-reporter and a Redmine REST toolkit (CLI, TUI, MCP server, 506 tests).",
  },
  {
    year: "2025",
    title: "Datanout + merged OSS",
    text: "Notebook-native LLM agent; merged PRs into JupyterLab core and Jupyter-AI.",
  },
  {
    year: "2026",
    title: "minitui, open to work",
    text: "Employment at Gain Theory ended in June. Building minitui (TypeScript, in progress) and the kishai evaluation harness; open to remote roles.",
  },
]

export default function ChangelogSection() {
  return (
    <section id="changelog" style={{ padding: "clamp(56px,7vw,80px) clamp(20px,4.5vw,48px) 0" }}>
      <h2 className="sr-only">Changelog</h2>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 30 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", color: "#2dd4c8" }}>
            [ 05 // CHANGELOG ]
          </span>
          <span style={{ flex: 1, height: 1, background: "rgba(148,168,190,.14)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>2021 → 2026</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 18 }}>
          {entries.map((entry) => (
            <div key={entry.year} style={{ borderTop: "2px solid rgba(45,212,200,.4)", paddingTop: 14 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#2dd4c8" }}>{entry.year}</span>
              <h3 style={{ margin: "6px 0", fontSize: 14, fontWeight: 600 }}>{entry.title}</h3>
              <p style={{ margin: 0, fontSize: 12, lineHeight: 1.55, color: "#8a97a8" }}>{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

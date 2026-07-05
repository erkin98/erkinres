"use client"

import { useState } from "react"

type Project = {
  eyebrow: string
  title: string
  summary: string
  details: string[]
  tags: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    featured: true,
    eyebrow: "JUPYTERLAB + JUPYTER AI · LANGCHAIN / LANGGRAPH",
    title: "Datanout — Notebook-Native LLM Assistant",
    summary:
      "A JupyterLab extension that drops an AI assistant into the notebook and lets it call tools — run cells, edit notebooks, read files, reach external servers — to do real work. Shipped as a Python server extension plus an NPM frontend, auto-discovered via the jupyter_ai.personas entry point.",
    details: [
      "LangChain/LangGraph tool-calling agent with token streaming",
      "Human-in-the-loop approval (allow / deny / ask) with SQLite-persisted, resumable interrupts",
      "Full Model Context Protocol client — pooling, per-server circuit breaker, SSRF/DNS-rebinding protection",
      "OpenAI vector-store file search, cross-session memory, token-budgeted context trimming",
      "AST-based safety gate and prompt-injection screening for model-generated code",
    ],
    tags: ["LangGraph", "MCP", "Python", "OpenAI", "AI Safety"],
  },
  {
    eyebrow: "3 HOSTING MODES · HMAC RPC",
    title: "Cross-Origin Notebook Integration",
    summary:
      "Connects a Tornado/Python notebook platform to a React/Vite analytics app across three hosting modes over a typed, bidirectional postMessage RPC bridge.",
    details: [
      "Typed bidirectional RPC bridge (Penpal) with strict origin validation",
      "HMAC-SHA256 grant tokens, constant-time comparison, bounded replay cache",
      "Kernel-location-agnostic: in-process and remote Jupyter Gateway kernels",
      "SSRF / CSP / CSRF hardening with fail-closed origin allow-listing",
    ],
    tags: ["TypeScript", "Tornado", "React", "Security"],
  },
  {
    eyebrow: "AES-256-GCM · CLEAN ARCHITECTURE",
    title: "diffuseai — Encrypted GenAI Image CLI",
    summary:
      "A Python CLI for AI image generation with a verified end-to-end encryption layer, driving a self-hosted SDXL backend over ComfyUI.",
    details: [
      "Argon2id key derivation splitting auth hash from master key",
      "Per-file HKDF-SHA256 subkeys and AES-256-GCM authenticated encryption",
      "ComfyUI HTTP/WebSocket integration driving SDXL node graphs",
      "Strict MyPy + Ruff, unit-tested crypto core",
    ],
    tags: ["Python", "Cryptography", "ComfyUI", "SDXL"],
  },
  {
    eyebrow: "FASTAPI · JWT · STREAMING",
    title: "kishai — Authenticated LLM-Inference Service",
    summary:
      "A FastAPI service exposing streaming LLM inference over a local Ollama backend, with authentication, rate limiting, and strict typing.",
    details: [
      "JWT + API-key auth, bcrypt hashing, role-based access",
      "Server-sent-event streaming over async SQLAlchemy 2.0",
      "Rate limiting and request-isolation middleware",
      "Strict MyPy typing and Ruff via uv / just tooling",
    ],
    tags: ["FastAPI", "Python", "Ollama", "JWT"],
  },
  {
    eyebrow: "NEXT.JS 15 / REACT 19",
    title: "Analytics Dashboard",
    summary:
      "A business-intelligence dashboard with a typed integration layer and graceful fallbacks, built to engineering-practice standards.",
    details: [
      "Recharts/Radix component library over App-Router API routes",
      "Typed integration layer with graceful mock fallbacks",
      "Jest + Playwright visual-regression tests, Lighthouse CI budgets",
      "Dockerised deployment",
    ],
    tags: ["Next.js", "React", "TypeScript", "Docker"],
  },
  {
    eyebrow: "JUPYTERLAB + JUPYTER-AI · MERGED",
    title: "Open-Source Contributions",
    summary:
      "Merged contributions across the JupyterLab and Jupyter-AI agent ecosystem, plus fixes in review on the LiteLLM gateway.",
    details: [
      "JupyterLab core: file-browser fix shipped in release 4.2.0 (#16026)",
      "jupyter-ai-acp-client: agent-terminal hardening against env-var injection (#25) and attachment forwarding (#24)",
      "jupyter-ai-jupyternaut error handling (#42); jupyter-chat mimetype API (#383)",
      "LiteLLM: streaming and Azure-auth fixes in review (#22085, #22696)",
    ],
    tags: ["JupyterLab", "Open Source", "Python", "TypeScript"],
  },
]

function ProjectCard({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project
  index: number
  open: boolean
  onToggle: () => void
}) {
  const featured = project.featured
  const detailsId = `project-details-${index}`

  return (
    <div
      className={featured ? "cc-corners" : "cc-card"}
      style={
        featured
          ? {
              gridColumn: "1/-1",
              position: "relative",
              background: "#10151d",
              border: "1px solid rgba(45,212,200,.3)",
              borderRadius: 8,
              padding: 26,
            }
          : {
              background: "#10151d",
              border: "1px solid rgba(148,168,190,.16)",
              borderRadius: 8,
              padding: 26,
            }
      }
    >
      {featured ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <span
            style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".08em", color: "#758495" }}
          >
            {project.eyebrow}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: ".08em",
              color: "#2dd4c8",
              background: "rgba(45,212,200,.1)",
              border: "1px solid rgba(45,212,200,.3)",
              padding: "3px 9px",
              borderRadius: 4,
            }}
          >
            FEATURED
          </span>
        </div>
      ) : (
        <p
          style={{
            margin: "0 0 12px",
            fontFamily: "var(--font-mono)",
            fontSize: 10.5,
            letterSpacing: ".08em",
            color: "#758495",
          }}
        >
          {project.eyebrow}
        </p>
      )}

      <h3 style={{ margin: "0 0 8px", fontSize: featured ? 20 : 17, fontWeight: 600 }}>{project.title}</h3>
      <p
        style={{
          margin: featured ? "0 0 14px" : "0 0 12px",
          fontSize: featured ? 13.5 : 13,
          lineHeight: 1.6,
          color: "#8a97a8",
        }}
      >
        {project.summary}
      </p>

      <button
        type="button"
        onClick={onToggle}
        className="cc-detail-toggle"
        aria-expanded={open}
        aria-controls={open ? detailsId : undefined}
        style={{
          display: "inline-block",
          margin: featured ? "0 0 14px" : "0 0 12px",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "#2dd4c8",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {open ? "[-] hide_details" : "[+] show_details"}
      </button>

      {open && (
        <ul
          id={detailsId}
          style={{
            margin: featured ? "0 0 16px" : "0 0 14px",
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {project.details.map((d, i) => (
            <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, lineHeight: 1.55, color: "#8a97a8" }}>
              <span
                style={{ marginTop: 7, width: 5, height: 5, borderRadius: 999, background: "#2dd4c8", flex: "none" }}
              />
              {d}
            </li>
          ))}
        </ul>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10.5,
              color: "#8a97a8",
              background: "rgba(148,168,190,.05)",
              border: "1px solid rgba(148,168,190,.16)",
              padding: "3px 8px",
              borderRadius: 4,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [open, setOpen] = useState([true, false, false, false, false, false])
  const toggle = (i: number) => setOpen((prev) => prev.map((v, j) => (j === i ? !v : v)))

  return (
    <section id="projects" style={{ padding: "clamp(56px,7vw,80px) clamp(20px,4.5vw,48px) 0" }}>
      <h2 className="sr-only">Projects</h2>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".1em", color: "#2dd4c8" }}>
            [ 03 // PROJECTS ]
          </span>
          <span style={{ flex: 1, height: 1, background: "rgba(148,168,190,.14)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#758495" }}>6 REPOS</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,330px),1fr))",
            gap: 16,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} open={open[i]} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

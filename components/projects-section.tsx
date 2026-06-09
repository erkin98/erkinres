"use client"

import { useRef, useState } from "react"
import {
  Brain,
  Database,
  Layers,
  Monitor,
  Workflow,
  Shield,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    icon: Brain,
    title: "Rovanaut — Notebook-Native LLM Assistant",
    subtitle: "JupyterLab + Jupyter AI · LangChain / LangGraph",
    description:
      "A JupyterLab extension that drops an AI assistant into the notebook and lets it call tools — run cells, edit notebooks, read files, reach external servers — to do real work. Shipped as a Python server extension plus an NPM frontend, auto-discovered via the jupyter_ai.personas entry point.",
    features: [
      "LangChain/LangGraph tool-calling agent with token streaming",
      "Human-in-the-loop approval (allow / deny / ask) with SQLite-persisted, resumable interrupts",
      "Full Model Context Protocol client — pooling, per-server circuit breaker, SSRF/DNS-rebinding protection",
      "OpenAI vector-store file search, cross-session memory, token-budgeted context trimming",
      "AST-based safety gate and prompt-injection screening for model-generated code",
    ],
    tags: ["LangGraph", "MCP", "Python", "OpenAI", "AI Safety"],
    color: "hsl(175, 70%, 50%)",
    featured: true,
  },
  {
    icon: Workflow,
    title: "Cross-Origin Notebook Integration",
    subtitle: "3 Hosting Modes · HMAC-Authenticated RPC",
    description:
      "Connects a Tornado/Python Jupyter notebook platform to a React/Vite analytics app across three hosting modes — iframe-embedded, same-origin SPA behind a reverse proxy, and an embedded Lumino-shell panel — over a typed, bidirectional postMessage RPC bridge.",
    features: [
      "Typed bidirectional RPC bridge (Penpal) with strict origin validation",
      "HMAC-SHA256 grant tokens, constant-time comparison, bounded replay cache",
      "Kernel-location-agnostic: in-process and remote Jupyter Gateway kernels",
      "SSRF / CSP / CSRF hardening with fail-closed origin allow-listing",
    ],
    tags: ["TypeScript", "Tornado", "React", "Security", "JupyterLab"],
    color: "hsl(200, 60%, 50%)",
    featured: false,
  },
  {
    icon: Shield,
    title: "diffuseai — Encrypted GenAI Image CLI",
    subtitle: "AES-256-GCM · Clean Architecture",
    description:
      "A Python CLI for AI image generation with a verified end-to-end encryption layer, driving a self-hosted SDXL backend over ComfyUI in clean-architecture layers.",
    features: [
      "Argon2id key derivation splitting auth hash from master key",
      "Per-file HKDF-SHA256 subkeys and AES-256-GCM authenticated encryption",
      "ComfyUI HTTP/WebSocket integration driving SDXL node graphs",
      "Strict MyPy + Ruff, unit-tested crypto core",
    ],
    tags: ["Python", "Cryptography", "ComfyUI", "SDXL"],
    color: "hsl(175, 70%, 50%)",
    featured: false,
  },
  {
    icon: Database,
    title: "kishai — Authenticated LLM-Inference Service",
    subtitle: "FastAPI · JWT · Streaming",
    description:
      "A FastAPI service exposing streaming LLM inference over a local Ollama backend, with authentication, rate limiting, and strict typing.",
    features: [
      "JWT + API-key auth, bcrypt hashing, role-based access",
      "Server-sent-event streaming over async SQLAlchemy 2.0",
      "Rate limiting and request-isolation middleware",
      "Strict MyPy typing and Ruff via uv / just tooling",
    ],
    tags: ["FastAPI", "Python", "Ollama", "JWT"],
    color: "hsl(200, 60%, 50%)",
    featured: false,
  },
  {
    icon: Monitor,
    title: "Analytics Dashboard",
    subtitle: "Next.js 15 / React 19",
    description:
      "A business-intelligence dashboard with a typed integration layer and graceful fallbacks, built to engineering-practice standards.",
    features: [
      "Recharts/Radix component library over App-Router API routes",
      "Typed integration layer with graceful mock fallbacks",
      "Jest + Playwright visual-regression tests, Lighthouse CI budgets",
      "Dockerised deployment",
    ],
    tags: ["Next.js", "React", "TypeScript", "Docker"],
    color: "hsl(175, 70%, 50%)",
    featured: false,
  },
  {
    icon: Layers,
    title: "Open-Source Contributions",
    subtitle: "JupyterLab + Jupyter-AI (merged)",
    description:
      "Merged contributions across the JupyterLab and Jupyter-AI agent ecosystem, plus fixes in review on the LiteLLM gateway.",
    features: [
      "JupyterLab core: file-browser fix shipped in release 4.2.0 (#16026)",
      "jupyter-ai-acp-client: agent-terminal hardening against env-var injection (#25) and attachment forwarding (#24)",
      "jupyter-ai-jupyternaut error handling (#42); jupyter-chat mimetype API (#383)",
      "LiteLLM: streaming and Azure-auth fixes in review (#22085, #22696)",
    ],
    tags: ["JupyterLab", "Open Source", "Python", "TypeScript"],
    color: "hsl(200, 60%, 50%)",
    featured: false,
  },
]

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`glass-card glow-border group relative rounded-xl transition-all duration-700 ${
        project.featured ? "md:col-span-2" : ""
      } ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-start justify-between">
          <div
            className="rounded-lg p-2.5"
            style={{ backgroundColor: `${project.color}15` }}
          >
            <project.icon className="h-6 w-6" style={{ color: project.color }} />
          </div>
          {project.featured && (
            <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              Featured
            </span>
          )}
        </div>

        <h3 className="mb-1 text-xl font-bold text-foreground">{project.title}</h3>
        <p className="mb-4 font-mono text-xs text-muted-foreground">
          {project.subtitle}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
        >
          {isExpanded ? "Hide" : "Show"} details
          <ChevronRight
            size={14}
            className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
          />
        </button>

        {isExpanded && (
          <ul className="mb-5 space-y-2 animate-slide-up">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm text-muted-foreground"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: project.color }}
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}08, transparent 40%)`,
        }}
      />
    </div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, 0.05)

  return (
    <section id="projects" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-sm text-primary">03 / Projects</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            What I&apos;ve built.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From multi-agent AI platforms to real-time dashboards, each project
            represents a deep dive into solving complex engineering challenges.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

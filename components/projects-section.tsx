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
    title: "Multi-Agent Orchestration Platform",
    subtitle: "~15,000 Lines of Code | 14 Autonomous Agents",
    description:
      "Production-ready platform using LangGraph, LangChain, and FastAPI. Features agents with real autonomy — accept, refuse, question, retry, and delegate decisions with a LangGraph state-machine supervisor and intelligent LLM-based routing with rule-based fallback.",
    features: [
      "14 specialized AI agents with autonomous decision-making",
      "LangGraph state-machine supervisor with intelligent routing",
      "Multi-provider LLM abstraction (Ollama, OpenAI, Anthropic, Gemini)",
      "Persistent agent memory with confidence scoring and decay",
      "Conflict resolution via weighted voting and consensus",
    ],
    tags: ["LangGraph", "LangChain", "FastAPI", "Python", "Multi-Agent"],
    color: "hsl(175, 70%, 50%)",
    featured: true,
  },
  {
    icon: Database,
    title: "RAG Pipeline System",
    subtitle: "Semantic Search & Document Intelligence",
    description:
      "Full retrieval-augmented generation pipeline with document chunking, Ollama embedding generation, vector storage, and semantic search — enabling agents to ground responses in uploaded documents with configurable top-K retrieval.",
    features: [
      "Multi-format support: CSV, PDF, JSON, Markdown",
      "Ollama embedding generation and vector storage",
      "Configurable top-K semantic retrieval",
      "Document chunking with intelligent splitting",
    ],
    tags: ["RAG", "Embeddings", "Vector Search", "Ollama"],
    color: "hsl(200, 60%, 50%)",
    featured: false,
  },
  {
    icon: Monitor,
    title: "Real-Time Agent Dashboard",
    subtitle: "Next.js 16 / React 19 Frontend",
    description:
      "Full-featured frontend with real-time WebSocket streaming, chat history management, file upload for RAG, and agent status visualization using Zustand state management and Recharts.",
    features: [
      "Real-time WebSocket streaming for agent communication",
      "Chat history management and file upload for RAG",
      "Agent status visualization with Recharts",
      "Zustand state management for complex UI state",
    ],
    tags: ["Next.js", "React", "WebSocket", "Zustand", "Recharts"],
    color: "hsl(175, 70%, 50%)",
    featured: false,
  },
  {
    icon: Workflow,
    title: "CI/CD & Test Automation",
    subtitle: "200+ E2E Tests | 80%+ Coverage",
    description:
      "Comprehensive test automation framework using Selenium and Playwright across Chrome, Firefox, and Safari. Integrated into GitLab CI/CD with parallel execution, reducing QA cycle time from 3 days to under 4 hours.",
    features: [
      "200+ E2E test cases across 3 browsers",
      "Percy visual regression testing for 25+ critical flows",
      "Parallel CI/CD execution reducing QA from 3 days to 4 hours",
      "90%+ regression detection pre-production",
    ],
    tags: ["Selenium", "Playwright", "GitLab CI/CD", "Percy", "Jenkins"],
    color: "hsl(200, 60%, 50%)",
    featured: false,
  },
  {
    icon: Layers,
    title: "JupyterLab Extensions",
    subtitle: "Open-Source | 90%+ Adoption",
    description:
      "Custom JupyterLab extensions built with TypeScript and React, reducing repetitive data analysis tasks by ~35% for 15+ data scientists. Published as open-source with community code reviews.",
    features: [
      "TypeScript + React custom extensions",
      "35% reduction in repetitive tasks",
      "Trained 20+ team members with 90%+ adoption",
      "Open-source published with community contributions",
    ],
    tags: ["TypeScript", "React", "JupyterLab", "Open Source"],
    color: "hsl(175, 70%, 50%)",
    featured: false,
  },
  {
    icon: Shield,
    title: "AI-Powered Dev Workflows",
    subtitle: "Claude Code Integration | MCP Servers",
    description:
      "AI-powered development workflows using Claude Code, orchestrating specialized agents for code review, security analysis, and automated testing with custom MCP servers, hooks, and prompt engineering strategies.",
    features: [
      "Claude Code orchestration for code review",
      "Security analysis agents with automated testing",
      "Custom MCP servers and hooks integration",
      "Prompt engineering strategies in CI/CD lifecycle",
    ],
    tags: ["Claude API", "MCP", "Prompt Engineering", "Security"],
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

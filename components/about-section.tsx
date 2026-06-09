"use client"

import { useRef } from "react"
import { Brain, Server, Code2, TestTubes } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const highlights = [
  {
    icon: Brain,
    title: "LLM Agents & Tooling",
    description:
      "Built Rovanaut, a notebook-native LLM assistant — a LangChain/LangGraph tool-calling agent with human-in-the-loop approval and a full Model Context Protocol client.",
  },
  {
    icon: Server,
    title: "Retrieval & Safety",
    description:
      "OpenAI vector-store file search, cross-session memory, and an AST-based safety gate that blocks unsafe imports and calls in model-generated code.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Python/FastAPI/Tornado backends and React/TypeScript frontends — custom JupyterLab extensions, a React Flow pipeline editor, and real-time WebSocket streaming.",
  },
  {
    icon: TestTubes,
    title: "Testing & Security",
    description:
      "Real-fixture test suites and CI/CD, plus security hardening — HMAC-authenticated boundaries, SSRF/CSRF defense, and per-tenant isolation.",
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-sm text-primary">01 / About</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Building intelligent systems
            <br />
            <span className="text-muted-foreground">that solve real problems.</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Senior Software Engineer with 4+ years at Technosec.io, building a
            JupyterLab-based analytics platform and notebook-native LLM tooling.
            Open-source contributor to JupyterLab and the Jupyter-AI ecosystem.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`glass-card glow-border rounded-xl p-6 transition-all duration-700 hover:border-primary/30 md:p-8 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

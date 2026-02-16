"use client"

import { useRef } from "react"
import { Brain, Server, Code2, TestTubes } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const highlights = [
  {
    icon: Brain,
    title: "AI & Multi-Agent Systems",
    description:
      "Architected a 15K LoC multi-agent orchestration platform with 14 autonomous agents, LangGraph state machines, and intelligent LLM routing.",
  },
  {
    icon: Server,
    title: "RAG & Infrastructure",
    description:
      "Built full RAG pipelines with document chunking, embedding generation, vector storage, and semantic search across multiple file formats.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Next.js, React, FastAPI, and TypeScript expertise. Real-time WebSocket streaming, Zustand state management, and clean architecture.",
  },
  {
    icon: TestTubes,
    title: "Testing & DevOps",
    description:
      "Comprehensive test automation with 80%+ coverage. CI/CD pipelines reducing deployment from hours to under 20 minutes.",
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
            Software Engineer with 4+ years at Technosec.io, specializing in AI
            infrastructure, multi-agent orchestration, and production-grade
            systems. Open-source contributor to the JupyterLab ecosystem.
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

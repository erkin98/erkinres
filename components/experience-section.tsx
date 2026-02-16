"use client"

import { useRef } from "react"
import { Briefcase, ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const experiences = [
  {
    period: "2021 - Present",
    role: "Software Engineer",
    company: "Technosec.io",
    highlights: [
      "Architected multi-agent orchestration platform (~15,000 LoC) with 14 specialized AI agents using LangGraph, LangChain, and FastAPI",
      "Built full RAG pipeline with document chunking, Ollama embeddings, vector storage, and semantic search",
      "Implemented multi-provider LLM abstraction supporting Ollama, OpenAI, Anthropic Claude, and Google Gemini",
      "Developed persistent agent memory system with SQLite-backed pattern learning and confidence scoring",
      "Built conflict resolution system for multi-agent collaboration using weighted voting and consensus thresholds",
      "Created Next.js 16 / React 19 frontend with real-time WebSocket streaming and agent status visualization",
      "Built comprehensive test automation framework — 200+ E2E test cases, increasing coverage from ~40% to 80%+",
      "Implemented CI/CD pipelines reducing deployment time from hours to under 20 minutes",
      "Built custom JupyterLab extensions with TypeScript and React, reducing repetitive tasks by ~35% for 15+ data scientists",
    ],
    tags: [
      "LangGraph",
      "FastAPI",
      "Next.js",
      "React",
      "Python",
      "TypeScript",
      "Docker",
      "RAG",
      "Multi-Agent",
    ],
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <section id="experience" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-sm text-primary">02 / Experience</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Where I&apos;ve been
            <br />
            <span className="text-muted-foreground">building things.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`glass-card glow-border rounded-xl p-6 transition-all duration-700 md:p-8 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-lg bg-primary/10 p-2.5">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="flex items-center gap-1.5 text-primary">
                      {exp.company}
                      <ExternalLink size={14} />
                    </p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <ul className="mb-6 space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

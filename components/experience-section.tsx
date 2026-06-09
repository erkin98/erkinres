"use client"

import { useRef } from "react"
import { Briefcase, ExternalLink } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const experiences = [
  {
    period: "2021 - Present",
    role: "Senior Software Engineer",
    company: "Technosec.io",
    highlights: [
      "Founded the platform's JupyterLab frontend extension — custom file browser, a dozen-component React/TypeScript design system, and the core plugin entry point (dominant author)",
      "Built Rovanaut, a notebook-native LLM assistant — LangChain/LangGraph tool-calling agent, human-in-the-loop approval with resumable persisted interrupts, a full Model Context Protocol client, OpenAI vector-store file search, and AST-based code safety",
      "Architected a cross-origin notebook ↔ analytics integration across 3 hosting modes, secured by an HMAC-SHA256 authenticated RPC bridge",
      "Built a custom React Flow pipeline-graph editor and led an AG Grid major-version migration (v27 → v35)",
      "Hardened filesystem, persistence, and lifecycle layers against path-traversal, SSRF, and environment-variable injection; enforced per-tenant session isolation",
      "Rebuilt the test suite on real fixtures (~1,000 tests) and decomposed a large coordinator class with zero behavior change",
      "Merged contributions to JupyterLab core (shipped in 4.2.0) and the Jupyter-AI agent stack",
    ],
    tags: [
      "LangGraph",
      "MCP",
      "FastAPI",
      "Tornado",
      "React",
      "TypeScript",
      "JupyterLab",
      "Python",
      "Security",
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

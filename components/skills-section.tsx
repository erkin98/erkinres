"use client"

import { useRef } from "react"
import {
  Brain,
  Code2,
  TestTubes,
  Container,
  Workflow,
  MessageSquareCode,
  Database,
  Globe,
  Cpu,
  Layers,
  GitBranch,
  Shield,
  Zap,
  Search,
  Bot,
  Network,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const skillDomains = [
  {
    title: "AI & LLM Orchestration",
    icon: Brain,
    accent: "hsl(175, 70%, 50%)",
    context:
      "Architected a 14-agent platform with autonomous decision-making, conflict resolution, and persistent memory.",
    skills: [
      { name: "LangGraph", icon: Workflow, tag: "Core" },
      { name: "LangChain", icon: Network, tag: "Core" },
      { name: "Multi-Agent Systems", icon: Bot, tag: "Core" },
      { name: "RAG Pipelines", icon: Search, tag: "Core" },
      { name: "Prompt Engineering", icon: MessageSquareCode, tag: "Advanced" },
      { name: "Claude API", icon: Cpu, tag: "Provider" },
      { name: "OpenAI API", icon: Cpu, tag: "Provider" },
      { name: "Ollama", icon: Cpu, tag: "Provider" },
      { name: "Embeddings & Vectors", icon: Database, tag: "Data" },
      { name: "MCP Protocol", icon: Layers, tag: "Advanced" },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: Code2,
    accent: "hsl(200, 60%, 50%)",
    context:
      "Full-stack development with Python and TypeScript, building real-time dashboards and FastAPI backends.",
    skills: [
      { name: "Python", icon: Code2, tag: "Primary" },
      { name: "TypeScript", icon: Code2, tag: "Primary" },
      { name: "React", icon: Globe, tag: "Frontend" },
      { name: "Next.js", icon: Globe, tag: "Frontend" },
      { name: "FastAPI", icon: Zap, tag: "Backend" },
      { name: "Pydantic", icon: Shield, tag: "Backend" },
      { name: "JupyterLab", icon: Layers, tag: "Tooling" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: TestTubes,
    accent: "hsl(160, 50%, 45%)",
    context:
      "Built 200+ E2E tests with 80%+ coverage, reducing QA cycles from 3 days to under 4 hours.",
    skills: [
      { name: "Selenium", icon: Globe, tag: "E2E" },
      { name: "Playwright", icon: Globe, tag: "E2E" },
      { name: "pytest", icon: TestTubes, tag: "Unit" },
      { name: "Vitest", icon: TestTubes, tag: "Unit" },
      { name: "Visual Regression", icon: Layers, tag: "QA" },
      { name: "E2E Automation", icon: Workflow, tag: "QA" },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: Container,
    accent: "hsl(200, 60%, 50%)",
    context:
      "CI/CD pipelines reducing deployment from hours to minutes, with parallel execution and Docker containerization.",
    skills: [
      { name: "CI/CD Pipelines", icon: GitBranch, tag: "Core" },
      { name: "Jenkins", icon: Workflow, tag: "CI" },
      { name: "GitLab CI/CD", icon: GitBranch, tag: "CI" },
      { name: "Docker", icon: Container, tag: "Infra" },
      { name: "RESTful APIs", icon: Globe, tag: "API" },
      { name: "WebSocket", icon: Zap, tag: "API" },
    ],
  },
]

const milestones = [
  {
    year: "2021",
    event: "Joined Technosec.io as Software Engineer",
    detail: "Started building production web apps and test infrastructure.",
  },
  {
    year: "2022",
    event: "Scaled test automation to 200+ E2E tests",
    detail: "Achieved 80%+ coverage across Chrome, Firefox, and Safari.",
  },
  {
    year: "2023",
    event: "JupyterLab extensions adopted by 90%+ team",
    detail:
      "Open-source React/TypeScript plugins reducing repetitive tasks by 35%.",
  },
  {
    year: "2024",
    event: "Architected multi-agent AI platform",
    detail: "14 autonomous agents, 15K LoC, LangGraph state machines.",
  },
  {
    year: "2025",
    event: "AI-powered dev workflows with Claude & MCP",
    detail:
      "Integrating AI into CI/CD lifecycle with custom MCP servers and hooks.",
  },
]

function SkillBadge({
  name,
  icon: Icon,
  tag,
  accent,
  delay,
  animate,
}: {
  name: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  tag: string
  accent: string
  delay: number
  animate: boolean
}) {
  return (
    <div
      className={`group flex items-center gap-2.5 rounded-lg border border-border/50 bg-secondary/30 px-3 py-2 transition-all duration-500 hover:border-border ${
        animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div style={{ color: accent }}>
        <Icon size={14} className="shrink-0 transition-colors duration-300" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span
        className="ml-auto shrink-0 rounded px-1.5 py-0.5 font-mono text-[10px] leading-none"
        style={{
          backgroundColor: `${accent}15`,
          color: accent,
        }}
      >
        {tag}
      </span>
    </div>
  )
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, 0.05)
  const isTimelineInView = useInView(timelineRef, 0.05)

  return (
    <section id="skills" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          className={`mb-16 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-sm text-primary">04 / Skills</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Technical expertise.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From low-level infrastructure to high-level AI orchestration, a
            comprehensive toolkit honed through real-world production systems.
          </p>
        </div>

        {/* Skill Domain Cards */}
        <div className="mb-24 grid gap-6 md:grid-cols-2">
          {skillDomains.map((domain, catIndex) => (
            <div
              key={domain.title}
              className={`glass-card glow-border rounded-xl p-6 transition-all duration-700 hover:border-border md:p-8 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="rounded-lg p-2.5"
                  style={{ backgroundColor: `${domain.accent}15` }}
                >
                  <domain.icon
                    className="h-5 w-5"
                    style={{ color: domain.accent }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {domain.title}
                  </h3>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {domain.context}
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {domain.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    tag={skill.tag}
                    accent={domain.accent}
                    delay={catIndex * 150 + skillIndex * 40}
                    animate={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div ref={timelineRef}>
          <div
            className={`mb-12 transition-all duration-700 ${
              isTimelineInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
              Learning journey
            </h3>
            <p className="text-base text-muted-foreground">
              Key milestones in my growth as an engineer.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 transition-all duration-700 md:gap-0 ${
                      isTimelineInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Dot */}
                    <div className="relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-primary bg-background md:absolute md:left-1/2 md:-translate-x-1/2" />

                    {/* Content */}
                    <div
                      className={`flex-1 md:w-[calc(50%-2rem)] ${
                        isLeft
                          ? "md:ml-0 md:mr-auto md:pr-12 md:text-right"
                          : "md:ml-auto md:mr-0 md:pl-12"
                      }`}
                    >
                      <span className="mb-1 inline-block font-mono text-xs text-primary">
                        {milestone.year}
                      </span>
                      <h4 className="mb-1 text-base font-semibold text-foreground">
                        {milestone.event}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {milestone.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

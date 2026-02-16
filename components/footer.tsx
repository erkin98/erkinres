"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <a
            href="#"
            className="font-mono text-sm font-bold tracking-wider text-primary"
          >
            {"<EQ />"}
          </a>
          <p className="mt-1 text-xs text-muted-foreground">
            Software Engineer & AI Architect
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/erkinqara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/erkinqarayev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:erkinqara@proton.me"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Built with Next.js, Three.js & React Three Fiber
        </p>
      </div>
    </footer>
  )
}

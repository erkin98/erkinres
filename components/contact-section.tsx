"use client";

import { useRef } from "react";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "erkinqara@proton.me",
    href: "mailto:erkinqara@proton.me",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/erkin98",
    href: "https://github.com/erkin98",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/garayev",
    href: "https://linkedin.com/in/garayev",
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="mb-3 font-mono text-sm text-primary">05 / Contact</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-5xl">
            Let&apos;s build something
            <br />
            <span className="glow-text text-primary">extraordinary.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m always interested in discussing new opportunities, AI
            architecture challenges, or innovative engineering problems.
          </p>
        </div>

        <div
          className={`grid gap-4 md:grid-cols-3 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="glass-card glow-border group flex flex-col items-center gap-3 rounded-xl p-6 transition-all duration-300 hover:border-primary/30"
            >
              <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                {link.label}
              </span>
              <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                {link.value}
                <ArrowUpRight size={12} />
              </span>
            </a>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a
            href="mailto:erkinqara@proton.me"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
          >
            <Send size={16} />
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
}

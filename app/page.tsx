"use client"

import { useState, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { SceneErrorBoundary } from "@/components/scene-error-boundary"

const Scene3D = dynamic(() => import("@/components/scene-3d"), {
  ssr: false,
})

export default function Page() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    if (docHeight > 0) {
      setScrollProgress(scrollTop / docHeight)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <>
      {mounted && (
        <SceneErrorBoundary>
          <Scene3D scrollProgress={scrollProgress} />
        </SceneErrorBoundary>
      )}
      <Navigation />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

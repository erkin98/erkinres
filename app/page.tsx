import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ChangelogSection from "@/components/changelog-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0c1016",
        backgroundImage:
          "linear-gradient(rgba(45,212,200,.045) 1px,transparent 1px)," +
          "linear-gradient(90deg,rgba(45,212,200,.045) 1px,transparent 1px)",
        backgroundSize: "36px 36px",
        color: "#dce6f0",
        fontFamily: "var(--font-sans)",
      }}
    >
      <Navigation />
      <main id="main">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ChangelogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

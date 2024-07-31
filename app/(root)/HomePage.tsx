import AboutSection from "@/components/main-view/AboutSection"
import HeroSection from "@/components/main-view/HeroSection"
import Container from "@/components/shared/Container"

export default function Home() {
  return (
    <div className="bg-main-100">
      <Container>
        <HeroSection />
        <AboutSection />
        <AboutSection />
        <AboutSection />
        <AboutSection />
      </Container>
    </div>
  )
}

import TheAbout from "@/components/main-view/AboutSection"
import TheGallery from "@/components/main-view/GallerySection"
import TheHero from "@/components/main-view/HeroSection"
import ThePreface from "@/components/main-view/PrefaceSection"
import Container from "@/components/shared/Container"

export default function Home() {
  return (
    <Container className={"text-serif bg-main-100"}>
      <TheHero />
      <TheAbout />
      <ThePreface />
      <TheGallery />
    </Container>
  )
}

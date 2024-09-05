import TheAbout from "@/components/main-view/AboutSection"
import TheClosing from "@/components/main-view/ClosingSection"
import TheFooter from "@/components/main-view/Footer"
import TheGallery from "@/components/main-view/GallerySection"
import TheGift from "@/components/main-view/GiftSection"
import TheHero from "@/components/main-view/HeroSection"
import TheMessage from "@/components/main-view/MessageSection"
import ThePreface from "@/components/main-view/PrefaceSection"
import TheProfile from "@/components/main-view/ProfileSection"
import TheStory from "@/components/main-view/StorySection"
import TheTime from "@/components/main-view/TimeSection"
import Container from "@/components/shared/Container"

export default function Home() {
  return (
    <Container className={"text-serif bg-main-100"}>
      <TheHero />
      <TheAbout />
      <ThePreface />
      <TheGallery />
      <TheProfile />
      <TheTime />
      <TheStory />
      <TheGift />
      <TheMessage />
      <TheClosing />
      <TheFooter />
    </Container>
  )
}

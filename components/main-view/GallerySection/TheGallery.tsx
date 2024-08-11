"use client"

import { IImage } from "@/types"
import Carousel from "./Carousel"

const images: IImage[] = [
  { url: "/images/photo-1.jpg", alt: "photo-1" },
  { url: "/images/photo-2.jpg", alt: "photo-2" },
  { url: "/images/photo-3.webp", alt: "photo-3" },
  { url: "/images/photo-4.webp", alt: "photo-4" },
  { url: "/images/photo-5.webp", alt: "photo-5" },
  { url: "/images/photo-6.jpg", alt: "photo-6" },
]

const TheGallery = () => {
  return (
    <section className="pb-6">
      <div className="mt-6 overflow-hidden py-20 lg:mt-64">
        <h1 className="mb-2 text-center font-wellfare text-6xl lg:mb-5 lg:text-9xl">
          Our Gallery
        </h1>
        <Carousel images={images} />
      </div>
    </section>
  )
}
export default TheGallery

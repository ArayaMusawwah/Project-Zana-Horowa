import { cn } from "@/lib/utils"
import { IImage } from "@/types"
import { useMediaQuery } from "@react-hook/media-query"
import Image from "next/image"
import { ReactMarques } from "react-marques"

const Carousel = ({ images }: { images: IImage[] }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  /*
   * TODO: Change carousel animation as what desired animation should be.
   */
  return (
    <ReactMarques
      fade={false}
      pauseOnHover={true}
      className="!gap-[0rem]"
      innerClassName="!gap-[0rem] "
    >
      {images.map(({ url, alt, className }) => (
        <Image
          key={url}
          src={url}
          alt={alt}
          width={isMobile ? 200 : 300}
          height={isMobile ? 200 : 300}
          className={cn("object-cover", isMobile && "max-h-[300px]", className)}
        />
      ))}
    </ReactMarques>
  )
}

export default Carousel

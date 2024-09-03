import { DATA } from "@/data"
import Image from "next/image"

type Props = {
  image: string
  altImage: string
  name: string
  ortuName: string
  isSon?: boolean
}

const DetailMempelai = ({ image, altImage, name, ortuName, isSon }: Props) => {
  return (
    <div className="text-dark-text mx-auto flex flex-col items-center justify-center">
      <div className="flex w-fit justify-center overflow-hidden rounded-full">
        <Image
          src={image}
          alt={altImage}
          width={200}
          height={200}
          className="h-[200px] w-[200px] object-cover object-center"
        />
      </div>
      <div className="mt-4 text-center font-serif">
        <h3 className="text-center text-3xl capitalize italic">{name}</h3>
        <p>{isSon ? "Putra Dari" : "Putri Dari"}</p>
        <p>{ortuName}</p>
      </div>
    </div>
  )
}
export default DetailMempelai

import Image from "next/image"

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative">
      <h1 className="text-center font-wellfare text-6xl lg:text-8xl">
        {title}
      </h1>
      <Image
        src={"/images/title-headline.svg"}
        width={300}
        height={100}
        alt=""
        className="object-fit absolute -bottom-6 right-1/2 h-fit translate-x-1/2 fill-white"
      />
    </div>
  )
}
export default SectionHeader

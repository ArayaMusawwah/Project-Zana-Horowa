import Image from "next/image"

const HearthSign = () => {
  return (
    <div className="relative flex items-center justify-center">
      <h2 className="absolute left-0 z-10 font-greatVibes text-8xl font-bold text-sky-500">
        A
      </h2>
      <Image
        src={"/images/heart-brush.svg"}
        alt=""
        width={100}
        height={100}
        className="absolute mx-auto"
      />
      <h2 className="absolute right-0 z-10 font-greatVibes text-8xl font-bold text-pink-500">
        K
      </h2>
    </div>
  )
}
export default HearthSign

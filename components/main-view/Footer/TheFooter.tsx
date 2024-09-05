import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6"

const TheFooter = () => {
  return (
    <footer className="w-full bg-main-200 py-6 font-sans text-white">
      <div className="mx-auto grid w-full max-w-xs grid-cols-4">
        <div className="items-end justify-self-end">
          <Image src={"/images/logo.png"} alt="logo" width={35} height={35} />
        </div>
        <div className="col-span-2">
          <p className="text-center text-sm">By Araya Musawwah</p>
          <div className="mx-auto mt-4 flex justify-center gap-4">
            <Link href={"https://www.instagram.com/elite.iqbal"}>
              <FaInstagram />
            </Link>
            <Link href={"https://github.com/arayamusawwah"}>
              <FaGithub />
            </Link>
            <Link href={"https://wa.me/6289679063278"}>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default TheFooter

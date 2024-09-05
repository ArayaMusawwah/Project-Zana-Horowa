import Image from "next/image"
import { FaRegClipboard } from "react-icons/fa6"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useToast } from "@/hooks/use-toast"
const VirtualGift = ({
  logo,
  norek,
  atasNama,
}: {
  logo: string
  norek: string
  atasNama: string
}) => {
  const { toast } = useToast()

  return (
    <div className="flex flex-col justify-center px-4">
      <div>
        <Image
          src={logo}
          alt={logo as string}
          width={200}
          height={100}
          className="mx-auto"
        />
      </div>
      <div className="mt-4 text-center font-sans text-dark-text lg:text-lg">
        <p>No. Rekening: {norek}</p>
        <p>a/n: {atasNama}</p>
      </div>
      <CopyToClipboard
        text={norek}
        onCopy={() => toast({ description: "Berhasil disalin!" })}
      >
        <button
          className="mt-2 flex items-center justify-center gap-2 rounded-md bg-main-120 px-4 py-2 font-sans"
          type="button"
        >
          Salin Norek <FaRegClipboard className="inline" />
        </button>
      </CopyToClipboard>
    </div>
  )
}
export default VirtualGift

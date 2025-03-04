"use client"

import SectionHeader from "@/components/shared/SectionHeader"
import VirtualGift from "./VirtualGift"
import { DATA } from "@/data"
import { FaGift } from "react-icons/fa6"
import CopyToClipboard from "react-copy-to-clipboard"
import { useToast } from "@/hooks/use-toast"

/*
 * TODO: toast
 */

const TheGift = () => {
  const { toast } = useToast()

  return (
    <section>
      <div className="mt-6 px-[7%] py-20 lg:mt-48">
        <SectionHeader title="Hadiah" />

        <div className="mt-20 grid max-lg:grid-rows-3 lg:grid-cols-3">
          <VirtualGift
            logo={DATA.kado.rekening[0].gambar}
            atasNama={DATA.kado.rekening[0].atasNama}
            norek={DATA.kado.rekening[0].nomor}
          />

          <div className="flex flex-col items-center px-4 text-center font-sans text-dark-text lg:text-lg">
            <CopyToClipboard
              text={DATA.kado.alamat}
              onCopy={() => toast({ description: "Berhasil disalin!" })}
            >
              <button>
                <FaGift className="text-8xl text-main-120" />
              </button>
            </CopyToClipboard>
            <p className="font-thorsa font-semibold capitalize text-main-120">
              kirim kado
            </p>
            <p className="mt-2">
              {DATA.kado.penerima} - {DATA.kado.nomer}
            </p>
            <p>{DATA.kado.alamat}</p>
          </div>

          <VirtualGift
            logo={DATA.kado.rekening[1].gambar}
            atasNama={DATA.kado.rekening[1].atasNama}
            norek={DATA.kado.rekening[1].nomor}
          />
        </div>
      </div>
    </section>
  )
}
export default TheGift

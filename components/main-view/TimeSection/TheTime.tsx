import WavesTop from "@/components/shared/WavesTop"
import TimeSection from "./Time"
import { DATA } from "@/data"
import { formatDate } from "@/lib/utils"
import SectionHeader from "@/components/shared/SectionHeader"

const TheTime = () => {
  const akadTime = formatDate(DATA.akad.tanggal)
  const resepsiTime = formatDate(DATA.resepsi.tanggal)

  return (
    <section className="relative mt-10 overflow-hidden pb-56">
      <WavesTop />
      <SectionHeader title="Detail Acara" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <TimeSection
          title={"Akad Nikah"}
          date={akadTime.tanggal}
          day={akadTime.hari}
          monthYear={`${akadTime.bulan} ${akadTime.tahun}`}
          time={DATA.akad.waktu}
          urlMap={DATA.akad.maps}
          location={DATA.akad.alamat}
          isEnd
        />
        <TimeSection
          title={"Resepsi"}
          date={resepsiTime.tanggal}
          day={resepsiTime.hari}
          monthYear={`${resepsiTime.bulan} ${resepsiTime.tahun}`}
          time={DATA.resepsi.waktu}
          urlMap={DATA.resepsi.maps}
          location={DATA.resepsi.alamat}
        />
      </div>
    </section>
  )
}
export default TheTime

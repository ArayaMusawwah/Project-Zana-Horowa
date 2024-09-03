import SectionHeader from "@/components/shared/SectionHeader"
import TimeSection from "./Time"
import { DATA } from "@/data"
import { formatDate } from "@/lib/utils"

const TheTime = () => {
  const akadTime = formatDate(DATA.akad.tanggal)
  const resepsiTime = formatDate(DATA.resepsi.tanggal)

  return (
    <section className="mx-auto mt-10 max-w-7xl overflow-hidden pb-10">
      <SectionHeader title="Detail Acara" />
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
    </section>
  )
}
export default TheTime

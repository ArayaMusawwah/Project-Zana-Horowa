import HearthSign from "./HearthSign"
import DetailMempelai from "./DetailMempelai"
import { DATA } from "@/data"

const MempelaiProfile = () => {
  return (
    <div className="mx-auto mt-10 grid items-center justify-center rounded-2xl bg-[#FFC6C6] px-20 py-20 max-lg:grid-rows-3 lg:max-w-6xl lg:grid-cols-3 lg:gap-6 lg:py-10">
      <DetailMempelai
        image={"/images/pria.jpeg"}
        altImage={"mempelai_laki-laki"}
        name={DATA.mempelai.laki.nama}
        ortuName={DATA.mempelai.laki.ortu}
        isSon
      />
      <HearthSign />
      <DetailMempelai
        image={"/images/perempuan.jpg"}
        altImage={"mempelai_perempuan"}
        name={DATA.mempelai.perempuan.nama}
        ortuName={DATA.mempelai.perempuan.ortu}
      />
    </div>
  )
}
export default MempelaiProfile

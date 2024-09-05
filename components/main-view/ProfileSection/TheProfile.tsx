import MempelaiProfile from "./MempelaiProfile"
import SectionHeader from "@/components/shared/SectionHeader"

const ProfileSection = () => {
  return (
    <section className="overflow-hidden pb-10">
      <div>
        <SectionHeader title="Kami Mempelai" />
      </div>
      <MempelaiProfile />
    </section>
  )
}
export default ProfileSection

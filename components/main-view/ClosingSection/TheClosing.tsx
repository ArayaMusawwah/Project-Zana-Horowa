import { DATA } from "@/data"

const TheClosing = () => {
  return (
    <section className="pb-32 pt-20">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="font-serif text-2xl">Thank You</p>
        <p className="font-greatVibes text-7xl">
          {DATA.mempelai.keduaMempelai}
        </p>
      </div>
    </section>
  )
}
export default TheClosing

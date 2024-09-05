import WavesBottom from "../../shared/WavesBottom"
import Stories from "./Stories"

const TheStory = () => {
  return (
    <section className="relative bg-main-110">
      <div className="p-4 lg:p-20">
        <div className="bg-main-50 text-dark-text rounded-xl p-10">
          <h1 className="text-center text-3xl italic lg:text-5xl">
            Short Story{" "}
            <span className="font-greatVibes not-italic">Of Us</span>
          </h1>

          <Stories />
        </div>
      </div>
      <WavesBottom />
    </section>
  )
}
export default TheStory

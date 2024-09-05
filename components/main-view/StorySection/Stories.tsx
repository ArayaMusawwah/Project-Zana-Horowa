"use client"

import { DATA, IShortStory } from "@/data"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@react-hook/media-query"

const Stories = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return Object.keys(DATA.shortStory).map((year: string, i: number) => (
    <div
      key={i}
      className={cn(
        "mt-10",
        isMobile ? "text-center" : i % 2 === 0 ? "text-left" : "text-right",
      )}
    >
      <h2 className="font-edu text-xl font-semibold">
        {(DATA.shortStory as { [key: string]: IShortStory })[year].tahun}
      </h2>
      <p className="font-sans">
        {(DATA.shortStory as { [key: string]: IShortStory })[year].story}
      </p>
    </div>
  ))
}
export default Stories

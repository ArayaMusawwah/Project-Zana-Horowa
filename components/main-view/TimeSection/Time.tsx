import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface Props {
  title: string
  day: string
  date: number
  monthYear: string
  time: string
  location: string
  urlMap: string
  isEnd?: boolean
}

const Time = ({
  isEnd,
  title,
  day,
  date,
  monthYear,
  time,
  location,
  urlMap,
}: Props) => {
  return (
    <div
      className={cn(
        "w-fit px-[7%] pt-10 font-thorsa",
        isEnd && "ms-auto text-right",
      )}
    >
      <h2 className={cn("text-4xl italic")}>{title}</h2>
      <Separator className={cn("h-[2px] max-w-xl bg-stone-600")} />
      <div className={cn("text-dark-text mt-10 text-lg")}>
        <p className="text-4xl">{day}</p>
        <p className="mx-4 my-2 text-5xl font-semibold">{date}</p>
        <p>{monthYear}</p>
        <p>{time}</p>
        <p>{location}</p>
      </div>
      <button className="bg-dark-text mt-4 rounded-md px-4 py-2">
        <a href={urlMap}>Maps</a>
      </button>
    </div>
  )
}
export default Time

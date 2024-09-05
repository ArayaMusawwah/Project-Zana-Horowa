import { Separator } from "@/components/ui/separator"
import { IMessage } from "@/lib/database/models/message.model"
import { FaRegClock } from "react-icons/fa6"
import moment from "moment"

const Messages = ({ messages }: { messages: IMessage[] }) => {
  return (
    <div className="max-h-[400px] w-full overflow-hidden rounded-lg border border-main-120 bg-main-50/50 p-4">
      <h1 className="text-center font-serif text-xl font-semibold italic lg:text-2xl">
        Messages From Friends
      </h1>
      <p className="my-2 text-right font-light">Total: 100</p>
      <Separator className="mx-auto h-px rounded-md bg-main-120/80 shadow-sm shadow-main-120" />

      <div className="max-h-[75%] space-y-2 overflow-y-auto py-2">
        {!messages.length ? (
          <p className="text-center italic">No messages yet.</p>
        ) : (
          messages?.map((message) => (
            <div
              className="rounded-lg bg-gradient-to-br from-slate-200 to-slate-100 px-4 py-2 font-sans text-dark-text"
              key={message._id}
            >
              <p className="font-semibold">{message.name}</p>
              <p>{message.message}</p>
              <p className="text-right text-xs font-light">
                <FaRegClock className="mx-1 inline text-xs" />
                {moment(message.date).fromNow()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
export default Messages

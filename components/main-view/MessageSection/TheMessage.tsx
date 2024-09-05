"use client"

import FormMessage from "./FormMessage"
import Messages from "./Messages"
import { fetcher } from "@/lib/utils"
import useSWR from "swr"
import { IMessage } from "@/lib/database/models/message.model"

const TheMessage = () => {
  const { data } = useSWR("/api/messages", fetcher)

  return (
    <section className="max-h-[70vh] min-h-[70vh] bg-main-100 bg-[url('/images/wedding.jpg')] bg-cover bg-center px-[7%] py-20">
      <div className="grid grid-cols-2 gap-4 overflow-hidden">
        <FormMessage messages={(data?.messages as IMessage[]) ?? []} />
        <Messages messages={(data?.messages as IMessage[]) ?? []} />
      </div>
    </section>
  )
}
export default TheMessage

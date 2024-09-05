import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { IMessage } from "@/lib/database/models/message.model"
import { handleError } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { mutate } from "swr"
import axios from "axios"

const FormMessage = ({ messages }: { messages: IMessage[] }) => {
  const receiver = useSearchParams().get("to")
  const [name, setName] = useState(receiver ?? "")
  const [message, setMessage] = useState("")
  const [kehadiran, setKehadiran] = useState<"hadir" | "tidak_hadir">()
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const newMessage = {
    name,
    message,
    kehadiran,
  }

  const rsvpFormData = new URLSearchParams()
  rsvpFormData.append("nama", name)
  rsvpFormData.append("kehadiran", kehadiran!)

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    const updatedMessages = [newMessage, ...messages]

    mutate("/api/messages", updatedMessages, false)
    setIsLoading(true)

    try {
      await axios.post("/api/messages/create", newMessage).then(() =>
        toast({
          title: "Terima kasih",
          description: "Pesan anda berhasil terkirim",
          duration: 3000,
        }),
      )
      await axios.post(process.env.NEXT_PUBLIC_SHEET_URL!, rsvpFormData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
    } catch (error) {
      handleError(error as Error)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    } finally {
      mutate("/api/messages")
      setMessage("")
      setIsLoading(false)
    }
  }

  return (
    <div className="max-[500px] flex h-full flex-col gap-8 rounded-lg border border-main-120 bg-main-50/50 p-4">
      <h1 className="text-center font-greatVibes text-xl lg:text-3xl">
        Write Us Some Wholesome Message
      </h1>
      <form className="flex flex-col gap-4 font-sans" onSubmit={handleCreate}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg px-4 py-2 text-dark-text"
        />
        <Select
          onValueChange={(value: string) =>
            setKehadiran(value as "hadir" | "tidak_hadir")
          }
          required
        >
          <SelectTrigger className="bg-white px-4 font-sans text-dark-text">
            <SelectValue placeholder="Kehadiran" />
          </SelectTrigger>
          <SelectContent className="bg-white font-sans text-dark-text">
            <SelectItem value="hadir" className="hover:bg-main-100">
              Hadir
            </SelectItem>
            <SelectItem value="tidak_hadir" className="hover:bg-main-100">
              Tidak Hadir
            </SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className="resize-none rounded-lg px-4 py-2 text-dark-text"
        />
        <button
          className="rounded-lg bg-main-120 px-4 py-2 disabled:cursor-not-allowed disabled:bg-slate-400"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sedang Mengirim..." : "Kirim"}
        </button>
      </form>
    </div>
  )
}
export default FormMessage

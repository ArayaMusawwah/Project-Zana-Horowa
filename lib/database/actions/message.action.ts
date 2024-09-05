import { handleError } from "@/lib/utils"
import { connectToDatabase } from ".."
import Message, { IMessage } from "../models/message.model"

export const createMessage = async (body: IMessage) => {
  try {
    await connectToDatabase()
    const newMessage = await Message.create(body)

    return JSON.parse(JSON.stringify(newMessage))
  } catch (error) {
    handleError(error as Error)
  }
}

export const getMessages = async () => {
  try {
    await connectToDatabase()
    const messages = await Message.find({}).sort({ date: -1 })

    if (!messages) throw new Error("no messages found")
    return JSON.parse(JSON.stringify(messages))
  } catch (error) {
    handleError(error as Error)
  }
}

"use server"

import mongoose, { models, Schema } from "mongoose"

export interface IMessage {
  _id?: string
  name: string
  message: string
  date: Date
}

const messageSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
})

const Message = models.Message || mongoose.model("Message", messageSchema)

export default Message

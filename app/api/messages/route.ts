import { getMessages } from "@/lib/database/actions/message.action"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    const messages = await getMessages()
    return NextResponse.json({ messages }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { messages: "something went wrong: " + error },
      { status: 500 },
    )
  }
}

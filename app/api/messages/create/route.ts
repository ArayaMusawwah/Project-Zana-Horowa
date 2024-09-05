import { createMessage } from "@/lib/database/actions/message.action"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
  const body = await req.json()

  try {
    await createMessage(body)

    return NextResponse.json(
      {
        message: "message created successfully",
      },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: "something went wrong: " + error,
      },
      { status: 500 },
    )
  }
}

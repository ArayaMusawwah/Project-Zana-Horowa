import { updateInvitation, updateManyInvitation } from '@/lib/database/actions/invitation.action'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export const PATCH = async (req: Request) => {
  const { data } = await req.json()

  try {
    await updateInvitation(data._id, data)
    revalidatePath('/')
    return NextResponse.json({ message: 'Invitation updated successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}

export const PUT = async (req: Request) => {
  const { data } = await req.json()

  try {
    if (!data) throw new Error('Data not found')
    await updateManyInvitation(data)
    revalidatePath('/')
    return NextResponse.json({ message: 'Invitation updated successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: 'Server Errorr' + error }, { status: 500 })
  }
}

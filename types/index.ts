import { ClassValue } from "clsx"

export interface IImage {
  url: string
  alt: string
  className?: ClassValue
}

export interface IInvitation {
  _id?: string
  name: string
  url: string
  isCompleted: boolean
  date?: Date
}

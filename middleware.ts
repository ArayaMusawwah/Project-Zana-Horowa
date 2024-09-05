import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.url.includes('?key=354')) return NextResponse.next()
  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: '/buat-undangan/:path*'
}
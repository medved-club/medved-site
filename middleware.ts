import { NextRequest, NextResponse } from "next/server"
import { verifySessionToken } from "@/lib/admin-auth"

export const runtime = "nodejs"

const SESSION_COOKIE = "medved_admin"

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === "/admin/login" || pathname === "/api/admin/login") return NextResponse.next()

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    const token = req.cookies.get(SESSION_COOKIE)?.value
    const session = verifySessionToken(token)
    if (!session) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ error: "Не авторизовано" }, { status: 401 })
      }
      const loginUrl = new URL("/admin/login", req.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}

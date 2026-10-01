import { NextResponse } from "next/server"
import { verifyCredentials, createSessionToken } from "@/lib/admin-auth"

export async function POST(req: Request) {
  const { username, password } = await req.json()
  if (!username || !password) {
    return NextResponse.json({ error: "Введите логин и пароль" }, { status: 400 })
  }

  const user = await verifyCredentials(username, password)
  if (!user) {
    return NextResponse.json({ error: "Неверный логин или пароль" }, { status: 401 })
  }

  const token = createSessionToken(user.username)
  const res = NextResponse.json({ ok: true, name: user.name })
  res.cookies.set("medved_admin", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  })
  return res
}

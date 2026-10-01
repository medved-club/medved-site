import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifySessionToken, changePassword, SESSION_COOKIE } from "@/lib/admin-auth"

export async function POST(req: Request) {
  const cookieStore = await cookies()
  const session = verifySessionToken(cookieStore.get(SESSION_COOKIE)?.value)
  if (!session) {
    return NextResponse.json({ error: "Не авторизовано" }, { status: 401 })
  }

  const { oldPassword, newPassword } = await req.json()
  if (!oldPassword || !newPassword) {
    return NextResponse.json({ error: "Заполните оба поля" }, { status: 400 })
  }

  const result = await changePassword(session.username, oldPassword, newPassword)
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }
  return NextResponse.json({ ok: true })
}

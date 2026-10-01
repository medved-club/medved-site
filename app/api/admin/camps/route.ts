import { NextResponse } from "next/server"
import { getSiteContent, saveSiteContent } from "@/lib/site-content"

export async function GET() {
  const content = await getSiteContent()
  return NextResponse.json(content.camps)
}

export async function POST(req: Request) {
  const camps = await req.json()
  if (!Array.isArray(camps)) {
    return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 })
  }
  const content = await getSiteContent()
  content.camps = camps
  await saveSiteContent(content)
  return NextResponse.json({ ok: true })
}

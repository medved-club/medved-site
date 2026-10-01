import { NextResponse } from "next/server"
import { getSiteContent, saveSiteContent } from "@/lib/site-content"

export async function GET() {
  const content = await getSiteContent()
  return NextResponse.json(content.faq)
}

export async function POST(req: Request) {
  const faq = await req.json()
  if (!Array.isArray(faq)) {
    return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 })
  }
  const content = await getSiteContent()
  content.faq = faq
  await saveSiteContent(content)
  return NextResponse.json({ ok: true })
}

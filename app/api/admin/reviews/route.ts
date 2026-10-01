import { NextResponse } from "next/server"
import { getSiteContent, saveSiteContent } from "@/lib/site-content"

export async function GET() {
  const content = await getSiteContent()
  return NextResponse.json(content.reviews)
}

export async function POST(req: Request) {
  const reviews = await req.json()
  if (!Array.isArray(reviews)) {
    return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 })
  }
  const content = await getSiteContent()
  content.reviews = reviews
  await saveSiteContent(content)
  return NextResponse.json({ ok: true })
}

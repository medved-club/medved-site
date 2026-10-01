import { NextResponse } from "next/server"
import { getSiteContent, saveSiteContent } from "@/lib/site-content"

export async function GET() {
  const content = await getSiteContent()
  return NextResponse.json(content.infoBlocks)
}

export async function POST(req: Request) {
  const infoBlocks = await req.json()
  if (!Array.isArray(infoBlocks)) {
    return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 })
  }
  const content = await getSiteContent()
  content.infoBlocks = infoBlocks
  await saveSiteContent(content)
  return NextResponse.json({ ok: true })
}

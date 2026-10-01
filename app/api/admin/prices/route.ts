import { NextResponse } from "next/server"
import { getSiteContent, saveSiteContent } from "@/lib/site-content"

export async function GET() {
  const content = await getSiteContent()
  return NextResponse.json(content.trainingTypes)
}

export async function POST(req: Request) {
  const trainingTypes = await req.json()
  if (!Array.isArray(trainingTypes)) {
    return NextResponse.json({ error: "Неверный формат данных" }, { status: 400 })
  }
  const content = await getSiteContent()
  content.trainingTypes = trainingTypes
  await saveSiteContent(content)
  return NextResponse.json({ ok: true })
}

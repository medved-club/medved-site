import { NextResponse } from "next/server"

const METRIKA_TOKEN = process.env.METRIKA_TOKEN || ""
const COUNTER_ID = "109565621"

export async function GET() {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - 30)

  const fmt = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`

  const params = new URLSearchParams({
    ids: COUNTER_ID,
    metrics: "ym:s:visits",
    dimensions: "ym:s:searchPhrase",
    date1: fmt(start),
    date2: fmt(end),
    limit: "50",
    sort: "-ym:s:visits",
  })

  const res = await fetch(
    `https://api-metrika.yandex.net/stat/v1/data?${params}`,
    { headers: { Authorization: `OAuth ${METRIKA_TOKEN}` } }
  )
  const data = await res.json()

  if (data.errors) {
    return NextResponse.json({ error: data.errors }, { status: 500 })
  }

  const phrases = (data.data || []).map((row: any) => ({
    phrase: row?.dimensions?.[0]?.name || "(не определено)",
    visits: Math.round(row?.metrics?.[0] || 0),
  }))

  return NextResponse.json({ total: phrases.length, phrases })
}

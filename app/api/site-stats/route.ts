import { NextResponse } from "next/server"

const METRIKA_TOKEN = process.env.METRIKA_TOKEN || ""
const COUNTER_ID = "109565621"

function fmt(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${y}-${m}-${day}`
}

async function mReq(metrics: string, dimensions: string, date1: string, date2: string, filters = "", limit = "20") {
  const p = new URLSearchParams({ ids: COUNTER_ID, metrics, date1, date2, limit, sort: `-${metrics.split(",")[0]}` })
  if (dimensions) p.set("dimensions", dimensions)
  if (filters) p.set("filters", filters)
  const res = await fetch(`https://api-metrika.yandex.net/stat/v1/data?${p}`, {
    headers: { Authorization: `OAuth ${METRIKA_TOKEN}` },
  })
  return res.json()
}

export async function GET() {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - 30)
  const d1 = fmt(start)
  const d2 = fmt(end)

  const [totals, pages, sources, devices, timeData] = await Promise.all([
    mReq("ym:s:visits,ym:s:users,ym:s:pageviews,ym:s:bounceRate,ym:s:avgVisitDurationSeconds", "", d1, d2),
    mReq("ym:s:pageviews,ym:s:avgVisitDurationSeconds", "ym:s:startURL", d1, d2),
    mReq("ym:s:visits", "ym:s:trafficSource", d1, d2),
    mReq("ym:s:visits", "ym:s:deviceCategory", d1, d2),
    mReq("ym:s:avgVisitDurationSeconds,ym:s:visits", "ym:s:startURL", d1, d2, "", "50"),
  ])

  const t = totals.totals || []
  const dur = Math.round(t[4] || 0)

  const pagesOut = (pages.data || []).map((r: any) => {
    let url: string = r?.dimensions?.[0]?.name || "/"
    url = url.replace("https://medved-club.ru", "") || "/"
    const avgSec = Math.round(r?.metrics?.[1] || 0)
    return {
      url,
      pageviews: Math.round(r?.metrics?.[0] || 0),
      avgTime: `${Math.floor(avgSec / 60)}:${String(avgSec % 60).padStart(2, "0")}`,
    }
  })

  return NextResponse.json({
    period: `${d1} — ${d2}`,
    summary: {
      visits: Math.round(t[0] || 0),
      users: Math.round(t[1] || 0),
      pageviews: Math.round(t[2] || 0),
      bounceRate: Math.round(t[3] || 0),
      avgTime: `${Math.floor(dur / 60)}:${String(dur % 60).padStart(2, "0")}`,
    },
    pages: pagesOut,
    sources: (sources.data || []).map((r: any) => ({
      source: r?.dimensions?.[0]?.name || "?",
      visits: Math.round(r?.metrics?.[0] || 0),
    })),
    devices: (devices.data || []).map((r: any) => ({
      device: r?.dimensions?.[0]?.name || "?",
      visits: Math.round(r?.metrics?.[0] || 0),
    })),
  })
}

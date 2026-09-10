import { NextResponse } from "next/server"

const METRIKA_TOKEN = process.env.METRIKA_TOKEN || ""
const COUNTER_ID = "109565621"
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ""
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || "1031098727"
const CRON_SECRET = process.env.CRON_SECRET || ""

async function metrikaRequest(
  metrics: string,
  dimensions = "",
  date1: string,
  date2: string,
  filters = ""
) {
  const params = new URLSearchParams({
    ids: COUNTER_ID,
    metrics,
    date1,
    date2,
    limit: "10",
    sort: `-${metrics.split(",")[0]}`,
  })
  if (dimensions) params.set("dimensions", dimensions)
  if (filters) params.set("filters", filters)

  const res = await fetch(
    `https://api-metrika.yandex.net/stat/v1/data?${params}`,
    { headers: { Authorization: `OAuth ${METRIKA_TOKEN}` } }
  )
  return res.json()
}

async function sendTelegram(text: string) {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "HTML" }),
  })
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function dateStr(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function labelStr(d: Date) {
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization")
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const now = new Date()
  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  const weekAgo = new Date(now)
  weekAgo.setDate(weekAgo.getDate() - 7)

  const yDate = dateStr(yesterday)
  const wDate = dateStr(weekAgo)

  try {
    const [main, week, pages, sources, thanksViews] = await Promise.all([
      metrikaRequest(
        "ym:s:visits,ym:s:users,ym:s:pageviews,ym:s:bounceRate,ym:s:avgVisitDurationSeconds",
        "",
        yDate,
        yDate
      ),
      metrikaRequest("ym:s:visits,ym:s:users", "", wDate, yDate),
      metrikaRequest("ym:s:pageviews", "ym:s:startURL", yDate, yDate),
      metrikaRequest("ym:s:visits", "ym:s:trafficSource", yDate, yDate),
      metrikaRequest("ym:s:pageviews", "ym:s:startURL", yDate, yDate, "ym:s:startURL=@'thanks'"),
    ])

    const t = main.totals || []
    const visits = Math.round(t[0] || 0)

    if (visits === 0) {
      await sendTelegram(
        `⚠️ <b>medved-club.ru — АЛЕРТ</b>\n\nВчера (${labelStr(yesterday)}) зафиксировано <b>0 визитов</b>.\nПроверьте доступность сайта.`
      )
      return NextResponse.json({ ok: true, alert: true })
    }

    const users = Math.round(t[1] || 0)
    const pageviews = Math.round(t[2] || 0)
    const bounce = Math.round(t[3] || 0)
    const dur = Math.round(t[4] || 0)
    const durStr = `${Math.floor(dur / 60)}:${pad(dur % 60)}`

    const wt = week.totals || []
    const weekVisits = Math.round(wt[0] || 0)
    const weekUsers = Math.round(wt[1] || 0)

    let topPages = ""
    for (const row of (pages.data || []).slice(0, 5)) {
      let page: string = row?.dimensions?.[0]?.name || "/"
      page = page.replace("https://medved-club.ru", "") || "/"
      const pv = Math.round(row?.metrics?.[0] || 0)
      if (pv > 0) topPages += `  ${page} — ${pv}\n`
    }

    let srcLines = ""
    for (const row of (sources.data || []).slice(0, 4)) {
      const src = row?.dimensions?.[0]?.name || "?"
      const sv = Math.round(row?.metrics?.[0] || 0)
      srcLines += `  ${src} — ${sv}\n`
    }

    // Конверсии: заявки = визиты на /thanks
    let leads = 0
    for (const row of (thanksViews.data || [])) {
      leads += Math.round(row?.metrics?.[0] || 0)
    }

    let report =
      `📊 <b>medved-club.ru — ${labelStr(yesterday)}</b>\n\n` +
      `👥 Визиты: <b>${visits}</b>\n` +
      `🧑 Уникальные: <b>${users}</b>\n` +
      `📄 Просмотры: <b>${pageviews}</b>\n` +
      `↩️ Отказы: <b>${bounce}%</b>\n` +
      `⏱ Время на сайте: <b>${durStr}</b>\n\n` +
      `📝 Оставили заявку: <b>${leads}</b>\n\n` +
      `📅 За 7 дней: <b>${weekVisits}</b> визитов, <b>${weekUsers}</b> уникальных\n`

    if (topPages) report += `\n🔝 Топ страниц:\n${topPages}`
    if (srcLines) report += `\n🚦 Источники:\n${srcLines}`

    // Еженедельный отчёт по воскресеньям
    if (now.getDay() === 0) {
      const weekData = await metrikaRequest(
        "ym:s:visits,ym:s:users,ym:s:pageviews,ym:s:bounceRate",
        "",
        wDate,
        yDate
      )
      const wt2 = weekData.totals || []
      const period = `${labelStr(weekAgo)}–${labelStr(yesterday)}`
      let weekly =
        `📈 <b>medved-club.ru — Итоги недели ${period}</b>\n\n` +
        `👥 Визиты: <b>${Math.round(wt2[0] || 0)}</b>\n` +
        `🧑 Уникальные: <b>${Math.round(wt2[1] || 0)}</b>\n` +
        `📄 Просмотры: <b>${Math.round(wt2[2] || 0)}</b>\n` +
        `↩️ Отказы: <b>${Math.round(wt2[3] || 0)}%</b>\n`

      const wPages = await metrikaRequest("ym:s:pageviews", "ym:s:startURL", wDate, yDate)
      let wTop = ""
      for (const row of (wPages.data || []).slice(0, 7)) {
        let page: string = row?.dimensions?.[0]?.name || "/"
        page = page.replace("https://medved-club.ru", "") || "/"
        const pv = Math.round(row?.metrics?.[0] || 0)
        if (pv > 0) wTop += `  ${page} — ${pv}\n`
      }
      if (wTop) weekly += `\n🔝 Топ страниц недели:\n${wTop}`
      await sendTelegram(weekly)
    }

    await sendTelegram(report)
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    await sendTelegram(`❌ <b>medved-club.ru</b> — ошибка отчёта: ${e.message}`)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

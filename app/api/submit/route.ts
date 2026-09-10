import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, age, who, trainingFormat, preferredTime, comment, participants } = body

    const token = process.env.VK_COMMUNITY_TOKEN
    const peerId = process.env.VK_CHAT_PEER_ID

    if (!token || !peerId) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const splitLines = participants?.length
      ? ["", "👥 Участники сплита:", ...participants.map((p: { name: string; age: string }, i: number) =>
          `   ${i + 1}. ${p.name}${p.age ? ` — ${p.age}` : ""}`
        )]
      : []

    const lines = [
      "🥊 Новая заявка с сайта клуба «Медведь»",
      "",
      `👤 Имя: ${name}`,
      `📞 Телефон: ${phone}`,
      who ? `👤 Кто занимается: ${who}` : null,
      age ? `🔢 Возраст: ${age}` : null,
      trainingFormat ? `🎯 Формат: ${trainingFormat}` : null,
      ...splitLines,
      preferredTime ? `🕐 Удобное время: ${preferredTime}` : null,
      comment ? `💬 Комментарий: ${comment}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n")

    const params = new URLSearchParams({
      peer_id: peerId,
      message: lines,
      random_id: String(Math.floor(Math.random() * 1e9)),
      access_token: token,
      v: "5.131",
    })

    const vkRes = await fetch(`https://api.vk.com/method/messages.send?${params}`, {
      method: "POST",
    })

    const vkData = await vkRes.json()

    if (vkData.error) {
      console.error("VK API error:", vkData.error)
      return NextResponse.json({ error: vkData.error.error_msg }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Submit error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

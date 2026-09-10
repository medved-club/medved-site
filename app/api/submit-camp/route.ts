import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { parentName, phone, camp, participantName, participantAge, withFamily, comment } = body

    const token = process.env.VK_COMMUNITY_TOKEN
    const peerId = process.env.VK_CHAT_PEER_ID

    if (!token || !peerId) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const lines = [
      "🏕️ Новая заявка на СБОРЫ — сайт клуба «Медведь»",
      "",
      `👤 Имя: ${parentName}`,
      `📞 Телефон: ${phone}`,
      `📍 Сборы: ${camp}`,
      participantName ? `🥊 Участник: ${participantName}` : null,
      participantAge ? `🔢 Возраст участника: ${participantAge}` : null,
      withFamily ? `👨‍👩‍👧 Сопровождающие: ${withFamily}` : null,
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
    console.error("Submit camp error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

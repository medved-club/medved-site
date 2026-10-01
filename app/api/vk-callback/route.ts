import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

// Приёмник VK Callback API. Нужен из-за ограничения токена сообщества:
// messages.getHistory возвращает Access denied для ключей, созданных через
// упрощённую страницу act=tokens (проверено 22.09.2026, medved-marketing).
// Читать сообщения через этот метод нельзя — вместо этого ВК сам присылает
// сюда каждое новое сообщение через POST-запрос.

const LOG_PATH = path.join(process.cwd(), "vk_events.jsonl")

export async function POST(req: NextRequest) {
  const body = await req.json()

  const confirmationCode = process.env.VK_CALLBACK_CONFIRMATION
  const secretKey = process.env.VK_CALLBACK_SECRET

  if (secretKey && body.secret !== secretKey) {
    return new NextResponse("access denied", { status: 403 })
  }

  if (body.type === "confirmation") {
    return new NextResponse(confirmationCode || "", { status: 200 })
  }

  try {
    const line = JSON.stringify({ received_at: new Date().toISOString(), ...body }) + "\n"
    await fs.appendFile(LOG_PATH, line, "utf-8")
  } catch (e) {
    console.error("vk-callback: не удалось записать событие", e)
  }

  // ВК требует ответ "ok" в течение нескольких секунд, иначе повторит запрос.
  return new NextResponse("ok", { status: 200 })
}

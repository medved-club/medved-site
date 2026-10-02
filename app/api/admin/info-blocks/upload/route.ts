import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import crypto from "crypto"

const UPLOAD_DIR = path.join(process.cwd(), "public", "images", "announcements")
const ALLOWED_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
}
const MAX_SIZE = 15 * 1024 * 1024

export async function POST(req: Request) {
  const form = await req.formData()
  const file = form.get("file")

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Файл не получен" }, { status: 400 })
  }
  const ext = ALLOWED_EXT[file.type]
  if (!ext) {
    return NextResponse.json({ error: "Поддерживаются только JPG, PNG, WEBP" }, { status: 400 })
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Файл больше 15 МБ" }, { status: 400 })
  }

  const filename = `announcement-${crypto.randomBytes(3).toString("hex")}.${ext}`
  await fs.mkdir(UPLOAD_DIR, { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  await fs.writeFile(path.join(UPLOAD_DIR, filename), buffer)

  return NextResponse.json({ ok: true, path: `/images/announcements/${filename}` })
}

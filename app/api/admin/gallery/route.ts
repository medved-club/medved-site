import { NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"
import crypto from "crypto"
import { getSiteContent, saveSiteContent } from "@/lib/site-content"

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery")
const ALLOWED_CATEGORIES = ["hall", "group", "personal", "split", "competitions", "krasnodar", "thailand"]
const ALLOWED_EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
}
const MAX_SIZE = 15 * 1024 * 1024

export async function GET() {
  const content = await getSiteContent()
  return NextResponse.json(content.galleryItems)
}

export async function POST(req: Request) {
  const form = await req.formData()
  const file = form.get("file")
  const category = String(form.get("category") || "")
  const caption = String(form.get("caption") || "")

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Файл не получен" }, { status: 400 })
  }
  if (!ALLOWED_CATEGORIES.includes(category)) {
    return NextResponse.json({ error: "Неизвестная категория" }, { status: 400 })
  }
  const ext = ALLOWED_EXT[file.type]
  if (!ext) {
    return NextResponse.json({ error: "Поддерживаются только JPG, PNG, WEBP" }, { status: 400 })
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Файл больше 15 МБ" }, { status: 400 })
  }

  const suffix = crypto.randomBytes(2).toString("hex")
  const filename = `${category}-${suffix}.${ext}`
  await fs.mkdir(GALLERY_DIR, { recursive: true })
  const buffer = Buffer.from(await file.arrayBuffer())
  await fs.writeFile(path.join(GALLERY_DIR, filename), buffer)

  const content = await getSiteContent()
  const id = `g${Date.now()}`
  content.galleryItems.push({
    id,
    category,
    alt: caption || category,
    src: `/images/gallery/${filename}`,
    caption: caption || "",
  })
  await saveSiteContent(content)

  return NextResponse.json({ ok: true, item: content.galleryItems[content.galleryItems.length - 1] })
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  const content = await getSiteContent()
  const item = content.galleryItems.find((i) => i.id === id)
  if (!item) {
    return NextResponse.json({ error: "Фото не найдено" }, { status: 404 })
  }

  content.galleryItems = content.galleryItems.filter((i) => i.id !== id)
  await saveSiteContent(content)

  if (item.src && item.src.startsWith("/images/gallery/")) {
    const filePath = path.join(process.cwd(), "public", item.src)
    await fs.unlink(filePath).catch(() => {})
  }

  return NextResponse.json({ ok: true })
}

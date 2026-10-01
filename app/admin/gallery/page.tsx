"use client"

import { useEffect, useState } from "react"
import type { GalleryItem } from "@/lib/site-content"

const categories = [
  { value: "hall", label: "Зал" },
  { value: "group", label: "Групповые тренировки" },
  { value: "personal", label: "Персональные тренировки" },
  { value: "split", label: "Сплит-тренировки" },
  { value: "competitions", label: "Соревнования" },
  { value: "krasnodar", label: "Сборы Краснодарский край" },
  { value: "thailand", label: "Сборы Таиланд" },
]

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[] | null>(null)
  const [category, setCategory] = useState(categories[0].value)
  const [caption, setCaption] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")

  const load = () => fetch("/api/admin/gallery").then((r) => r.json()).then(setItems)

  useEffect(() => {
    load()
  }, [])

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    setError("")
    setUploading(true)
    const form = new FormData()
    form.append("file", file)
    form.append("category", category)
    form.append("caption", caption)
    const res = await fetch("/api/admin/gallery", { method: "POST", body: form })
    const data = await res.json()
    setUploading(false)
    if (!res.ok) {
      setError(data.error || "Не удалось загрузить фото")
      return
    }
    setFile(null)
    setCaption("")
    load()
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить это фото с сайта?")) return
    await fetch("/api/admin/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    load()
  }

  return (
    <div>
      <h1 className="text-2xl font-black text-white mb-2">Фото</h1>
      <p className="text-[#888888] mb-8">Загружайте фото в нужный альбом. Новые фото сразу появляются в галерее на сайте.</p>

      <form onSubmit={handleUpload} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 mb-8">
        <h2 className="text-white font-bold mb-4">Добавить фото</h2>

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Альбом</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
        >
          {categories.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Подпись (необязательно)</label>
        <input
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
        />

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Файл (JPG, PNG, WEBP, до 15 МБ)</label>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="w-full mb-4 text-white text-sm"
        />

        {error && <p className="text-[#c41e3a] text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={!file || uploading}
          className="px-8 py-3 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-lg transition-all duration-200"
        >
          {uploading ? "Загружаем…" : "Загрузить"}
        </button>
      </form>

      <h2 className="text-white font-bold mb-4">Все фото ({items?.length ?? 0})</h2>
      {!items ? (
        <p className="text-[#888888]">Загрузка…</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden">
              <div className="aspect-[4/3] bg-[#111111]">
                {item.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                )}
              </div>
              <div className="p-3">
                <p className="text-[#888888] text-xs mb-2">{categories.find((c) => c.value === item.category)?.label ?? item.category}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-[#c41e3a] text-xs font-semibold hover:underline"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

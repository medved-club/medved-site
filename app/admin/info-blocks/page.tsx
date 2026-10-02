"use client"

import { useEffect, useState } from "react"
import type { InfoBlock } from "@/lib/site-content"

function newBlock(): InfoBlock {
  return { id: crypto.randomUUID(), title: "", text: "", image: null, linkHref: "", linkText: "", active: true }
}

export default function AdminInfoBlocksPage() {
  const [items, setItems] = useState<InfoBlock[] | null>(null)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [uploadingId, setUploadingId] = useState<string | null>(null)
  const [uploadError, setUploadError] = useState("")

  useEffect(() => {
    fetch("/api/admin/info-blocks")
      .then((r) => r.json())
      .then(setItems)
  }, [])

  const update = (id: string, field: keyof InfoBlock, value: string | boolean | null) => {
    setItems((prev) => prev?.map((b) => (b.id === id ? { ...b, [field]: value } : b)) ?? null)
  }

  const add = () => setItems((prev) => [...(prev ?? []), newBlock()])
  const remove = (id: string) => setItems((prev) => prev?.filter((b) => b.id !== id) ?? null)

  const uploadImage = async (id: string, file: File) => {
    setUploadError("")
    setUploadingId(id)
    const form = new FormData()
    form.append("file", file)
    const res = await fetch("/api/admin/info-blocks/upload", { method: "POST", body: form })
    const data = await res.json()
    setUploadingId(null)
    if (!res.ok) {
      setUploadError(data.error || "Не удалось загрузить картинку")
      return
    }
    update(id, "image", data.path)
  }

  const save = async () => {
    setStatus("saving")
    const res = await fetch("/api/admin/info-blocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(items),
    })
    setStatus(res.ok ? "saved" : "error")
    setTimeout(() => setStatus("idle"), 2500)
  }

  if (!items) return <p className="text-[#888888]">Загрузка…</p>

  return (
    <div>
      <h1 className="text-2xl font-black text-white mb-2">Объявления</h1>
      <p className="text-[#888888] mb-8">Короткие блоки на главной странице — например, набор в новую группу. Неактивные не показываются на сайте.</p>

      <div className="flex flex-col gap-4">
        {items.map((b) => (
          <div key={b.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center gap-2 text-sm text-white">
                <input type="checkbox" checked={b.active} onChange={(e) => update(b.id, "active", e.target.checked)} />
                Показывать на сайте
              </label>
              <button onClick={() => remove(b.id)} className="text-[#c41e3a] text-sm font-semibold hover:underline">
                Удалить
              </button>
            </div>

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Картинка (необязательно)</label>
            {b.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={b.image} alt="" className="w-full max-w-[200px] rounded-lg mb-3 border border-[#2a2a2a]" />
            )}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) uploadImage(b.id, file)
              }}
              className="w-full mb-1 text-white text-sm"
            />
            {uploadingId === b.id && <p className="text-[#888888] text-xs mb-3">Загружаем…</p>}
            {uploadError && uploadingId === null && <p className="text-[#c41e3a] text-xs mb-3">{uploadError}</p>}
            {b.image && (
              <button
                type="button"
                onClick={() => update(b.id, "image", null)}
                className="text-[#888888] text-xs hover:text-[#c41e3a] mb-4 inline-block"
              >
                Убрать картинку
              </button>
            )}

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2 mt-2">Заголовок</label>
            <input
              value={b.title}
              onChange={(e) => update(b.id, "title", e.target.value)}
              className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
              placeholder="Например: Открыт набор в новую группу"
            />

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Текст</label>
            <textarea
              value={b.text}
              onChange={(e) => update(b.id, "text", e.target.value)}
              rows={3}
              className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Ссылка (необязательно)</label>
                <input
                  value={b.linkHref ?? ""}
                  onChange={(e) => update(b.id, "linkHref", e.target.value)}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                  placeholder="/raspisanie-i-tseny"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Текст ссылки</label>
                <input
                  value={b.linkText ?? ""}
                  onChange={(e) => update(b.id, "linkText", e.target.value)}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                  placeholder="Подробнее"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={add}
          className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-lg transition-all duration-200"
        >
          + Добавить объявление
        </button>
        <button
          onClick={save}
          disabled={status === "saving"}
          className="px-8 py-3 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-lg transition-all duration-200"
        >
          {status === "saving" ? "Сохраняем…" : status === "saved" ? "Сохранено ✓" : status === "error" ? "Ошибка, попробуйте ещё раз" : "Сохранить"}
        </button>
      </div>
    </div>
  )
}

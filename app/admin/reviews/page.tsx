"use client"

import { useEffect, useState } from "react"
import type { Review } from "@/lib/site-content"

function newReview(): Review {
  return { id: crypto.randomUUID(), author: "", rating: 5, text: "", source: "Яндекс.Карты", date: "", featured: false }
}

export default function AdminReviewsPage() {
  const [items, setItems] = useState<Review[] | null>(null)
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  useEffect(() => {
    fetch("/api/admin/reviews")
      .then((r) => r.json())
      .then(setItems)
  }, [])

  const update = (id: string, field: keyof Review, value: string | number | boolean) => {
    setItems((prev) => prev?.map((r) => (r.id === id ? { ...r, [field]: value } : r)) ?? null)
  }

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const add = () => {
    const item = newReview()
    setItems((prev) => [item, ...(prev ?? [])])
    setExpanded((prev) => new Set(prev).add(item.id))
  }
  const remove = (id: string) => setItems((prev) => prev?.filter((r) => r.id !== id) ?? null)

  const save = async () => {
    setStatus("saving")
    const res = await fetch("/api/admin/reviews", {
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
      <h1 className="text-2xl font-black text-white mb-2">Отзывы</h1>
      <p className="text-[#888888] mb-8">Всего {items.length}. «Показывать в первую очередь» — отзыв виден сразу на сайте, остальные открываются по кнопке «Показать все отзывы».</p>

      <div className="flex gap-3 mb-6">
        <button
          onClick={add}
          className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-lg transition-all duration-200"
        >
          + Добавить отзыв
        </button>
        <button
          onClick={save}
          disabled={status === "saving"}
          className="px-8 py-3 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-lg transition-all duration-200"
        >
          {status === "saving" ? "Сохраняем…" : status === "saved" ? "Сохранено ✓" : status === "error" ? "Ошибка, попробуйте ещё раз" : "Сохранить"}
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((r) => {
          const isOpen = expanded.has(r.id)
          return (
            <div key={r.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(r.id)}
                className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
              >
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">{r.author || "(без имени)"} — {r.rating}★{r.featured ? " · на сайте всегда видно" : ""}</p>
                  <p className="text-[#888888] text-xs truncate mt-0.5">{r.text}</p>
                </div>
                <span className="text-[#555] text-xs flex-shrink-0">{isOpen ? "Свернуть ▲" : "Открыть ▼"}</span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-[#2a2a2a] pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Автор</label>
                      <input
                        value={r.author}
                        onChange={(e) => update(r.id, "author", e.target.value)}
                        className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Оценка (1–5)</label>
                      <input
                        type="number"
                        min={1}
                        max={5}
                        value={r.rating}
                        onChange={(e) => update(r.id, "rating", Number(e.target.value))}
                        className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                      />
                    </div>
                  </div>

                  <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Текст отзыва</label>
                  <textarea
                    value={r.text}
                    onChange={(e) => update(r.id, "text", e.target.value)}
                    rows={4}
                    className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Источник</label>
                      <input
                        value={r.source}
                        onChange={(e) => update(r.id, "source", e.target.value)}
                        className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Дата (необязательно)</label>
                      <input
                        value={r.date ?? ""}
                        onChange={(e) => update(r.id, "date", e.target.value)}
                        placeholder="15 декабря 2025"
                        className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-white">
                      <input type="checkbox" checked={!!r.featured} onChange={(e) => update(r.id, "featured", e.target.checked)} />
                      Показывать в первую очередь (видно сразу на сайте)
                    </label>
                    <button onClick={() => remove(r.id)} className="text-[#c41e3a] text-sm font-semibold hover:underline">
                      Удалить отзыв
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

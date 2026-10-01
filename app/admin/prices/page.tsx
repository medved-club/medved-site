"use client"

import { useEffect, useState } from "react"
import type { TrainingType } from "@/lib/site-content"

export default function AdminPricesPage() {
  const [items, setItems] = useState<TrainingType[] | null>(null)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  useEffect(() => {
    fetch("/api/admin/prices")
      .then((r) => r.json())
      .then(setItems)
  }, [])

  const update = (id: string, field: "price" | "priceNote", value: string) => {
    setItems((prev) => prev?.map((t) => (t.id === id ? { ...t, [field]: value } : t)) ?? null)
  }

  const save = async () => {
    setStatus("saving")
    const res = await fetch("/api/admin/prices", {
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
      <h1 className="text-2xl font-black text-white mb-2">Цены</h1>
      <p className="text-[#888888] mb-8">Меняйте цену и подпись к ней. Название и описание тренировки не меняются здесь.</p>

      <div className="flex flex-col gap-4">
        {items.map((t) => (
          <div key={t.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <h2 className="text-white font-bold mb-4">{t.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Цена</label>
                <input
                  value={t.price}
                  onChange={(e) => update(t.id, "price", e.target.value)}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Подпись (например «за занятие»)</label>
                <input
                  value={t.priceNote}
                  onChange={(e) => update(t.id, "priceNote", e.target.value)}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={save}
        disabled={status === "saving"}
        className="mt-6 px-8 py-3 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-lg transition-all duration-200"
      >
        {status === "saving" ? "Сохраняем…" : status === "saved" ? "Сохранено ✓" : status === "error" ? "Ошибка, попробуйте ещё раз" : "Сохранить"}
      </button>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import type { Camp } from "@/lib/site-content"

export default function AdminCampsPage() {
  const [items, setItems] = useState<Camp[] | null>(null)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  useEffect(() => {
    fetch("/api/admin/camps")
      .then((r) => r.json())
      .then(setItems)
  }, [])

  const update = (id: string, field: "subtitle" | "description" | "who", value: string) => {
    setItems((prev) => prev?.map((c) => (c.id === id ? { ...c, [field]: value } : c)) ?? null)
  }

  const updateDetails = (id: string, value: string) => {
    const details = value.split("\n").map((s) => s.trim()).filter(Boolean)
    setItems((prev) => prev?.map((c) => (c.id === id ? { ...c, details } : c)) ?? null)
  }

  const save = async () => {
    setStatus("saving")
    const res = await fetch("/api/admin/camps", {
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
      <h1 className="text-2xl font-black text-white mb-2">Сборы</h1>
      <p className="text-[#888888] mb-8">Даты (строка под заголовком), описание и условия сборов.</p>

      <div className="flex flex-col gap-6">
        {items.map((c) => (
          <div key={c.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <h2 className="text-white font-bold mb-4">{c.title}</h2>

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Даты (например «Краснодарский край, Анапа · июль 2027»)</label>
            <input
              value={c.subtitle}
              onChange={(e) => update(c.id, "subtitle", e.target.value)}
              className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Описание</label>
            <textarea
              value={c.description}
              onChange={(e) => update(c.id, "description", e.target.value)}
              rows={3}
              className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Условия — каждый пункт с новой строки</label>
            <textarea
              value={c.details.join("\n")}
              onChange={(e) => updateDetails(c.id, e.target.value)}
              rows={5}
              className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Для кого (необязательно)</label>
            <textarea
              value={c.who ?? ""}
              onChange={(e) => update(c.id, "who", e.target.value)}
              rows={2}
              className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />
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

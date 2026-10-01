"use client"

import { useEffect, useState } from "react"
import type { FaqItem } from "@/lib/site-content"

function newItem(): FaqItem {
  return { id: crypto.randomUUID(), question: "", answer: "" }
}

export default function AdminFaqPage() {
  const [items, setItems] = useState<FaqItem[] | null>(null)
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")

  useEffect(() => {
    fetch("/api/admin/faq")
      .then((r) => r.json())
      .then(setItems)
  }, [])

  const update = (id: string, field: "question" | "answer", value: string) => {
    setItems((prev) => prev?.map((f) => (f.id === id ? { ...f, [field]: value } : f)) ?? null)
  }

  const add = () => setItems((prev) => [...(prev ?? []), newItem()])
  const remove = (id: string) => setItems((prev) => prev?.filter((f) => f.id !== id) ?? null)
  const moveUp = (index: number) => {
    if (index === 0) return
    setItems((prev) => {
      if (!prev) return prev
      const next = [...prev]
      ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
      return next
    })
  }
  const moveDown = (index: number) => {
    setItems((prev) => {
      if (!prev || index === prev.length - 1) return prev
      const next = [...prev]
      ;[next[index + 1], next[index]] = [next[index], next[index + 1]]
      return next
    })
  }

  const save = async () => {
    setStatus("saving")
    const res = await fetch("/api/admin/faq", {
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
      <h1 className="text-2xl font-black text-white mb-2">Частые вопросы (FAQ)</h1>
      <p className="text-[#888888] mb-8">Порядок на сайте совпадает с порядком в списке ниже.</p>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={item.id} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1">
                <button onClick={() => moveUp(index)} disabled={index === 0} className="px-2 py-1 text-xs text-[#888888] hover:text-white disabled:opacity-30 rounded bg-[#111111] border border-[#2a2a2a]">▲</button>
                <button onClick={() => moveDown(index)} disabled={index === items.length - 1} className="px-2 py-1 text-xs text-[#888888] hover:text-white disabled:opacity-30 rounded bg-[#111111] border border-[#2a2a2a]">▼</button>
              </div>
              <button onClick={() => remove(item.id)} className="text-[#c41e3a] text-sm font-semibold hover:underline">Удалить</button>
            </div>

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Вопрос</label>
            <input
              value={item.question}
              onChange={(e) => update(item.id, "question", e.target.value)}
              className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />

            <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Ответ</label>
            <textarea
              value={item.answer}
              onChange={(e) => update(item.id, "answer", e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={add}
          className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-lg transition-all duration-200"
        >
          + Добавить вопрос
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

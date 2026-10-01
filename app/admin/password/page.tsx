"use client"

import { useState } from "react"

export default function AdminPasswordPage() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [newPassword2, setNewPassword2] = useState("")
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    if (newPassword !== newPassword2) {
      setError("Новые пароли не совпадают")
      return
    }
    setStatus("saving")
    const res = await fetch("/api/admin/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error || "Не удалось сменить пароль")
      setStatus("error")
      return
    }
    setOldPassword("")
    setNewPassword("")
    setNewPassword2("")
    setStatus("saved")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <div>
      <h1 className="text-2xl font-black text-white mb-2">Смена пароля</h1>
      <p className="text-[#888888] mb-8">Меняет пароль только для вашего собственного входа. Логин остаётся прежним.</p>

      <form onSubmit={handleSubmit} className="max-w-md bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Текущий пароль</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
          autoComplete="current-password"
        />

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Новый пароль (минимум 8 символов)</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
          autoComplete="new-password"
        />

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Повторите новый пароль</label>
        <input
          type="password"
          value={newPassword2}
          onChange={(e) => setNewPassword2(e.target.value)}
          className="w-full mb-6 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
          autoComplete="new-password"
        />

        {error && <p className="text-[#c41e3a] text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={status === "saving"}
          className="px-8 py-3 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-lg transition-all duration-200"
        >
          {status === "saving" ? "Сохраняем…" : status === "saved" ? "Пароль изменён ✓" : "Сменить пароль"}
        </button>
      </form>
    </div>
  )
}

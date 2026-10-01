"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || "Ошибка входа")
        setLoading(false)
        return
      }
      router.push("/admin")
      router.refresh()
    } catch {
      setError("Не удалось связаться с сервером")
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#111111] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8">
        <h1 className="text-xl font-black text-white mb-1">Админка «Медведь»</h1>
        <p className="text-[#888888] text-sm mb-6">Войдите, чтобы изменить сайт</p>

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Логин</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
          autoComplete="username"
          autoFocus
        />

        <label className="block text-xs font-semibold text-[#888888] uppercase tracking-wider mb-2">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-[#c41e3a]/60"
          autoComplete="current-password"
        />

        {error && <p className="text-[#c41e3a] text-sm mb-4">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-lg transition-all duration-200"
        >
          {loading ? "Входим…" : "Войти"}
        </button>
      </form>
    </main>
  )
}

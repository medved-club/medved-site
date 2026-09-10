"use client"

import { useEffect, useState } from "react"

const CAMP_START = new Date("2026-06-30T00:00:00+03:00")

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export default function CampCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const calc = () => {
      const diff = CAMP_START.getTime() - Date.now()
      if (diff <= 0) {
        setStarted(true)
        return
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  if (started) return null
  if (!timeLeft) return null

  return (
    <div className="mb-8 bg-[#1a1a1a] border border-[#c41e3a]/30 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-[#c41e3a] animate-pulse" />
        <span className="text-[#c41e3a] text-xs font-bold uppercase tracking-wider">До начала первой смены</span>
      </div>
      <div className="flex items-center gap-3">
        {[
          { value: timeLeft.days, label: "дн" },
          { value: timeLeft.hours, label: "ч" },
          { value: timeLeft.minutes, label: "мин" },
          { value: timeLeft.seconds, label: "сек" },
        ].map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-3">
            {i > 0 && <span className="text-[#333] font-bold">:</span>}
            <div className="text-center">
              <div className="text-2xl font-black text-white tabular-nums w-10">{pad(value)}</div>
              <div className="text-[10px] text-[#555] uppercase tracking-wider">{label}</div>
            </div>
          </div>
        ))}
      </div>
      <span className="text-[#555] text-xs sm:ml-auto">Сборы на Азовском море · 30 июня</span>
    </div>
  )
}

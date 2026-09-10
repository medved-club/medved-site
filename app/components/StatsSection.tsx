"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { target: 10, prefix: "более ", suffix: " лет", label: "тренерского опыта" },
  { target: 6, prefix: "", suffix: " лет", label: "сборы на море подряд" },
  { target: 120, prefix: "", suffix: "+", label: "спортсменов на каждых сборах" },
  { target: 5, prefix: "", suffix: ",0", label: "рейтинг на Яндекс.Картах" },
]

function StatItem({ stat, triggered }: { stat: typeof stats[0]; triggered: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    const duration = 1600
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.floor(eased * stat.target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(stat.target)
    }
    requestAnimationFrame(step)
  }, [triggered, stat.target])

  return (
    <div className="text-center px-4 py-6">
      <div className="text-4xl sm:text-5xl font-black text-white tabular-nums leading-none">
        {stat.prefix && <span className="text-2xl sm:text-3xl font-bold text-[#888888]">{stat.prefix}</span>}
        <span>{count}</span>
        <span className="text-[#c41e3a]">{stat.suffix}</span>
      </div>
      <p className="mt-3 text-[#666666] text-sm">{stat.label}</p>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-4 bg-[#0a0a0a] border-y border-[#1e1e1e]">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#1e1e1e]"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} triggered={triggered} />
        ))}
      </div>
    </section>
  )
}

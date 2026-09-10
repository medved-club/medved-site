import Link from "next/link"

const items = [
  "ЗАПИСАТЬСЯ НА СБОРЫ",
  "ТАЙСКИЙ БОКС В ЩЁЛКОВО",
  "ПЕРВАЯ ТРЕНИРОВКА БЕСПЛАТНО",
  "ЗАПИСАТЬСЯ НА СБОРЫ",
  "ГРУППОВЫЕ · ПЕРСОНАЛЬНЫЕ · СПЛИТ",
  "ПЕРВАЯ ТРЕНИРОВКА БЕСПЛАТНО",
]

export default function Ticker() {
  const repeated = [...items, ...items, ...items]

  return (
    <Link href="/sboryi" className="block overflow-hidden bg-[#0a0a0a] border-y border-[#1e1e1e] py-3 select-none cursor-pointer hover:border-[#c41e3a]/30 transition-colors duration-300 group">
      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#555555] group-hover:text-[#666666] transition-colors">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#c41e3a] flex-shrink-0" />
          </span>
        ))}
      </div>
    </Link>
  )
}

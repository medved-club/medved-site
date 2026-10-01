import Link from "next/link"
import type { InfoBlock } from "@/lib/site-content"

export default function InfoBlocksSection({ infoBlocks }: { infoBlocks: InfoBlock[] }) {
  const active = infoBlocks.filter((b) => b.active && b.title)
  if (active.length === 0) return null

  return (
    <section className="py-12 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {active.map((b) => (
            <div key={b.id} className="bg-[#1a1a1a] border border-[#c41e3a]/30 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
              {b.text && <p className="text-[#888888] text-sm leading-relaxed mb-3">{b.text}</p>}
              {b.linkHref && (
                <Link href={b.linkHref} className="text-[#c41e3a] text-sm font-semibold hover:underline">
                  {b.linkText || "Подробнее"}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

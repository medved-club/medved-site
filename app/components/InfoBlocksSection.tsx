import Link from "next/link"
import Image from "next/image"
import type { InfoBlock } from "@/lib/site-content"

export default function InfoBlocksSection({ infoBlocks }: { infoBlocks: InfoBlock[] }) {
  const active = infoBlocks.filter((b) => b.active && b.title)
  if (active.length === 0) return null

  return (
    <section className="py-12 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-5">
          {active.map((b) => (
            <div
              key={b.id}
              className={`bg-[#1a1a1a] border border-[#c41e3a]/30 rounded-xl overflow-hidden flex flex-col ${b.image ? "w-full max-w-[260px]" : "w-full sm:max-w-[360px]"}`}
            >
              {b.image && (
                <div className="relative w-full bg-[#111111]" style={{ aspectRatio: "9 / 16" }}>
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    sizes="260px"
                    className="object-contain"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-white font-bold text-sm mb-1.5">{b.title}</h3>
                {b.text && <p className="text-[#888888] text-xs leading-relaxed mb-2">{b.text}</p>}
                {b.linkHref && (
                  <Link href={b.linkHref} className="text-[#c41e3a] text-xs font-semibold hover:underline">
                    {b.linkText || "Подробнее"}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import CampsFormSection from "@/app/components/CampsFormSection"
import Link from "next/link"
import { getSiteContent } from "@/lib/site-content"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Сборы в Таиланде — Клуб «Медведь», Щёлково",
  description: "Спортивные сборы клуба «Медведь» в Таиланде — родине муай-тай. Март 2027. Тренировки в атмосфере настоящего тайского бокса.",
  alternates: {
    canonical: "https://medved-club.ru/sboryi/tailand",
  },
}

const highlights = [
  { title: "Родина муай-тай", text: "Таиланд — страна, где тайский бокс является национальным видом спорта. Тренировки в этой атмосфере дают особый опыт." },
  { title: "Международная среда", text: "На сборах занимаются спортсмены со всего мира — это ценный опыт, мотивация и новые знакомства." },
  { title: "Погружение в традиции", text: "Местные тренера, профессиональные залы, тайские методики — именно здесь муай-тай живёт в первозданном виде." },
  { title: "Незабываемые впечатления", text: "Помимо тренировок — экзотика, природа, кухня, культура Таиланда. Поездка, которую запомнят навсегда." },
]

export default async function TailandPage() {
  const content = await getSiteContent()
  const camp = content.camps.find((c) => c.id === "thailand")
  const subtitle = camp?.subtitle ?? "Родина муай-тай · март 2027"
  const description = camp?.description ?? ""
  const dateLabel = subtitle.split("·").pop()?.trim() ?? "Март 2027"

  return (
    <>
      <Header />
      <main className="bg-[#111111] min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/sboryi" className="text-xs text-[#666] hover:text-[#c41e3a] transition-colors">Сборы</Link>
              <span className="text-[#333] text-xs">/</span>
              <span className="text-xs text-[#c41e3a]">Таиланд</span>
            </div>
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              {subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Сборы в Таиланде
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              {description}
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Подробная программа, стоимость и даты — оставьте заявку, и мы расскажем всё при личном общении.
            </p>
            <Link
              href="/sboryi"
              className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
            >
              Узнать подробнее
            </Link>
          </div>
        </section>

        {/* Главное фото */}
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/camps/thailand-team.jpg"
              alt="Клуб Медведь на сборах в Таиланде — вся команда"
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: "520px" }}
              loading="lazy"
            />
            <p className="text-center text-[#555] text-xs mt-3">Клуб «Медведь» на сборах в Таиланде</p>
          </div>
        </section>

        {/* Фотогалерея */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-6">Фотографии</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { src: "/images/camps/thailand-team.jpg", alt: "Вся команда в тайском зале" },
                { src: "/images/camps/thailand-gym-ring.jpg", alt: "Тайский ринг" },
                { src: "/images/camps/thailand-sparring.jpg", alt: "Спарринг в зале" },
                { src: "/images/camps/thailand-training-1.jpg", alt: "Тренировка с тренером" },
                { src: "/images/camps/thailand-training-2.jpg", alt: "Тренировка в зале" },
                { src: "/images/camps/thailand-flag.jpg", alt: "Клуб Медведь с флагом" },
              ].map((photo, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1a1a]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#666] uppercase tracking-wider mb-1">Когда</p>
                <p className="text-white font-bold text-lg">{dateLabel}</p>
                <p className="text-[#888] text-sm">Точные даты будут объявлены дополнительно</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Почему Таиланд</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((h) => (
                <div key={h.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm">{h.title}</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Хочу на сборы в Таиланд</h2>
            <p className="text-[#888888] mb-8 max-w-xl mx-auto">
              Оставьте заявку — мы свяжемся и расскажем всё о программе, стоимости и датах сборов в марте 2027.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#camps-form"
                className="px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
              >
                Оставить заявку
              </a>
              <Link
                href="/"
                className="px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200"
              >
                На главную
              </Link>
            </div>
          </div>
        </section>

        <CampsFormSection defaultCamp="Таиланд (март 2027)" />
      </main>
      <Footer />
    </>
  )
}

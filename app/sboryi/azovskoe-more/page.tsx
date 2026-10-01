import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import CampsFormSection from "@/app/components/CampsFormSection"
import FloatingButton from "@/app/components/FloatingButton"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Сборы на Азовском море — Клуб «Медведь», Щёлково",
  description: "Спортивные сборы клуба «Медведь» на Азовском море, Краснодарский край. Тренировки у моря для детей, подростков и взрослых. 6 лет опыта, 80–120 спортсменов ежегодно.",
  alternates: {
    canonical: "https://medved-club.ru/sboryi/azovskoe-more",
  },
}

const included = [
  "Комфортные домики — кондиционер, ТВ, холодильник, санузел",
  "3-разовое питание",
  "2 бассейна и футбольное поле",
  "Открытый зал 200 м² и крытый зал 1000 м²",
  "Ринги, мешки, груши — всё для качественных тренировок",
]

export default function AzovPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Сборы", href: "/sboryi" },
        { name: "Азовское море", href: "/sboryi/azovskoe-more" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/sboryi" className="text-xs text-[#666] hover:text-[#c41e3a] transition-colors">Сборы</Link>
              <span className="text-[#333] text-xs">/</span>
              <span className="text-xs text-[#c41e3a]">Азовское море</span>
            </div>
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Краснодарский край · Анапа · июль 2027
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Сборы на Азовском море
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Проводим сборы уже 6 лет подряд — каждый год выезжает от 80 до 120 спортсменов. Тренировки, режим, дисциплина, командная атмосфера — и полноценный отдых у моря всей семьёй.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Дети, подростки, взрослые — любители и профессионалы. Сопровождающие (родители, бабушки, дедушки) приветствуются.
            </p>
            <a
              href="#camps-form"
              className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
            >
              Записаться на сборы
            </a>
          </div>
        </section>

        {/* Главное фото */}
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/camps-0704.jpg"
              alt="Клуб Медведь на сборах на Азовском море — общее фото с флагом клуба"
              className="w-full rounded-2xl object-cover"
              style={{ maxHeight: "520px" }}
              loading="lazy"
            />
            <p className="text-center text-[#555] text-xs mt-3">Клуб «Медведь» на сборах на Азовском море</p>
          </div>
        </section>

        {/* Фотогалерея */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-6">Фотографии</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { src: "/images/gallery/camps-0704.jpg", alt: "Общее фото с флагом клуба" },
                { src: "/images/gallery/camps-7342.jpg", alt: "Команда на пляже с флагом клуба" },
                { src: "/images/gallery/camps-6489.jpg", alt: "Командное фото в зале" },
                { src: "/images/gallery/camps-0593.jpg", alt: "Команда на берегу" },
                { src: "/images/gallery/camps-4916.jpg", alt: "На пляже" },
                { src: "/images/gallery/camps-e60f.jpg", alt: "Тренировка в зале" },
                { src: "/images/gallery/camps-1d2c.jpg", alt: "Работа с тренером" },
                { src: "/images/gallery/camps-7331.jpg", alt: "Спарринг" },
                { src: "/images/gallery/camps-1530.jpg", alt: "Тренировка в паре" },
                { src: "/images/gallery/camps-2756.jpg", alt: "Групповая тренировка" },
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
                <p className="text-white font-bold text-lg">Июль 2027</p>
                <p className="text-[#888] text-sm">Точные даты будут объявлены дополнительно</p>
              </div>
            </div>
          </div>
        </section>

        {/* Included */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Что включено</p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Записаться на сборы</h2>
            <p className="text-[#888888] mb-8 max-w-xl mx-auto">
              Оставьте заявку — мы свяжемся, расскажем детали, подберём смену и ответим на все вопросы.
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

        <CampsFormSection defaultCamp="Азовское море (июль 2027)" />
      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}

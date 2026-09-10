import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Что взять на первую тренировку по тайскому боксу — Клуб «Медведь»",
  description: "Полный список снаряжения для первой тренировки по тайскому боксу. Что нужно сразу, что купить потом и на чём не экономить. Клуб «Медведь», Щёлково.",
  keywords: ["что взять на тренировку по тайскому боксу", "снаряжение тайский бокс новичок", "перчатки тайский бокс купить", "экипировка муай тай"],
  alternates: {
    canonical: "https://medved-club.ru/blog/chto-vzyat-na-trenirovku",
  },
}

export default function ArticleEkipPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Что взять на тренировку", href: "/blog/chto-vzyat-na-trenirovku" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">← Блог</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Новичкам</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">6 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Что взять на первую тренировку по тайскому боксу
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Один из самых частых вопросов новичков — «что купить перед первой тренировкой?». Короткий ответ: почти ничего. Длинный — ниже.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">На первую тренировку достаточно</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { item: "Спортивная форма", note: "Шорты и футболка. Специальной не нужно." },
                  { item: "Кроссовки или борцовки", note: "Обычные спортивные подойдут. Можно и босиком." },
                  { item: "Бутылка воды", note: "Минимум 1 литр — пить нужно много." },
                  { item: "Полотенце", note: "Небольшое — для пота." },
                ].map((e) => (
                  <div key={e.item} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <div className="text-white font-semibold text-sm mb-1">{e.item}</div>
                    <div className="text-[#555] text-xs">{e.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-[#666] text-sm mt-4">На первой тренировке перчатки и бинты выдаст тренер — покупать заранее не нужно.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что купить после 2–3 тренировок</h2>
              <div className="space-y-3">
                {[
                  { item: "Боксёрские бинты", price: "300–600 ₽", note: "Защищают запястья и костяшки. Нужны с первых регулярных тренировок. Берите эластичные, 4–4,5 метра." },
                  { item: "Боксёрские перчатки", price: "2 000–5 000 ₽", note: "12–16 oz для тренировок. Не берите самые дешёвые — набьёте руки. TopKing, Fairtex, Twins — хорошие бюджетные варианты." },
                  { item: "Капа", price: "300–800 ₽", note: "Нужна при работе в парах. Стандартная термопластичная подойдёт на старте." },
                ].map((e) => (
                  <div key={e.item} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex gap-4">
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm mb-1">{e.item}</div>
                      <div className="text-[#666] text-xs">{e.note}</div>
                    </div>
                    <div className="text-[#c41e3a] font-bold text-sm flex-shrink-0">{e.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что купить позже (через 1–2 месяца)</h2>
              <div className="space-y-3">
                {[
                  { item: "Шлем для спаррингов", price: "2 000–5 000 ₽", note: "Нужен при контактной работе. Полуоткрытый — хороший баланс защиты и видимости." },
                  { item: "Щитки на голень", price: "1 500–3 000 ₽", note: "При активной работе ногами — защищают голень и подъём." },
                  { item: "Паховая защита", price: "500–1 500 ₽", note: "Для мужчин — обязательно при спаррингах." },
                  { item: "Шорты для тайского бокса", price: "800–2 500 ₽", note: "Специальные шорты удобнее спортивных — широкий крой не мешает работе ногами." },
                ].map((e) => (
                  <div key={e.item} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex gap-4">
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm mb-1">{e.item}</div>
                      <div className="text-[#666] text-xs">{e.note}</div>
                    </div>
                    <div className="text-[#c41e3a] font-bold text-sm flex-shrink-0">{e.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Уход за снаряжением</h2>
              <div className="space-y-2">
                {[
                  "Перчатки после тренировки — проветривать, не оставлять в сумке",
                  "Бинты стирать после каждой тренировки",
                  "Шлем протирать влажной тряпкой изнутри",
                  "Капу хранить в специальном боксе, не в кармане",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
              <h3 className="text-white font-bold text-sm mb-2">Совет тренера</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                Не покупайте всё сразу. Сначала убедитесь, что тренировки вам подходят, потом вкладывайтесь в снаряжение. Качественные перчатки и бинты — это важно, остальное можно брать постепенно. Спросите тренера — он подскажет, что брать конкретно под ваши задачи.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/tayskiy-boks-s-nulya" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс с нуля →</Link>
                <Link href="/probnaya-trenirovka" className="text-[#c41e3a] text-sm hover:underline">Пробная тренировка →</Link>
                <Link href="/raspisanie-i-tseny" className="text-[#c41e3a] text-sm hover:underline">Расписание и цены →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Первая тренировка — бесплатно</h2>
              <p className="text-[#888888] text-sm mb-6">Приходите в том, что есть. Снаряжение на первый раз выдадим.</p>
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записаться
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

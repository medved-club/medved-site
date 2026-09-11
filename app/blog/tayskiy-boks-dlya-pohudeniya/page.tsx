import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для похудения: сколько калорий и что изменится — Клуб «Медведь»",
  description: "Тайский бокс сжигает 600–900 ккал за тренировку. Что реально даёт 3 месяца занятий, как меняется тело и почему это лучше обычного кардио.",
  keywords: ["тайский бокс для похудения", "муай тай похудение", "тайский бокс калории", "сжечь жир тайский бокс"],
  alternates: {
    canonical: "https://medved-club.ru/blog/tayskiy-boks-dlya-pohudeniya",
  },
}

export default function ArticlePohudenieYaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Тайский бокс для похудения", href: "/blog/tayskiy-boks-dlya-pohudeniya" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">← Блог</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Фитнес</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">7 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Тайский бокс для похудения: сколько калорий и что изменится
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Тайский бокс — одна из самых энергозатратных тренировок. Но дело не только в калориях. Разбираем что реально происходит с телом и когда ждать первых результатов.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Сколько калорий сжигает тренировка</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: "Лёгкая тренировка", value: "400–500 ккал" },
                  { label: "Стандартная тренировка", value: "600–750 ккал" },
                  { label: "Интенсивная тренировка", value: "750–900 ккал" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 text-center">
                    <div className="text-[#c41e3a] font-black text-lg mb-1">{s.value}</div>
                    <div className="text-[#555] text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-[#888888] leading-relaxed">
                Для сравнения: час на беговой дорожке — 300–450 ккал, час йоги — 200–300 ккал. При этом в тайском боксе нагрузка идёт на всё тело: руки, ноги, корпус, пресс.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Почему тайский бокс лучше обычного кардио</h2>
              <div className="space-y-3">
                {[
                  { title: "Постэффект", text: "После интенсивной тренировки тело продолжает сжигать калории ещё 24–48 часов — это называется EPOC-эффект. Беговая дорожка такого не даёт." },
                  { title: "Мышцы + жир", text: "Тайский бокс одновременно строит мышцы и сжигает жир. Больше мышц — выше метаболизм — быстрее уходит вес." },
                  { title: "Не надоедает", text: "На беговой дорожке скучно. В тайском боксе всегда есть новая техника, партнёр, цель. Люди не бросают." },
                  { title: "Стресс уходит вместе с весом", text: "Кортизол — гормон стресса — задерживает жир. Тренировка снижает кортизол. Двойной эффект для похудения." },
                ].map((b) => (
                  <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что меняется по месяцам</h2>
              <div className="space-y-3">
                {[
                  { month: "Месяц 1", text: "Привыкание. Первые 2 недели тяжело — одышка, боль в мышцах. К концу месяца тренировки проходят легче, появляется базовая техника." },
                  { month: "Месяц 2", text: "Первые видимые изменения. Уходит отёчность, подтягиваются руки и живот. Выносливость заметно растёт. Вес может не меняться, но тело становится плотнее." },
                  { month: "Месяц 3", text: "Серьёзные изменения в фигуре при регулярных тренировках и нормальном питании. Тело начинает работать иначе. Окружающие замечают." },
                ].map((m) => (
                  <div key={m.month} className="flex gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <span className="text-[#c41e3a] font-black text-sm w-20 flex-shrink-0">{m.month}</span>
                    <p className="text-[#888888] text-sm leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Важно понимать</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Тайский бокс — не диета. Если питаться без контроля, результатов в фигуре не будет даже при трёх тренировках в неделю. Но при базовом контроле питания прогресс будет очень заметным уже за первые 3 месяца.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Весы — не лучший показатель прогресса. Тело может весить столько же, но выглядеть совершенно иначе: мышцы тяжелее жира. Смотрите на объёмы и форму.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Какой формат тренировок подходит для похудения</h2>
              <div className="space-y-3">
                {[
                  { title: "Групповые тренировки", text: "Три раза в неделю — базовый минимум для похудения. Хорошая нагрузка, правильная техника, 6 500 ₽/месяц.", href: "/#lead-form" },
                  { title: "Персональные тренировки", text: "Быстрее результат, программа под конкретные зоны. Тренер контролирует интенсивность и технику индивидуально.", href: "/individualnye-trenirovki" },
                  { title: "Сплит для двоих", text: "Подходит, если хочется тренироваться с подругой или партнёром. Дешевле персональной, больше внимания чем в группе.", href: "/split-trenirovki" },
                ].map((f) => (
                  <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-2">{f.text}</p>
                    <Link href={f.href} className="text-[#c41e3a] text-xs hover:underline">Узнать подробнее →</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/blog/tayskiy-boks-dlya-zhenshchin" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс для женщин →</Link>
                <Link href="/dlya-devushek" className="text-[#c41e3a] text-sm hover:underline">Тренировки для девушек →</Link>
                <Link href="/probnaya-trenirovka" className="text-[#c41e3a] text-sm hover:underline">Пробная тренировка →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Первая тренировка — бесплатно</h2>
              <p className="text-[#888888] text-sm mb-6">Щёлково, Талсинская улица, 9 · Пн / Ср / Пт</p>
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

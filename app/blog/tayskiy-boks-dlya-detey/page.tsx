import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для детей: с какого возраста и почему полезно — Клуб «Медведь»",
  description: "С 6 лет можно приходить с нуля. Детские тренировки по тайскому боксу в Щёлково — безопасно, интересно, с результатом. Клуб «Медведь».",
  keywords: ["тайский бокс для детей", "детский тайский бокс Щёлково", "секция тайского бокса для детей", "муай тай дети", "тайский бокс с какого возраста"],
  alternates: {
    canonical: "https://medved-club.ru/blog/tayskiy-boks-dlya-detey",
  },
}

export default function ArticleDetiPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Тайский бокс для детей", href: "/blog/tayskiy-boks-dlya-detey" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">
              ← Блог
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Детям</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">7 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Тайский бокс для детей: с какого возраста, чему учат и почему это полезно
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Многие родители слышат «тайский бокс» и сразу представляют жёсткие бои. На деле детские тренировки — это совсем другое. Разбираем, с какого возраста можно начинать, что происходит на занятиях и что это даёт ребёнку.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">С какого возраста можно начинать</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                В клубе «Медведь» принимают детей с <strong className="text-white">6 лет</strong>. Это оптимальный возраст: ребёнок уже достаточно координирован, чтобы осваивать базовые движения, и при этом всё воспринимает через игру.
              </p>
              <p className="text-[#888888] leading-relaxed mb-3">
                До 8–9 лет занятия строятся на ОФП, подвижных играх и простых базовых элементах. Серьёзная техника и спарринги появляются позже, когда ребёнок готов физически и психологически.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Верхнего возрастного ограничения нет. Дети, которые пришли в 12–14 лет, быстро осваивают базу — взрослее, значит понятливее.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Как устроены детские группы</h2>
              <p className="text-[#888888] leading-relaxed mb-4">
                В клубе «Медведь» дети разделены по возрасту — это принципиально важно. Шестилетний ребёнок и двенадцатилетний тренируются отдельно.
              </p>
              <div className="space-y-2">
                {[
                  { age: "6–8 лет", time: "Пн/Ср/Пт в 18:00", desc: "Акцент на координацию, подвижные игры, базовую стойку и удары. Максимально игровой формат." },
                  { age: "9–13 лет", time: "Пн/Ср/Пт в 19:00", desc: "Техника ударов рук и ног, работа в парах на лапах, начало спарринговой работы в защитном снаряжении." },
                ].map((g) => (
                  <div key={g.age} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#c41e3a] font-bold text-sm">{g.age}</span>
                      <span className="text-[#444] text-xs">{g.time}</span>
                    </div>
                    <p className="text-[#777] text-sm leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что происходит на тренировке</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Детская тренировка длится 60 минут и делится на три части:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Разминка — бег, прыжки, координационные упражнения",
                  "Основная часть — стойка, удары руками и ногами по лапам и мешку",
                  "Растяжка и заминка",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#888888] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[#888888] leading-relaxed">
                Спаррингов с контактом на начальном этапе нет. Всё снаряжение (перчатки, бинты, шлем) тренер подбирает индивидуально.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что это даёт ребёнку</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Дисциплина", text: "Правила зала, уважение к тренеру и партнёрам — работает в учёбе и жизни." },
                  { title: "Уверенность в себе", text: "Ребёнок видит прогресс: то, что не получалось на прошлой неделе, получается сегодня." },
                  { title: "Физическая форма", text: "Координация, гибкость, выносливость, сила. Без скучных повторений." },
                  { title: "Умение постоять за себя", text: "Не агрессия, а понимание своих возможностей и уверенность в спорной ситуации." },
                  { title: "Концентрация", text: "На тренировке нельзя думать о телефоне. Дети учатся сосредотачиваться на задаче." },
                  { title: "Команда", text: "Тренировки в группе учат работать с партнёром, помогать и принимать помощь." },
                ].map((b) => (
                  <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Безопасность на детских тренировках</h2>
              <p className="text-[#888888] leading-relaxed mb-4">
                Главный вопрос родителей — не травмируют ли ребёнка. Ответ: при правильно организованных тренировках тайский бокс не опаснее футбола или борьбы.
              </p>
              <div className="space-y-2">
                {[
                  "Контактные спарринги начинаются только когда тренер считает ребёнка готовым",
                  "Всё снаряжение: шлем, капа, перчатки, защита корпуса — обязательно при работе в парах",
                  "Тренер постоянно контролирует интенсивность и контакт",
                  "Основная работа — по лапам и мешку, не с партнёром",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что взять на первую тренировку</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                На первое занятие ничего специального покупать не нужно. Достаточно:
              </p>
              <div className="space-y-2">
                {[
                  "Удобная спортивная одежда — шорты и футболка",
                  "Чистая обувь или тренировки босиком (по ситуации)",
                  "Бутылка воды",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#888888] text-sm list-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </div>
              <p className="text-[#666] text-sm mt-4">
                Перчатки и бинты на первое занятие клуб предоставит.{" "}
                <Link href="/blog/chto-vzyat-na-trenirovku" className="text-[#c41e3a] hover:underline">Полный список снаряжения →</Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Соревнования — по желанию</h2>
              <p className="text-[#888888] leading-relaxed">
                Никто не заставляет ребёнка участвовать в соревнованиях. Если хочет — тренер готовит, если не хочет — занимается в своём ритме. Оба варианта нормальны. Клуб регулярно вывозит желающих на любительские турниры Московской области.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Вопросы родителей</h2>
              <div className="space-y-3">
                {[
                  { q: "Ребёнок стеснительный — это помешает?", a: "Нет. Многие дети приходят закрытыми и через 1–2 месяца раскрываются. Групповые тренировки помогают социализации." },
                  { q: "Что если ребёнок не захочет продолжать?", a: "Первое занятие бесплатно — можно попробовать без риска. Если не понравится — нет обязательств." },
                  { q: "Как понять, что тренер хороший?", a: "Посмотрите на первой тренировке: как он разговаривает с детьми, терпелив ли, объясняет ли технику доступно. Тренер Никита работает с детьми 10+ лет." },
                  { q: "Можно ли тренироваться, если ребёнок уже занимается другим спортом?", a: "Да. Тайский бокс хорошо сочетается с плаванием, лёгкой атлетикой, футболом. Тренер скорректирует нагрузку." },
                ].map((item) => (
                  <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                    <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/dlya-detey" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс для детей →</Link>
                <Link href="/dlya-podrostkov" className="text-[#c41e3a] text-sm hover:underline">Для подростков →</Link>
                <Link href="/raspisanie-i-tseny" className="text-[#c41e3a] text-sm hover:underline">Расписание и цены →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Первая тренировка — бесплатно</h2>
              <p className="text-[#888888] text-sm mb-6">Приходите с ребёнком познакомиться с залом и тренером. Без обязательств.</p>
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записаться на пробную тренировку
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

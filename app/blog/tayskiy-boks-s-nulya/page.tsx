import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс с нуля: как начать без опыта — Клуб «Медведь», Щёлково",
  description: "Физическая подготовка не нужна. Что происходит на первых тренировках, что изменится через месяц и как записаться в клуб «Медведь» в Щёлково.",
  keywords: ["тайский бокс с нуля", "начать тайский бокс", "тайский бокс для начинающих Щёлково", "муай тай новичок"],
  alternates: {
    canonical: "https://medved-club.ru/blog/tayskiy-boks-s-nulya",
  },
}

export default function ArticleNulyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Тайский бокс с нуля", href: "/blog/tayskiy-boks-s-nulya" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">
              ← Блог
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Новичкам</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">7 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Тайский бокс с нуля: как начать, если нет никакого опыта
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              «Я не в форме», «я никогда не занимался боевыми искусствами», «боюсь выглядеть глупо» — типичные страхи новичков. Разбираем, почему они не обоснованы и что на самом деле ждёт вас на первой тренировке.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Нужна ли физическая подготовка</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Нет. Тайский бокс — один из самых доступных для старта видов единоборств. Тренер видит ваш уровень с первых минут и выстраивает нагрузку под вас. Вы не будете стоять в сторонке и ждать, пока «подготовитесь».
              </p>
              <p className="text-[#888888] leading-relaxed">
                Первые месяцы — это и есть физическая подготовка. Вы будете становиться сильнее и выносливее прямо на тренировках, не до них.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что будет на первой тренировке</h2>
              <div className="space-y-3">
                {[
                  { step: "01", text: "Знакомство с тренером и залом — 5 минут" },
                  { step: "02", text: "Разминка: бег, суставная гимнастика, растяжка" },
                  { step: "03", text: "Базовая стойка и передвижение" },
                  { step: "04", text: "Первые удары руками — по воздуху и по лапам" },
                  { step: "05", text: "Растяжка и заминка" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="text-[#c41e3a] font-black text-sm w-6 flex-shrink-0">{item.step}</span>
                    <span className="text-[#888888] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#666] text-sm mt-4">Никаких спаррингов на первой тренировке не будет. Контакт с партнёром появляется постепенно, когда вы сами будете готовы.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что изучают в первые три месяца</h2>
              <p className="text-[#888888] leading-relaxed mb-4">
                Тайский бокс строится на восьми «оружиях»: кулаки, локти, колени, ноги. Новичок начинает с базы.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { month: "1-й месяц", items: ["Стойка и передвижение", "Прямые удары руками (джеб, кросс)", "Боковой и апперкот", "Базовая защита"] },
                  { month: "2-й месяц", items: ["Удары ногами (лоу-кик, тик)", "Работа в парах на лапах", "Уклоны и нырки", "Базовый клинч"] },
                  { month: "3-й месяц", items: ["Комбинации рук и ног", "Удары коленями", "Лёгкий спарринг в снаряжении", "Физическая подготовка под соревнования (по желанию)"] },
                ].map((m) => (
                  <div key={m.month} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-[#c41e3a] font-bold text-sm mb-3">{m.month}</p>
                    <ul className="space-y-1">
                      {m.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-[#777] text-sm">
                          <span className="w-1 h-1 rounded-full bg-[#c41e3a] flex-shrink-0 mt-2" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что изменится через месяц</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "В теле", text: "Уходит одышка при нагрузке. Плечи, ноги и пресс начинают работать по-другому. Первые видимые изменения в фигуре." },
                  { title: "В голове", text: "Стресс от работы разряжается в зале. Появляется режим — три раза в неделю вы знаете, куда идти." },
                  { title: "В технике", text: "Прямой удар, удар снизу, боковой. Лоу-кик и тик. Стойка становится естественной." },
                  { title: "В уверенности", text: "Вы видите прогресс. То, что на первой тренировке казалось странным, к концу месяца выходит автоматически." },
                ].map((b) => (
                  <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Типичные страхи новичков</h2>
              <div className="space-y-3">
                {[
                  { fear: "«Меня будут бить»", answer: "Не будут. На начальном этапе работа идёт с лапами и мешком. Спарринги — по желанию и в защитном снаряжении." },
                  { fear: "«Я хуже всех»", answer: "Каждый начинал с нуля. В зале нет соревнования между учениками — каждый работает на свой результат." },
                  { fear: "«Я слишком старый/толстый/слабый»", answer: "В клубе «Медведь» занимаются люди разного возраста и физической формы. Тренер адаптирует нагрузку." },
                  { fear: "«Не успею за группой»", answer: "Новички всегда начинают с базы. Тренер следит за каждым индивидуально, никто не «убегает» вперёд." },
                ].map((item) => (
                  <div key={item.fear} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white font-semibold text-sm mb-2">{item.fear}</p>
                    <p className="text-[#666] text-sm leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что взять на первую тренировку</h2>
              <p className="text-[#888888] leading-relaxed mb-3">На первое занятие не нужно ничего покупать специально:</p>
              <div className="space-y-2">
                {["Спортивные шорты и футболка", "Воду — 0,5–1 л", "Хорошее настроение"].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-[#555] text-sm mt-3">
                <Link href="/blog/chto-vzyat-na-trenirovku" className="text-[#c41e3a] hover:underline">Полный список снаряжения для тайского бокса →</Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Как устроены тренировки в клубе «Медведь»</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Групповые тренировки проходят пн/ср/пт в 20:00 для взрослых от 14 лет. Абонемент — 6 000 ₽/месяц (12 занятий). Если хотите прогрессировать быстрее — есть{" "}
                <Link href="/individualnye-trenirovki" className="text-[#c41e3a] hover:underline">персональные тренировки</Link> и{" "}
                <Link href="/split-trenirovki" className="text-[#c41e3a] hover:underline">сплит на двоих</Link>.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Первое занятие всегда бесплатно.{" "}
                <Link href="/raspisanie-i-tseny" className="text-[#c41e3a] hover:underline">Посмотреть расписание и цены →</Link>
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/dlya-novichkov" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс для новичков →</Link>
                <Link href="/probnaya-trenirovka" className="text-[#c41e3a] text-sm hover:underline">Пробная тренировка →</Link>
                <Link href="/blog/chto-vzyat-na-trenirovku" className="text-[#c41e3a] text-sm hover:underline">Что взять на тренировку →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Первая тренировка — бесплатно</h2>
              <p className="text-[#888888] text-sm mb-6">Приходите и попробуйте. Никакой предоплаты и обязательств.</p>
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записаться на тренировку
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

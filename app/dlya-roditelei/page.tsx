import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для детей — родителям | Клуб «Медведь», Щёлково",
  description: "Всё что нужно знать родителям о тренировках по тайскому боксу в клубе «Медведь». Безопасность, возраст, расписание, что взять с собой.",
  alternates: {
    canonical: "https://medved-club.ru/dlya-roditelei",
  },
}

const faq = [
  {
    q: "С какого возраста можно приводить ребёнка?",
    a: "С 6 лет. Тренировки для детей адаптированы по нагрузке и содержанию — упор на координацию, ловкость, игровые элементы. Никакого жёсткого контакта на начальном этапе.",
  },
  {
    q: "Это безопасно? Ребёнок не получит травму?",
    a: "Тренировки проходят под постоянным контролем тренера. Дети работают в парах с защитой. Спарринги с полным контактом — только для подготовленных спортсменов по желанию. Для новичков всё в безопасном режиме.",
  },
  {
    q: "Нужна ли физическая подготовка?",
    a: "Нет. Приходить можно с нуля. Тренер подберёт нагрузку под уровень ребёнка и будет постепенно её повышать.",
  },
  {
    q: "Что взять на первую тренировку?",
    a: "Спортивную форму (шорты, футболку) и кроссовки. Перчатки и бинты пока не нужны — тренер скажет, что докупить после первых занятий.",
  },
  {
    q: "Как часто нужно тренироваться?",
    a: "Оптимально 3 раза в неделю — пн / ср / пт. Можно начать с 2 раз. Первые результаты заметны уже через месяц регулярных занятий.",
  },
  {
    q: "Можно ли присутствовать на тренировке?",
    a: "Да, родители могут наблюдать. Мы рады, когда родители видят как занимаются дети.",
  },
  {
    q: "Будет ли ребёнок участвовать в соревнованиях?",
    a: "Только по желанию. Соревнования — не обязательная часть. Многие дети тренируются ради здоровья, формы и уверенности, без спортивных амбиций. Для тех кто хочет выступать — тренер готовит отдельно.",
  },
  {
    q: "Сколько стоит абонемент?",
    a: "Групповые тренировки — 6 000 ₽ в месяц (абонемент). Первая тренировка — ознакомительная, бесплатно. Уточнить детали можно по телефону или в мессенджерах.",
  },
]

const benefits = [
  { title: "Дисциплина", text: "Спорт прививает режим, уважение к тренеру и партнёрам, умение доводить дело до конца." },
  { title: "Физическое развитие", text: "Координация, гибкость, выносливость, сила — всестороннее физическое развитие." },
  { title: "Уверенность", text: "Дети, занимающиеся спортом, чувствуют себя увереннее в школе и в общении." },
  { title: "Самооборона", text: "Базовые навыки — это реальная защита. Ребёнок знает, как постоять за себя." },
]

export default function DlyaRoditeleiPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Тайский бокс — родителям", href: "/dlya-roditelei" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Родителям</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Всё что важно знать<br />родителям
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-2xl">
              Отвечаем на главные вопросы родителей о тренировках по тайскому боксу в клубе «Медведь».
            </p>
            <Link
              href="/#lead-form"
              className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
            >
              Записать ребёнка на тренировку
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Что даёт тайский бокс ребёнку</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm">{b.title}</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Частые вопросы</p>
            <div className="space-y-3">
              {faq.map((item) => (
                <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First training free */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-2xl p-8 text-center">
              <p className="text-xs text-[#c41e3a] font-bold uppercase tracking-widest mb-3">Для новых учеников</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Первая тренировка —{" "}
                <span className="text-[#c41e3a]">бесплатно</span>
              </h2>
              <p className="text-[#888888] mb-8 max-w-md mx-auto">
                Приходите познакомиться с клубом, тренером и форматом занятий. Без обязательств.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/#lead-form"
                  className="px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
                >
                  Записаться на тренировку
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-[#111111] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200"
                >
                  На главную
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

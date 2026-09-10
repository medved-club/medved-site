import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Блог — Клуб тайского бокса «Медведь», Щёлково",
  description: "Статьи о тайском боксе: для новичков, детей, взрослых и родителей. Клуб «Медведь», Щёлково.",
  alternates: {
    canonical: "https://medved-club.ru/blog",
  },
}

const articles = [
  {
    slug: "tayskiy-boks-dlya-detey",
    title: "Тайский бокс для детей: с какого возраста и почему это полезно",
    description: "С 6 лет можно приходить с нуля. Разбираем что дают детские тренировки, насколько это безопасно и чего ждать от первых занятий.",
    tag: "Детям",
    readTime: "4 мин",
  },
  {
    slug: "tayskiy-boks-s-nulya",
    title: "Тайский бокс с нуля: как начать, если нет никакого опыта",
    description: "Физическая подготовка не нужна. Разбираем чего ждать от первых тренировок и что изменится через месяц.",
    tag: "Новичкам",
    readTime: "4 мин",
  },
  {
    slug: "tayskiy-boks-dlya-zhenshchin",
    title: "Тайский бокс для женщин: форма, уверенность, самооборона",
    description: "Почему тайский бокс эффективнее обычного фитнеса и что реально даёт три месяца тренировок.",
    tag: "Женщинам",
    readTime: "3 мин",
  },
  {
    slug: "tayskiy-boks-dlya-podrostkov",
    title: "Тайский бокс для подростков: почему это лучший выбор",
    description: "Дисциплина, уверенность, выброс энергии. Почему тайский бокс — одна из лучших секций для подростков 12–17 лет.",
    tag: "Подросткам",
    readTime: "4 мин",
  },
  {
    slug: "tayskiy-boks-dlya-pohudeniya",
    title: "Тайский бокс для похудения: сколько калорий и что изменится",
    description: "600–900 ккал за тренировку. Что меняется в теле за 3 месяца и почему это лучше обычного кардио.",
    tag: "Фитнес",
    readTime: "4 мин",
  },
  {
    slug: "sbory-po-tajskomu-boksu",
    title: "Спортивные сборы по тайскому боксу: что это и зачем ехать",
    description: "Азовское море и Таиланд. За 7–14 дней — прогресс двух-трёх месяцев обычных тренировок.",
    tag: "Сборы",
    readTime: "4 мин",
  },
  {
    slug: "kak-podgotovitsya-k-sorevnovaniyam",
    title: "Как подготовиться к первым соревнованиям по тайскому боксу",
    description: "Когда идти, как готовиться и чего ждать. Советы тренера клуба «Медведь».",
    tag: "Соревнования",
    readTime: "4 мин",
  },
  {
    slug: "tayskiy-boks-vs-boks",
    title: "Чем тайский бокс отличается от обычного бокса",
    description: "8 оружий вместо двух, клинч, работа ногами и коленями — разбираем ключевые отличия.",
    tag: "О спорте",
    readTime: "3 мин",
  },
  {
    slug: "chto-vzyat-na-trenirovku",
    title: "Что взять на первую тренировку по тайскому боксу",
    description: "Полный список снаряжения: что нужно сразу, что купить потом и на чём не экономить.",
    tag: "Новичкам",
    readTime: "3 мин",
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Блог</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Статьи о тайском боксе</h1>
            <p className="text-[#888888] text-base">Полезные материалы для новичков, родителей и тех, кто хочет узнать больше о муай-тай.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(196,30,58,0.1)]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">{article.tag}</span>
                    <span className="text-[#333] text-xs">·</span>
                    <span className="text-[#444] text-xs">{article.readTime}</span>
                  </div>
                  <h2 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-[#e0e0e0] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[#666666] text-sm leading-relaxed">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

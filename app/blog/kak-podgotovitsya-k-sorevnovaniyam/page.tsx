import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Как подготовиться к первым соревнованиям по тайскому боксу — Клуб «Медведь»",
  description: "Первые соревнования по тайскому боксу: когда идти, как готовиться, чего ожидать. Советы тренера клуба «Медведь» в Щёлково.",
  keywords: ["соревнования тайский бокс новичок", "первые соревнования муай тай", "подготовка к соревнованиям тайский бокс"],
  alternates: {
    canonical: "https://medved-club.ru/blog/kak-podgotovitsya-k-sorevnovaniyam",
  },
}

export default function ArticleSorevPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Подготовка к соревнованиям", href: "/blog/kak-podgotovitsya-k-sorevnovaniyam" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">← Блог</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Соревнования</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">7 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Как подготовиться к первым соревнованиям по тайскому боксу
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Первые соревнования — это волнение, адреналин и огромный опыт. Разбираем когда они вообще возможны, как готовиться и чего ждать.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Когда можно идти на соревнования</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Минимум — 6 месяцев регулярных тренировок. Тренер оценивает: базовую технику, физическую готовность, психологическую устойчивость. Если всё есть — можно выходить.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Никто не отправит вас на ринг раньше времени. Задача тренера — не медаль любой ценой, а правильный старт.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Признаки готовности к соревнованиям</h2>
              <div className="space-y-2">
                {[
                  "Базовая техника поставлена — стойка, удары руками и ногами, защита",
                  "Выносливость позволяет вести бой 3 раунда по 2 минуты",
                  "Есть опыт спарринговой работы в зале",
                  "Психологически готовы к выходу на ринг — не паника, а рабочее волнение",
                  "Тренер даёт добро — это главный критерий",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Как проходит подготовка</h2>
              <div className="space-y-3">
                {[
                  { period: "За 6–8 недель", text: "Тренер переводит на специальный план: больше спаррингов, работа на конкретные слабые места, отработка связок." },
                  { period: "За 2 недели", text: "Снижение объёма, сохранение интенсивности. Вес под контролем. Никаких новых элементов — только отшлифовка того, что есть." },
                  { period: "Неделя до", text: "Лёгкие тренировки. Максимальный сон. Питание без экспериментов." },
                  { period: "День перед", text: "Растяжка, лёгкая разминка, ранний сон." },
                  { period: "Утро соревнований", text: "Лёгкий завтрак за 2–3 часа. Разминка за 30–40 минут до выхода на ринг." },
                ].map((m) => (
                  <div key={m.period} className="flex gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <span className="text-[#c41e3a] font-bold text-xs w-24 flex-shrink-0 mt-0.5">{m.period}</span>
                    <p className="text-[#888888] text-sm leading-relaxed">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Весовые категории</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                В тайском боксе бойцов подбирают по весовой категории и опыту. На любительских турнирах новичков ставят только с новичками. За несколько недель до турнира тренер сообщает вашу категорию и подбирает соперника.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Не нужно резко сгонять вес ради нижней категории — особенно на первых соревнованиях. Это стресс для тела и психики.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что взять с собой на турнир</h2>
              <div className="grid grid-cols-2 gap-2">
                {["Боксёрские перчатки", "Бинты", "Шлем", "Капа", "Форма клуба", "Бандаж (паховая защита)", "Щитки", "Вода и перекус", "Документы"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#888888]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Победа — не главное на первом турнире</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Первые соревнования — это опыт выхода на ринг, преодоление страха и понимание своего уровня. Результат в протоколе не так важен, как то, что вы вообще вышли и сделали это.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Большинство спортсменов после первого турнира хотят ещё — независимо от результата. Адреналин и ощущение преодоления себя не сравнимы ни с чем.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/competitions" className="text-[#c41e3a] text-sm hover:underline">Результаты клуба →</Link>
                <Link href="/dlya-sportsmenov" className="text-[#c41e3a] text-sm hover:underline">Тренировки для спортсменов →</Link>
                <Link href="/blog/sbory-po-tajskomu-boksu" className="text-[#c41e3a] text-sm hover:underline">Сборы по тайскому боксу →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Хотите соревноваться?</h2>
              <p className="text-[#888888] text-sm mb-6">Начните тренироваться в клубе «Медведь» — тренер сам скажет, когда вы готовы.</p>
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

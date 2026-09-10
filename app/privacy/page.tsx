import type { Metadata } from "next"
import Link from "next/link"
import { contacts } from "@/app/data/contacts"

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Клуб тайского бокса «Медведь»",
  description: "Политика конфиденциальности клуба тайского бокса «Медведь» в Щёлково.",
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-lg font-black text-white tracking-wider uppercase">Медведь</span>
            <span className="text-[10px] text-[#555555] uppercase tracking-[0.2em]">клуб тайского бокса</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-[#888888] hover:text-white transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            На главную
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-8">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-[#999999]">
          <p>
            Настоящая Политика конфиденциальности описывает порядок обработки персональных данных пользователей сайта клуба тайского бокса «Медведь».
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">Какие данные мы собираем</h2>
            <p>Сайт может собирать следующие данные:</p>
            <ul className="mt-3 space-y-2 pl-4">
              {["имя", "телефон", "возраст занимающегося", "выбранный формат тренировки", "комментарий пользователя"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#c41e3a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">Как используются данные</h2>
            <p>
              Данные используются только для связи с пользователем, подбора формата тренировки и подтверждения записи.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">Согласие</h2>
            <p>
              Перед отправкой формы пользователь подтверждает согласие на обработку персональных данных.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">Ваши права</h2>
            <p>
              Пользователь может запросить удаление или уточнение своих данных, связавшись с клубом по контактам, указанным на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">Контакты</h2>
            <p>По вопросам обработки персональных данных обращайтесь:</p>
            <div className="mt-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
              <p className="text-white font-semibold">{contacts.clubName}</p>
              <p className="mt-1">{contacts.address}</p>
              <a href={contacts.phoneHref} className="block mt-1 text-[#c41e3a] hover:underline">
                {contacts.phone}
              </a>
            </div>
          </section>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#c41e3a] hover:bg-[#e02244] text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Вернуться на главную
          </Link>
        </div>
      </main>
    </div>
  )
}

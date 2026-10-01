import Link from "next/link"

const cards = [
  { href: "/admin/prices", title: "Цены", desc: "Абонемент, разовая, персональные, сплит" },
  { href: "/admin/camps", title: "Сборы", desc: "Даты, описание и условия выездных сборов" },
  { href: "/admin/gallery", title: "Фото", desc: "Добавить или удалить фото в галерее" },
  { href: "/admin/info-blocks", title: "Объявления", desc: "Набор в группы и другие новости на главной" },
  { href: "/admin/faq", title: "FAQ", desc: "Частые вопросы и ответы" },
  { href: "/admin/reviews", title: "Отзывы", desc: "Добавить, изменить или скрыть отзыв" },
  { href: "/admin/password", title: "Пароль", desc: "Сменить свой пароль входа" },
]

export default function AdminHomePage() {
  return (
    <div>
      <h1 className="text-2xl font-black text-white mb-2">Админка сайта «Медведь»</h1>
      <p className="text-[#888888] mb-8">Изменения появляются на сайте сразу после сохранения.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/50 rounded-xl p-6 transition-all duration-200"
          >
            <h2 className="text-white font-bold text-lg mb-1">{c.title}</h2>
            <p className="text-[#888888] text-sm">{c.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

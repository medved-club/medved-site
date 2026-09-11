import Link from "next/link"
import { contacts } from "@/app/data/contacts"
import { cities } from "@/app/data/cities"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-xl font-black text-white tracking-wider uppercase">Медведь</span>
              <span className="text-xs text-[#555555] uppercase tracking-[0.2em]">клуб тайского бокса</span>
            </div>
            <p className="text-[#555555] text-sm leading-relaxed max-w-xs">
              Тренировки по тайскому боксу для детей, подростков и взрослых в Щёлково.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-[#444444] uppercase tracking-widest mb-4">Разделы</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/#about", label: "О клубе" },
                { href: "/#training-types", label: "Тренировки" },
                { href: "/#schedule", label: "Расписание" },
                { href: "/sboryi", label: "Сборы" },
                { href: "/competitions", label: "Соревнования" },
                { href: "/dlya-roditelei", label: "Родителям" },
                { href: "/#reviews", label: "Отзывы" },
                { href: "/#contacts", label: "Контакты" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-[#666666] hover:text-[#cccccc] text-sm transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs font-semibold text-[#444444] uppercase tracking-widest mb-4">Контакты</p>
            <div className="space-y-3">
              <p className="text-[#777777] text-sm">{contacts.city}</p>
              <p className="text-[#777777] text-sm">{contacts.address}</p>
              <a href={contacts.phoneHref} className="block text-[#cccccc] hover:text-[#c41e3a] font-semibold text-sm transition-colors duration-200">
                {contacts.phone}
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-[#444444] uppercase tracking-widest mb-4">Мы в сетях</p>
            <div className="flex flex-col gap-3">
              <a
                href={contacts.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#777777] hover:text-white text-sm transition-colors duration-200"
              >
                <span className="w-7 h-7 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                  <VkIcon />
                </span>
                ВКонтакте
              </a>
              <a
                href={contacts.yandexMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#777777] hover:text-white text-sm transition-colors duration-200"
              >
                <span className="w-7 h-7 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                  <MapPinIcon />
                </span>
                Яндекс.Карты
              </a>
            </div>
          </div>
        </div>

        {/* Cities */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a]">
          <p className="text-xs font-semibold text-[#444444] uppercase tracking-widest mb-4">Принимаем учеников из</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="text-[#666666] hover:text-[#cccccc] text-sm transition-colors duration-200"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444444] text-xs">
            © {year} {contacts.clubName}
          </p>
          <Link
            href="/privacy"
            className="text-[#444444] hover:text-[#888888] text-xs transition-colors duration-200"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}

function VkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

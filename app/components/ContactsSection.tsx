import { contacts } from "@/app/data/contacts"
import { SectionHeader } from "./TrainingTypesSection"

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Контакты"
          title="Контакты"
          description="Приходите на тренировку или свяжитесь с нами любым удобным способом"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#c41e3a]/10 border border-[#c41e3a]/20 flex items-center justify-center flex-shrink-0">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs text-[#555555] uppercase tracking-widest mb-1">Адрес</p>
                  <p className="text-white font-semibold">{contacts.clubName}</p>
                  <p className="text-[#888888] text-sm mt-0.5">{contacts.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <a
              href={contacts.phoneHref}
              className="block bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl p-5 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#c41e3a]/10 border border-[#c41e3a]/20 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs text-[#555555] uppercase tracking-widest mb-1">Телефон</p>
                  <span className="text-white font-semibold text-lg hover:text-[#c41e3a] transition-colors duration-200">
                    {contacts.phone}
                  </span>
                </div>
              </div>
            </a>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] hover:bg-[#229ED9] border border-[#2a2a2a] hover:border-[#229ED9] text-white text-sm font-semibold rounded-xl transition-all duration-200"
              >
                <TelegramIcon />
                Telegram
              </a>
              <a
                href={contacts.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] hover:bg-[#4a76a8] border border-[#2a2a2a] hover:border-[#4a76a8] text-white text-sm font-semibold rounded-xl transition-all duration-200"
              >
                <VkIcon />
                ВКонтакте
              </a>
            </div>

            {/* Map buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={contacts.yandexMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-[#cccccc] hover:text-white text-sm rounded-xl transition-all duration-200"
              >
                <MapIcon />
                Открыть карту
              </a>
              <a
                href={`https://yandex.ru/maps/?rtext=~${encodeURIComponent(contacts.address)}&rtt=auto`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-[#cccccc] hover:text-white text-sm rounded-xl transition-all duration-200"
              >
                <RouteIcon />
                Маршрут
              </a>
            </div>
          </div>

          {/* Yandex Maps embed */}
          <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden min-h-[400px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ol=biz&oid=221230345098&z=16&l=map&lang=ru_RU"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: "none", display: "block" }}
              allowFullScreen
              title="Клуб тайского бокса Медведь на карте"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.545 13.986l-2.97-.924c-.646-.203-.658-.646.136-.953l11.57-4.461c.537-.194 1.007.131.613 1.573z" />
    </svg>
  )
}

function VkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z" />
    </svg>
  )
}

function MapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )
}

function RouteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}

function MapBigIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

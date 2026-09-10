import { contacts } from "@/app/data/contacts"

const badges = [
  "Дети и взрослые",
  "С нуля и с опытом",
  "Группы / персонально / сплит",
  "Спортивные сборы",
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(196,30,58,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,0,0,0.1),_transparent_60%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative elements — скрыты на мобильных для экономии GPU */}
      <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 bg-[#c41e3a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 left-0 w-64 h-64 bg-[#8b0000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333333] text-xs text-[#999999] mb-6">
            <LocationIcon />
            <span>Щёлково, Московская область</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-4">
            Клуб тайского бокса{" "}
            <span className="text-[#c41e3a]">«Медведь»</span>{" "}
            в Щёлково
          </h1>

          {/* Slogan */}
          <p className="text-sm sm:text-base lg:text-lg text-[#c41e3a] font-semibold tracking-widest uppercase mb-6">
            Сила. Дисциплина. Техника. Команда.
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#aaaaaa] leading-relaxed mb-8 max-w-2xl">
            Групповые, персональные и сплит-тренировки по тайскому боксу для детей, подростков и взрослых. Можно начать с нуля или развиваться как спортсмен. Пол и уровень физической подготовки не имеют значения.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-10">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333333] text-xs sm:text-sm text-[#cccccc]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="#lead-form"
              className="px-6 py-3.5 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.5)] text-sm sm:text-base text-center"
            >
              Записаться на тренировку
            </a>
            <a
              href="#camps"
              className="px-6 py-3.5 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.5)] text-sm sm:text-base text-center"
            >
              Записаться на сборы
            </a>
            <a
              href="#schedule"
              className="px-6 py-3.5 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.5)] text-sm sm:text-base text-center"
            >
              Посмотреть расписание
            </a>
          </div>

          {/* Contacts strip */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[#222222]">
            <div className="flex items-center gap-2 text-[#888888] text-sm">
              <LocationIcon />
              <span>{contacts.address}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#333333] self-center" />
            <a
              href={contacts.phoneHref}
              className="flex items-center gap-2 text-[#cccccc] hover:text-[#c41e3a] text-sm font-semibold transition-colors duration-200"
            >
              <PhoneIcon />
              {contacts.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-xs text-[#666666] uppercase tracking-widest">Прокрутить</span>
        <ChevronDownIcon />
      </div>
    </section>
  )
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

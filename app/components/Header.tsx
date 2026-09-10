"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { contacts } from "@/app/data/contacts"


const navLinks = [
  { label: "Главная", href: "/#hero" },
  { label: "Тренер", href: "/#trainers" },
  { label: "Галерея", href: "/#gallery" },
  { label: "Сборы", href: "/#camps" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "Контакты", href: "/#contacts" },
  { label: "Пробная тренировка", href: "/probnaya-trenirovka" },
  { label: "Расписание и цены", href: "/raspisanie-i-tseny" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false)
    if (!href.includes("#")) return
    const hash = href.startsWith("/") ? href.slice(1) : href
    if (pathname === "/") {
      e.preventDefault()
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleEnroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsMenuOpen(false)
    try { (window as any).ym(109565621, "reachGoal", "enroll_click") } catch {}
    if (pathname === "/") {
      const el = document.querySelector("#lead-form")
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      window.location.href = "/#lead-form"
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/#hero")}
            className="flex flex-col leading-tight group"
          >
            <span className="text-xl lg:text-2xl font-black text-white tracking-wider uppercase group-hover:text-[#c41e3a] transition-colors duration-200">
              Медведь
            </span>
            <span className="text-[10px] lg:text-xs text-[#999999] uppercase tracking-[0.2em]">
              клуб тайского бокса
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm text-[#cccccc] hover:text-white hover:text-[#c41e3a] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-[#c41e3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={contacts.phoneHref}
              onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
              className="text-sm text-[#cccccc] hover:text-white transition-colors duration-200"
            >
              {contacts.phone}
            </a>
            <button
              onClick={handleEnroll}
              className="px-5 py-2 bg-[#c41e3a] hover:bg-[#e02244] text-white text-sm font-semibold rounded transition-all duration-200 hover:shadow-[0_0_20px_rgba(196,30,58,0.4)]"
            >
              Записаться
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={contacts.phoneHref}
              aria-label="Позвонить"
              onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#c41e3a] text-white transition-colors duration-200"
            >
              <PhoneIcon />
            </a>
            <a
              href={contacts.vk}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ВКонтакте"
              onClick={() => { try { (window as any).ym(109565621, "reachGoal", "vk_click") } catch {} }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-[#0077FF] text-white transition-colors duration-200"
            >
              <VkIcon />
            </a>
            <button
              onClick={handleEnroll}
              className="px-3 py-1.5 bg-[#c41e3a] hover:bg-[#e02244] text-white text-xs font-semibold rounded transition-colors duration-200"
            >
              Записаться
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#111111]/98 backdrop-blur-md ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-3 text-base text-[#cccccc] hover:text-white hover:bg-[#1a1a1a] rounded transition-colors duration-200 border-b border-[#222222] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={contacts.phoneHref}
              className="flex items-center gap-3 px-3 py-3 text-sm text-[#cccccc] hover:text-white bg-[#1a1a1a] rounded"
            >
              <PhoneIcon />
              {contacts.phone}
            </a>
            <a
              href={contacts.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-3 text-sm text-[#cccccc] hover:text-white bg-[#1a1a1a] rounded"
            >
              <VkIcon />
              ВКонтакте
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function VkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-.562-1.49.408v1.567c0 .295-.094.467-.818.467-2.63 0-5.054-1.608-6.897-4.484-2.802-4.19-3.556-7.29-3.556-7.965 0-.393.16-.683.665-.683h1.765c.495 0 .68.203.87.68.97 2.8 2.594 5.25 3.264 5.25.252 0 .368-.116.368-.75V7.61c-.08-1.344-.787-1.46-.787-1.94 0-.234.19-.467.496-.467h2.773c.414 0 .562.22.562.68v3.649c0 .41.184.562.3.562.253 0 .46-.152.92-.612 1.42-1.59 2.434-4.037 2.434-4.037.134-.295.368-.57.863-.57h1.765c.527 0 .645.271.527.68-.22 1.019-2.36 4.04-2.36 4.04-.185.302-.253.437 0 .772.184.252.787.772 1.19 1.236.74.855 1.306 1.574 1.46 2.073.137.487-.128.735-.64.735z"/>
    </svg>
  )
}

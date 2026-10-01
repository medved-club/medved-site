"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const links = [
  { href: "/admin", label: "Главная", exact: true },
  { href: "/admin/prices", label: "Цены" },
  { href: "/admin/camps", label: "Сборы" },
  { href: "/admin/gallery", label: "Фото" },
  { href: "/admin/info-blocks", label: "Объявления" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/reviews", label: "Отзывы" },
  { href: "/admin/password", label: "Пароль" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === "/admin/login") return <>{children}</>

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <header className="border-b border-[#2a2a2a] bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <nav className="flex gap-1 flex-wrap">
            {links.map((l) => {
              const active = l.exact ? pathname === l.href : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    active ? "bg-[#c41e3a] text-white" : "text-[#888888] hover:text-white hover:bg-[#1a1a1a]"
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-[#888888] hover:text-white hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            Выйти
          </button>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">{children}</main>
    </div>
  )
}

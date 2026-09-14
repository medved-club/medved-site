"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SectionHeader } from "./TrainingTypesSection"
import { contacts } from "@/app/data/contacts"

interface FormData {
  name: string
  phone: string
  consent: boolean
  honeypot: string
}

interface FormErrors {
  name?: string
  phone?: string
  consent?: string
}

const initialData: FormData = {
  name: "",
  phone: "",
  consent: false,
  honeypot: "",
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "")
  if (!digits) return ""

  let normalized = digits
  if (normalized.startsWith("8")) {
    normalized = "7" + normalized.slice(1)
  }
  if (!normalized.startsWith("7")) {
    normalized = "7" + normalized
  }

  const d = normalized.slice(1)
  let result = "+7"
  if (d.length > 0) result += " (" + d.slice(0, 3)
  if (d.length >= 3) result += ") " + d.slice(3, 6)
  if (d.length >= 6) result += "-" + d.slice(6, 8)
  if (d.length >= 8) result += "-" + d.slice(8, 10)
  return result
}

function validatePhone(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return digits.length === 11
}

export default function LeadFormSection() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const lastSubmitRef = useRef<number>(0)

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!formData.name.trim()) e.name = "Введите ваше имя"
    if (!formData.phone.trim()) {
      e.phone = "Введите телефон"
    } else if (!validatePhone(formData.phone)) {
      e.phone = "Введите корректный номер телефона"
    }
    if (!formData.consent) e.consent = "Необходимо согласие на обработку данных"
    return e
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
  }

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }))
      }
    },
    [errors]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.honeypot) return

    const now = Date.now()
    if (now - lastSubmitRef.current < 30000) {
      alert("Пожалуйста, подождите 30 секунд перед повторной отправкой.")
      return
    }

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    lastSubmitRef.current = now

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
        }),
      })

      if (!res.ok) throw new Error("submit failed")

      setFormData(initialData)
      try { (window as any).ym(109565621, "reachGoal", "form_training") } catch {}
      router.push("/thanks")
    } catch {
      alert("Произошла ошибка. Пожалуйста, позвоните нам или напишите в VK.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 bg-[#1a1a1a] border ${
      hasError ? "border-[#c41e3a]" : "border-[#2a2a2a] focus:border-[#c41e3a]/60"
    } text-white text-sm rounded-lg outline-none transition-colors duration-200 placeholder:text-[#444444]`

  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <SectionHeader
              label="Запись"
              title="Записаться на тренировку"
            />
            <p className="mt-4 text-[#888888] text-base leading-relaxed">
              Оставьте имя и телефон — перезвоним и подберём группу, формат тренировки и удобное время. Или позвоните сами прямо сейчас.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">📞</span>
                <p className="text-[#cccccc] text-sm">Перезвоним в течение нескольких часов</p>
              </div>
              <div className="flex items-center gap-3 bg-[#c41e3a]/10 border border-[#c41e3a]/30 rounded-xl px-4 py-3">
                <span className="text-xl flex-shrink-0">🎁</span>
                <p className="text-white text-sm font-semibold">
                  Первая групповая тренировка — ознакомительная{" "}
                  <span className="text-[#c41e3a] font-black uppercase tracking-wide">бесплатно</span>
                  <span className="block text-[#888] text-xs font-normal normal-case mt-0.5">Персональные и сплит-тренировки — платные с первого занятия</span>
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 lg:p-8">
            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex={-1}
                aria-hidden="true"
                className="absolute opacity-0 h-0 w-0 pointer-events-none"
                autoComplete="off"
              />

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                    Имя <span className="text-[#c41e3a]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    required
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#c41e3a]">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                    Телефон <span className="text-[#c41e3a]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className={inputClass(!!errors.phone)}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-[#c41e3a]">{errors.phone}</p>}
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex-shrink-0 mt-0.5">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="sr-only peer"
                      />
                      <div className={`w-4 h-4 rounded border ${
                        errors.consent ? "border-[#c41e3a]" : "border-[#333333]"
                      } bg-[#111111] peer-checked:bg-[#c41e3a] peer-checked:border-[#c41e3a] transition-colors duration-200 flex items-center justify-center`}>
                        {formData.consent && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#777777] leading-relaxed">
                      Я согласен/согласна на обработку персональных данных и принимаю{" "}
                      <Link href="/privacy" className="text-[#c41e3a] hover:underline" target="_blank">
                        Политику конфиденциальности
                      </Link>
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-[#c41e3a]">{errors.consent}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#c41e3a] hover:bg-[#e02244] disabled:bg-[#444444] text-white font-bold rounded-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.5)] disabled:cursor-not-allowed text-sm tracking-wide"
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 py-1">
                  <div className="flex-1 h-px bg-[#2a2a2a]" />
                  <span className="text-[#555555] text-xs uppercase tracking-wider">или</span>
                  <div className="flex-1 h-px bg-[#2a2a2a]" />
                </div>

                {/* Call button */}
                <a
                  href={contacts.phoneHref}
                  onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#111111] hover:bg-[#1e1e1e] border border-[#333333] hover:border-[#c41e3a]/50 text-white font-bold rounded-lg transition-all duration-200 text-sm tracking-wide"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Позвонить: {contacts.phone}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

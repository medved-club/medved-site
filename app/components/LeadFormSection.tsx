"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SectionHeader } from "./TrainingTypesSection"

interface FormData {
  name: string
  phone: string
  age: string
  who: string
  trainingFormat: string
  preferredTime: string
  comment: string
  consent: boolean
  honeypot: string
}

interface FormErrors {
  name?: string
  phone?: string
  trainingFormat?: string
  consent?: string
}

const initialData: FormData = {
  name: "",
  phone: "",
  age: "",
  who: "",
  trainingFormat: "",
  preferredTime: "",
  comment: "",
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
  const [ageOptions, setAgeOptions] = useState<string[] | null>(null)
  const [participants, setParticipants] = useState<{ name: string; age: string }[]>([])
  const lastSubmitRef = useRef<number>(0)

  const addParticipant = () => {
    if (participants.length < 4) setParticipants((p) => [...p, { name: "", age: "" }])
  }

  const removeParticipant = (i: number) => {
    setParticipants((p) => p.filter((_, idx) => idx !== i))
  }

  const updateParticipant = (i: number, field: "name" | "age", value: string) => {
    setParticipants((p) => p.map((item, idx) => idx === i ? { ...item, [field]: value } : item))
  }

  useEffect(() => {
    const handler = (e: Event) => {
      const { preferredTime, who, ageOptions: opts } = (e as CustomEvent).detail
      setFormData((prev) => ({ ...prev, preferredTime, who, age: "" }))
      setAgeOptions(opts)
    }
    window.addEventListener("schedule-select", handler)
    return () => window.removeEventListener("schedule-select", handler)
  }, [])

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!formData.name.trim()) e.name = "Введите ваше имя"
    if (!formData.phone.trim()) {
      e.phone = "Введите телефон"
    } else if (!validatePhone(formData.phone)) {
      e.phone = "Введите корректный номер телефона"
    }
    if (!formData.trainingFormat) e.trainingFormat = "Выберите формат тренировки"
    if (!formData.consent) e.consent = "Необходимо согласие на обработку данных"
    return e
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
  }

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target
      const checked = (e.target as HTMLInputElement).checked
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
          age: formData.age,
          who: formData.who,
          trainingFormat: formData.trainingFormat,
          preferredTime: formData.preferredTime,
          comment: formData.comment,
          participants: participants.filter((p) => p.name.trim()),
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
              Оставьте заявку, и мы свяжемся с вами, чтобы подобрать группу, формат тренировки и удобное время.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: "📞", text: "Перезвоним в течение нескольких часов" },
                { icon: "🎯", text: "Подберём подходящую группу и формат" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <p className="text-[#cccccc] text-sm">{item.text}</p>
                </div>
              ))}
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

                {/* Age + Who */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="age" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                      Возраст
                    </label>
                    {ageOptions ? (
                      <select
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={inputClass(false)}
                      >
                        <option value="">Выберите</option>
                        {ageOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id="age"
                        name="age"
                        type="text"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder={formData.who === "Взрослый" ? "от 14 лет" : "укажите возраст"}
                        className={inputClass(false)}
                      />
                    )}
                  </div>
                  <div>
                    <label htmlFor="who" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                      Кто будет заниматься
                    </label>
                    <select
                      id="who"
                      name="who"
                      value={formData.who}
                      onChange={(e) => {
                        handleChange(e)
                        setAgeOptions(null)
                        setFormData((prev) => ({ ...prev, age: "" }))
                      }}
                      className={inputClass(false)}
                    >
                      <option value="">Выберите</option>
                      <option value="Ребёнок">Ребёнок (6–8 лет)</option>
                      <option value="Подросток">Подросток (9–13 лет)</option>
                      <option value="Взрослый">Взрослый (14+)</option>
                    </select>
                  </div>
                </div>

                {/* Training format */}
                <div>
                  <label htmlFor="trainingFormat" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                    Формат тренировки <span className="text-[#c41e3a]">*</span>
                  </label>
                  <select
                    id="trainingFormat"
                    name="trainingFormat"
                    value={formData.trainingFormat}
                    onChange={handleChange}
                    required
                    className={inputClass(!!errors.trainingFormat)}
                  >
                    <option value="">Выберите формат</option>
                    <option value="Групповая">Групповая</option>
                    <option value="Персональная">Персональная</option>
                    <option value="Сплит">Сплит</option>
                    <option value="Хочу уточнить">Хочу уточнить</option>
                  </select>
                  {errors.trainingFormat && <p className="mt-1 text-xs text-[#c41e3a]">{errors.trainingFormat}</p>}
                </div>

                {/* Split participants */}
                {formData.trainingFormat === "Сплит" && (
                  <div className="rounded-xl border border-[#c41e3a]/20 bg-[#1e1414] p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">
                        Участники сплита
                      </p>
                      {participants.length < 4 && (
                        <button
                          type="button"
                          onClick={addParticipant}
                          className="flex items-center gap-1.5 text-xs text-[#c41e3a] hover:text-white transition-colors duration-150"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                          Добавить участника
                        </button>
                      )}
                    </div>

                    {participants.length === 0 && (
                      <p className="text-xs text-[#555555]">Нажмите «Добавить участника» чтобы указать партнёров по сплиту</p>
                    )}

                    {participants.map((p, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            value={p.name}
                            onChange={(e) => updateParticipant(i, "name", e.target.value)}
                            placeholder={`Имя участника ${i + 1}`}
                            className={inputClass(false)}
                          />
                          <input
                            type="text"
                            value={p.age}
                            onChange={(e) => updateParticipant(i, "age", e.target.value)}
                            placeholder="Возраст"
                            className={inputClass(false)}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeParticipant(i)}
                          className="mt-3 text-[#444444] hover:text-[#c41e3a] transition-colors duration-150 flex-shrink-0"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Preferred time */}
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                    Удобное время
                  </label>
                  {formData.trainingFormat === "Персональная" || formData.trainingFormat === "Сплит" ? (
                    <input
                      id="preferredTime"
                      name="preferredTime"
                      type="text"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="Укажите удобные дни и время"
                      className={inputClass(false)}
                    />
                  ) : (
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={inputClass(false)}
                    >
                      <option value="">Выберите время</option>
                      <option value="Понедельник 18:00">Понедельник 18:00</option>
                      <option value="Понедельник 19:00">Понедельник 19:00</option>
                      <option value="Понедельник 20:00">Понедельник 20:00</option>
                      <option value="Среда 18:00">Среда 18:00</option>
                      <option value="Среда 19:00">Среда 19:00</option>
                      <option value="Среда 20:00">Среда 20:00</option>
                      <option value="Пятница 18:00">Пятница 18:00</option>
                      <option value="Пятница 19:00">Пятница 19:00</option>
                      <option value="Пятница 20:00">Пятница 20:00</option>
                      <option value="Обсудить индивидуально">Обсудить индивидуально</option>
                    </select>
                  )}
                </div>

                {/* Comment */}
                <div>
                  <label htmlFor="comment" className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                    Комментарий
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Напишите цель, опыт или удобное время"
                    rows={3}
                    className={`${inputClass(false)} resize-none`}
                  />
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

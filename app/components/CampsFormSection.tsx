"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface CampFormData {
  parentName: string
  phone: string
  camp: string
  participantName: string
  participantAge: string
  withFamily: string
  familyCount: string
  comment: string
  consent: boolean
  honeypot: string
}

interface CampFormErrors {
  parentName?: string
  phone?: string
  camp?: string
  consent?: string
}

const initialData: CampFormData = {
  parentName: "",
  phone: "",
  camp: "",
  participantName: "",
  participantAge: "",
  withFamily: "",
  familyCount: "",
  comment: "",
  consent: false,
  honeypot: "",
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "")
  if (!digits) return ""
  let n = digits
  if (n.startsWith("8")) n = "7" + n.slice(1)
  if (!n.startsWith("7")) n = "7" + n
  const d = n.slice(1)
  let r = "+7"
  if (d.length > 0) r += " (" + d.slice(0, 3)
  if (d.length >= 3) r += ") " + d.slice(3, 6)
  if (d.length >= 6) r += "-" + d.slice(6, 8)
  if (d.length >= 8) r += "-" + d.slice(8, 10)
  return r
}

const campOptions = [
  { value: "Азовское море 30 июня — 11 июля (6–13 лет)", label: "Азовское море · 30 июня — 11 июля · 6–13 лет" },
  { value: "Азовское море 11 июля — 22 июля (13+)",      label: "Азовское море · 11 июля — 22 июля · 13+" },
  { value: "Таиланд (март 2027)",                        label: "Таиланд · март 2027" },
]

export default function CampsFormSection({ defaultCamp = "" }: { defaultCamp?: string }) {
  const router = useRouter()
  const [formData, setFormData] = useState<CampFormData>({ ...initialData, camp: defaultCamp })
  const [errors, setErrors] = useState<CampFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const lastSubmitRef = useRef<number>(0)

  const validate = (): CampFormErrors => {
    const e: CampFormErrors = {}
    if (!formData.parentName.trim()) e.parentName = "Введите имя"
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, "").length !== 11) e.phone = "Введите корректный телефон"
    if (!formData.camp) e.camp = "Выберите сборы"
    if (!formData.consent) e.consent = "Необходимо согласие"
    return e
  }

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
      if (errors[name as keyof CampFormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    },
    [errors]
  )

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.honeypot) return
    const now = Date.now()
    if (now - lastSubmitRef.current < 30000) {
      alert("Подождите 30 секунд перед повторной отправкой.")
      return
    }
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
    setIsSubmitting(true)
    lastSubmitRef.current = now
    try {
      const res = await fetch("/api/submit-camp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error()
      setFormData(initialData)
      try { (window as any).ym(109565621, "reachGoal", "form_camps") } catch {}
      router.push("/thanks")
    } catch {
      alert("Произошла ошибка. Позвоните нам или напишите в VK.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inp = (err: boolean) =>
    `w-full px-4 py-3 bg-[#1a1a1a] border ${err ? "border-[#c41e3a]" : "border-[#2a2a2a] focus:border-[#c41e3a]/60"} text-white text-sm rounded-lg outline-none transition-colors duration-200 placeholder:text-[#444444]`

  return (
    <section id="camps-form" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left */}
          <div>
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Сборы</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
              Записаться на <span className="text-[#c41e3a]">спортивные сборы</span>
            </h2>
            <p className="text-[#888888] text-base leading-relaxed mb-8">
              Оставьте заявку — мы свяжемся, подтвердим участие и ответим на все вопросы.
            </p>

            <div className="space-y-4">
              {[
                { title: "Азовское море · Краснодарский край", sub: "30 июня — 11 июля (6–13 лет) · 11 июля — 22 июля (13+)" },
                { title: "Таиланд · март 2027", sub: "Родина муай-тай · для опытных спортсменов" },
                { title: "6 лет подряд", sub: "Каждый год выезжает 80–120 спортсменов" },
                { title: "Для всей семьи", sub: "Едут спортсмены и сопровождающие" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                    <p className="text-[#666666] text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#141414] border border-[#252525] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-1">Заявка на сборы</h3>
            <p className="text-[#555555] text-sm mb-7">Заполните форму — свяжемся в ближайшее время</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange}
                tabIndex={-1} aria-hidden="true" className="absolute opacity-0 h-0 w-0 pointer-events-none" autoComplete="off" />

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                  Ваше имя <span className="text-[#c41e3a]">*</span>
                </label>
                <input name="parentName" type="text" value={formData.parentName} onChange={handleChange}
                  placeholder="Имя родителя или участника" className={inp(!!errors.parentName)} />
                {errors.parentName && <p className="mt-1 text-xs text-[#c41e3a]">{errors.parentName}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                  Телефон <span className="text-[#c41e3a]">*</span>
                </label>
                <input name="phone" type="tel" value={formData.phone} onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__" className={inp(!!errors.phone)} />
                {errors.phone && <p className="mt-1 text-xs text-[#c41e3a]">{errors.phone}</p>}
              </div>

              {/* Camp */}
              <div>
                <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">
                  Сборы <span className="text-[#c41e3a]">*</span>
                </label>
                <select name="camp" value={formData.camp} onChange={handleChange} className={inp(!!errors.camp)}>
                  <option value="">Выберите сборы</option>
                  {campOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                {errors.camp && <p className="mt-1 text-xs text-[#c41e3a]">{errors.camp}</p>}
              </div>

              {/* Participant */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">Имя участника</label>
                  <input name="participantName" type="text" value={formData.participantName} onChange={handleChange}
                    placeholder="Имя спортсмена" className={inp(false)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">Возраст</label>
                  <input name="participantAge" type="text" value={formData.participantAge} onChange={handleChange}
                    placeholder="Возраст" className={inp(false)} />
                </div>
              </div>

              {/* Family */}
              <div>
                <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">Едут сопровождающие?</label>
                <select name="withFamily" value={formData.withFamily} onChange={handleChange} className={inp(false)}>
                  <option value="">Выберите</option>
                  <option value="Нет, только спортсмен">Нет, только спортсмен</option>
                  <option value="Да, 1 сопровождающий">Да, 1 сопровождающий</option>
                  <option value="Да, 2 сопровождающих">Да, 2 сопровождающих</option>
                  <option value="Да, больше — уточним">Да, больше — уточним</option>
                </select>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-xs font-semibold text-[#666666] uppercase tracking-wider mb-1.5">Вопросы или комментарий</label>
                <textarea name="comment" value={formData.comment} onChange={handleChange}
                  placeholder="Напишите вопросы по сборам" rows={3}
                  className={`${inp(false)} resize-none`} />
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="sr-only peer" />
                    <div className={`w-4 h-4 rounded border ${errors.consent ? "border-[#c41e3a]" : "border-[#333333]"} bg-[#111111] peer-checked:bg-[#c41e3a] peer-checked:border-[#c41e3a] transition-colors duration-200 flex items-center justify-center`}>
                      {formData.consent && (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-[#555555] leading-relaxed">
                    Согласен(на) на обработку персональных данных согласно{" "}
                    <Link href="/privacy" className="text-[#c41e3a] hover:underline" target="_blank">Политике конфиденциальности</Link>
                  </span>
                </label>
                {errors.consent && <p className="mt-1 text-xs text-[#c41e3a]">{errors.consent}</p>}
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full py-4 mt-2 bg-[#c41e3a] hover:bg-[#e02244] disabled:bg-[#2a2a2a] disabled:text-[#555555] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_40px_rgba(196,30,58,0.4)] disabled:cursor-not-allowed text-sm tracking-wide">
                {isSubmitting ? "Отправляем..." : "Отправить заявку на сборы"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

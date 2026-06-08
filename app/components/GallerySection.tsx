"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { galleryCategories, galleryItems, type GalleryCategory } from "@/app/data/gallery"
import { SectionHeader } from "./TrainingTypesSection"

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null)
  }, [filtered.length])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => i !== null ? (i + 1) % filtered.length : null)
  }, [filtered.length])

  const scrollSlider = (dir: "left" | "right") => {
    if (!sliderRef.current) return
    const amount = sliderRef.current.clientWidth * 0.8
    sliderRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxIndex, goPrev, goNext])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  // Reset scroll when category changes
  useEffect(() => {
    if (sliderRef.current) sliderRef.current.scrollLeft = 0
  }, [activeCategory])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }, [goNext, goPrev])

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Галерея"
          title="Фотогалерея клуба"
          description="Зал, тренировки, спортсмены, соревнования и спортивные сборы клуба «Медведь»."
        />

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => { setActiveCategory(cat.value); setLightboxIndex(null) }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-[#c41e3a] text-white"
                  : "bg-[#1a1a1a] border border-[#2a2a2a] text-[#888888] hover:border-[#c41e3a]/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative mt-8 group/slider">
          {/* Стрелка влево — на мобильном всегда видна */}
          <button
            onClick={() => scrollSlider("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-10 h-10 rounded-full bg-[#111111] border border-[#2a2a2a] hover:bg-[#c41e3a] hover:border-[#c41e3a] text-white flex items-center justify-center transition-all duration-200 shadow-lg md:opacity-0 md:group-hover/slider:opacity-100"
            aria-label="Прокрутить влево"
          >
            <ChevronLeftIcon />
          </button>

          {/* Стрелка вправо — на мобильном всегда видна */}
          <button
            onClick={() => scrollSlider("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-10 h-10 rounded-full bg-[#111111] border border-[#2a2a2a] hover:bg-[#c41e3a] hover:border-[#c41e3a] text-white flex items-center justify-center transition-all duration-200 shadow-lg md:opacity-0 md:group-hover/slider:opacity-100"
            aria-label="Прокрутить вправо"
          >
            <ChevronRightIcon />
          </button>

          {/* Горизонтальная лента */}
          <div
            ref={sliderRef}
            className="flex gap-3 overflow-x-auto scroll-smooth pb-2 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", touchAction: "pan-x" }}
          >
            {filtered.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative flex-shrink-0 w-64 h-48 sm:w-72 sm:h-52 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#c41e3a]/50 transition-all duration-300 focus:outline-none"
                aria-label={item.alt}
              >
                {item.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#444] group-hover:text-[#666] transition-colors">
                    <ImagePlaceholderIcon />
                    <span className="text-xs px-3 text-center leading-tight">{item.caption}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end justify-start p-3">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 px-2 py-1 rounded">
                    {item.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-[#1a1a1a] hover:bg-[#c41e3a] text-white flex items-center justify-center transition-colors duration-200"
            >
              <CloseIcon />
            </button>

            {/* Image */}
            <div className="relative bg-[#1a1a1a] rounded-xl overflow-hidden flex items-center justify-center" style={{ maxHeight: "75vh" }}>
              {currentItem.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentItem.src}
                  alt={currentItem.alt}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: "75vh" }}
                />
              ) : (
                <div className="flex flex-col items-center gap-4 text-[#444] p-16">
                  <ImagePlaceholderIcon size={64} />
                  <p className="text-[#666] text-sm">{currentItem.caption}</p>
                </div>
              )}

              {/* Мобильные кнопки — внутри фото */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center"
              >
                <ChevronRightIcon />
              </button>
            </div>

            <p className="mt-3 text-center text-[#888] text-sm">{currentItem.caption}</p>
            <p className="mt-1 text-center text-[#444] text-xs">{lightboxIndex + 1} / {filtered.length}</p>

            {/* Десктопные кнопки — снаружи */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-11 h-11 rounded-full bg-[#1a1a1a] hover:bg-[#c41e3a] text-white items-center justify-center transition-colors duration-200"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-11 h-11 rounded-full bg-[#1a1a1a] hover:bg-[#c41e3a] text-white items-center justify-center transition-colors duration-200"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function ImagePlaceholderIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

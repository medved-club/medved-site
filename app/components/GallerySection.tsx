"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { galleryCategories, galleryItems as defaultGalleryItems, type GalleryCategory } from "@/app/data/gallery"
import { SectionHeader } from "./TrainingTypesSection"
import type { GalleryItem } from "@/lib/site-content"

type AlbumCategory = Exclude<GalleryCategory, "all">

export default function GallerySection({ galleryItems = defaultGalleryItems }: { galleryItems?: GalleryItem[] }) {
  const [openCategory, setOpenCategory] = useState<AlbumCategory | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const albums = galleryCategories
    .filter((cat) => cat.value !== "all")
    .map((cat) => ({
      value: cat.value as AlbumCategory,
      label: cat.label,
      items: galleryItems.filter((item) => item.category === cat.value),
    }))

  const filtered = openCategory ? galleryItems.filter((item) => item.category === openCategory) : []

  const openAlbum = (cat: AlbumCategory) => {
    setOpenCategory(cat)
    setLightboxIndex(0)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    setOpenCategory(null)
  }

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))
  }, [filtered.length])

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

        {/* Альбомы по категориям */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
          {albums.map((album) => {
            const cover = album.items.find((item) => item.src)
            return (
              <button
                key={album.value}
                onClick={() => openAlbum(album.value)}
                className="group relative aspect-[4/3] bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#c41e3a]/50 transition-all duration-300 focus:outline-none"
                aria-label={`Открыть альбом «${album.label}»`}
              >
                {cover?.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={cover.src}
                    alt={album.label}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#444]">
                    <ImagePlaceholderIcon size={40} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-4 text-left">
                  <p className="text-white font-bold text-sm sm:text-base leading-tight">{album.label}</p>
                  <p className="text-[#aaaaaa] text-xs mt-0.5">{album.items.length} фото</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Lightbox — открывается сразу при клике на альбом */}
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

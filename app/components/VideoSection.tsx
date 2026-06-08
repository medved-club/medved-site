"use client"

import { useRef, useState } from "react"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <section className="py-16 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <span className="text-xs font-semibold text-[#666666] uppercase tracking-widest">Клуб в действии</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white">Жизнь клуба «Медведь»</h2>
        </div>
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-[#2a2a2a] shadow-[0_8px_40px_rgba(0,0,0,0.6)] group"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full block"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Controls — мобайл: всегда видны; десктоп: по hover */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              aria-label={muted ? "Включить звук" : "Выключить звук"}
            >
              {muted ? <MutedIcon /> : <SoundIcon />}
            </button>
            <button
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              aria-label="На весь экран"
            >
              <FullscreenIcon />
            </button>
          </div>

          {/* Подсказка — на мобайле "Нажмите", на десктопе "Наведите" */}
          {muted && (
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5 pointer-events-none">
              <MutedIcon />
              <span className="text-white/70 text-xs">
                <span className="md:hidden">Нажмите для звука</span>
                <span className="hidden md:inline">Наведите для управления</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function MutedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function SoundIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  )
}

function FullscreenIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}

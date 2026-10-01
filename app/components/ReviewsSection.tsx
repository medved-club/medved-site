"use client"

import { useState } from "react"
import { reviews as defaultReviews } from "@/app/data/reviews"
import { contacts } from "@/app/data/contacts"
import { SectionHeader } from "./TrainingTypesSection"
import type { Review } from "@/lib/site-content"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i <= rating ? "#c41e3a" : "#333333"}
          stroke={i <= rating ? "#c41e3a" : "#333333"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-semibold text-white text-sm">{review.author}</p>
          {review.date && (
            <p className="text-xs text-[#555555] mt-0.5">{review.date}</p>
          )}
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-[#888888] text-sm leading-relaxed flex-1 italic">
        «{review.text}»
      </p>
      <div className="flex items-center gap-2 pt-2 border-t border-[#222222]">
        <YandexIcon size={13} />
        <span className="text-xs text-[#555555]">{review.source}</span>
      </div>
    </div>
  )
}

export default function ReviewsSection({ reviews = defaultReviews }: { reviews?: Review[] }) {
  const [showAll, setShowAll] = useState(false)

  const featuredReviews = reviews.filter((r) => r.featured)
  const extraReviews = reviews.filter((r) => !r.featured)
  const totalCount = reviews.length

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <SectionHeader
              label="Отзывы"
              title="Отзывы о клубе"
              description="Что говорят ученики и родители о тренировках в клубе «Медведь»."
            />
            <div className="flex items-center gap-3 mt-3">
              <span className="text-3xl font-black text-white">5,0</span>
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#c41e3a" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#888888]">{totalCount} отзывов · Яндекс.Карты</span>
              </div>
            </div>
          </div>
          <a
            href={contacts.yandexReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-4 py-2.5 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-[#cccccc] hover:text-white text-sm rounded transition-all duration-200 flex items-center gap-2"
          >
            <YandexIcon />
            Все отзывы на Яндекс.Картах
          </a>
        </div>

        {/* Featured reviews — всегда видны */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Остальные отзывы — раскрываются */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showAll ? "max-h-[9999px] opacity-100 mt-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {extraReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Кнопка раскрытия */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/50 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-[#222222]"
          >
            <span>{showAll ? "Скрыть отзывы" : `Показать все отзывы (${totalCount})`}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <a
            href={contacts.yandexReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#c41e3a] hover:bg-[#e02244] text-white text-sm font-semibold rounded-xl transition-colors duration-200"
          >
            <YandexIcon size={14} color="white" />
            Написать отзыв
          </a>
        </div>
      </div>
    </section>
  )
}

function YandexIcon({ size = 16, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color === "white" ? "white" : "#c41e3a"}>
      <path d="M2.04 12c0-5.523 4.476-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10z" fill={color === "white" ? "rgba(255,255,255,0.2)" : "#c41e3a"} />
      <path
        fill={color === "white" ? "white" : "white"}
        d="M13.32 17.5h-1.7V7.35h-.95c-1.58 0-2.41.77-2.41 1.97 0 1.37.62 2.01 1.86 2.85l1.03.69-2.97 4.64H6.4l2.7-4.2c-1.55-1.1-2.42-2.17-2.42-4.03 0-2.3 1.59-3.77 4.14-3.77H13.32V17.5z"
      />
    </svg>
  )
}

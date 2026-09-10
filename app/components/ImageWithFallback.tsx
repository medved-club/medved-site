"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string | null
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  fallbackContent?: React.ReactNode
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  fallbackContent,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <div
        className={`flex items-center justify-center bg-[#1a1a1a] text-[#333] ${className ?? ""}`}
        style={fill ? { position: "absolute", inset: 0 } : { width, height }}
        aria-label={alt}
      >
        {fallbackContent ?? (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      onError={() => setError(true)}
    />
  )
}

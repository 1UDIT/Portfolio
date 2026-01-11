"use client"

import { useEffect, useRef } from "react"

export default function CursorRadialEffect() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return

      glowRef.current.style.transform = `translate3d(
        ${e.clientX - 120}px,
        ${e.clientY - 120}px,
        0
      )`
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none -z-[1]">
      <div
        ref={glowRef}
        className="absolute rounded-full blur-3xl"
        style={{
          width: 240,
          height: 240,
          background: `radial-gradient(
            circle,
            rgba(255,106,61,0.8) 0%,
            rgba(255,106,61,0.35) 35%,
            transparent 70%
          )`,
          willChange: "transform",
        }}
      />
    </div>
  )
}

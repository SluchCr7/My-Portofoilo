'use client'
import React from 'react'
import { reviews } from '@/lib/Data'
import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const ReviewCard = ({ item }) => (
  <div className="flex-shrink-0 w-[300px] sm:w-[340px] glass-card rounded-2xl p-6 flex flex-col gap-4 mx-3 hover:-translate-y-1 transition-transform duration-300">
    {/* Stars */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-amber-400 text-xs" />
      ))}
    </div>

    {/* Quote */}
    <div className="relative">
      <FaQuoteLeft className="absolute -top-1 -left-1 text-violet-500/25 text-3xl pointer-events-none" />
      <p className="text-gray-400 text-sm leading-6 pl-4 italic line-clamp-4">
        &quot;{item.quote}&quot;
      </p>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3 pt-3 border-t border-white/5 mt-auto">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-glow-sm">
        <span className="text-white font-bold text-sm font-space">
          {item.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </span>
      </div>
      <div>
        <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
        <p className="text-gray-500 text-xs leading-tight mt-0.5">{item.title}</p>
      </div>
    </div>
  </div>
)

const Reviews = () => {
  // Triple for smooth looping
  const row1 = [...reviews, ...reviews, ...reviews]
  const row2 = [...reviews, ...reviews, ...reviews]

  return (
    <div id="Reviews" className="w-full py-28 flex flex-col items-center gap-14 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-[500px] h-[300px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4 px-6"
      >
        <span className="tag-pill">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-black font-space text-white">
          Client{' '}
          <span className="gradient-text">Testimonials</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Real feedback from real clients — here&apos;s what they say about working with me.
        </p>
      </motion.div>

      {/* Row 1 — Left scroll */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, #000319, transparent)' }} />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, #000319, transparent)' }} />

        <div className="flex" style={{ animation: 'marqueeLeft 45s linear infinite' }}>
          {row1.map((item, i) => (
            <ReviewCard key={`r1-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 — Right scroll */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, #000319, transparent)' }} />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, #000319, transparent)' }} />

        <div className="flex" style={{ animation: 'marqueeRight 50s linear infinite' }}>
          {row2.map((item, i) => (
            <ReviewCard key={`r2-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Review count badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-violet-500/20"
      >
        <div className="flex -space-x-2">
          {['EW','SC','DK','OB','MR'].map((initials, i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center border-2 border-[#000319]">
              <span className="text-white text-[9px] font-bold">{initials}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-amber-400 text-xs" />
          ))}
        </div>
        <p className="text-white text-sm font-semibold">5.0 · <span className="text-gray-400 font-normal">{reviews.length}+ happy clients</span></p>
      </motion.div>
    </div>
  )
}

export default Reviews
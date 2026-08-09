'use client'
import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollProgress() {
  const [showTop, setShowTop] = useState(false)

  // إعدادات شريط التمرير العلوي باستخدام Framer Motion
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  })

  // تتبع مكان التمرير لإظهار أو إخفاء زر العودة للاعلى
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── شريط التقدم العلوي ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999]"
        style={{ 
          scaleX, 
          background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #3b82f6)', 
          transformOrigin: '0%' 
        }}
      />

      {/* ── زر العودة إلى الأعلى ── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showTop ? 1 : 0,
          scale: showTop ? 1 : 0.8,
          pointerEvents: showTop ? 'auto' : 'none'
        }}
        transition={{ duration: 0.25 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-[1500] w-12 h-12 rounded-2xl flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
        style={{ 
          background: 'linear-gradient(135deg, #6366f1, #3b82f6)', 
          boxShadow: '0 4px 20px rgba(99,102,241,0.4)' 
        }}
        aria-label="Back to top"
      >
        <FiArrowUp className="text-lg" />
      </motion.button>
    </>
  )
}
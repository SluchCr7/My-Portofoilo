'use client'
import React, { useState, useEffect } from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { FaDownload, FaGithub } from 'react-icons/fa'
import { HiArrowRight, HiCode } from 'react-icons/hi'
import Link from 'next/link'
import { icons, stats } from '@/lib/Data'
import Image from 'next/image'
import { motion } from 'framer-motion'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'UI / UX Designer',
  'Next.js Specialist',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex, mounted])

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-[#000319]" />

      {/* Dot grid */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #000319 100%)' }}
      />

      {/* Purple + blue orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-700/10 blur-[130px] z-0 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-700/10 blur-[130px] z-0 pointer-events-none" />

      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="blue" />
      <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="purple" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

        {/* ── Left: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex-1 flex flex-col gap-6 text-center lg:text-left"
        >

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >
            <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide"
              style={{ background: 'rgba(52,211,153,0.08)', borderColor: 'rgba(52,211,153,0.3)', color: '#34d399' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Greeting + Name */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-gray-500 text-sm font-space tracking-[0.2em] uppercase">Hello, I&apos;m</p>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black font-space text-white leading-[1.02] tracking-tight">
              Ahmed{' '}
              <span className="gradient-text">Sluch</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-center lg:justify-start gap-2 h-9"
          >
            <HiCode className="text-violet-400 text-xl flex-shrink-0" />
            <span className="text-lg md:text-xl font-space font-semibold text-gray-200">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            I transform complex requirements into{' '}
            <span className="text-white font-semibold">seamless, high-performance</span>{' '}
            web applications — from pixel-perfect UIs to rock-solid backends, using the MERN stack.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link href="#Projects">
              <button className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-md"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                View My Projects
                <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
            <a href="/Profile.pdf" download>
              <button className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl glass-card text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 w-full">
                <FaDownload className="text-violet-400 text-xs group-hover:translate-y-0.5 transition-transform" />
                Download CV
              </button>
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 justify-center lg:justify-start"
          >
            <p className="text-gray-600 text-xs font-medium">Find me on</p>
            <div className="flex items-center gap-3">
              {icons.map(({ link, Icon }, idx) => (
                <Link
                  href={link}
                  key={idx}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-glow-sm text-base"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile + Stats ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-shrink-0 flex flex-col items-center gap-6"
        >
          {/* Profile image with animated glow ring */}
          <div className="relative">
            {/* Animated ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1.5 rounded-full opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #3b82f6, #6366f1)',
                borderRadius: '50%',
                filter: 'blur(4px)'
              }}
            />
            {/* Static inner ring */}
            <div className="absolute -inset-0.5 rounded-full"
              style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }} />

            {/* Image */}
            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-[#000319]">
              <Image
                src="/Home.jpg"
                alt="Ahmed Sluch — Full Stack Developer"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
              style={{ background: 'rgba(0,3,25,0.9)', borderColor: 'rgba(52,211,153,0.3)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
              <span className="text-emerald-400 text-xs font-semibold">Online</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[260px]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="glass-card rounded-2xl p-4 text-center group"
              >
                <p className="text-2xl font-black gradient-text font-space">{stat.num}+</p>
                <p className="text-gray-500 text-[11px] font-medium mt-0.5 leading-tight group-hover:text-gray-400 transition-colors">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #000319, transparent)' }} />
    </div>
  )
}

export default Hero

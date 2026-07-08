'use client'
import { stats, tools } from '@/lib/Data'
import Image from 'next/image'
import React, { useState } from 'react'
import CountUp from "react-countup"
import { motion } from "framer-motion"
import Link from 'next/link'
import { FaMapMarkerAlt, FaGraduationCap, FaGlobeAfrica } from 'react-icons/fa'
import { HiLightningBolt } from 'react-icons/hi'

const skillLevels = [
  { name: 'Next.js / React', level: 95, color: 'from-violet-600 to-blue-600' },
  { name: 'Node.js / Express', level: 88, color: 'from-blue-600 to-cyan-500' },
  { name: 'MongoDB / Databases', level: 85, color: 'from-emerald-500 to-teal-500' },
  { name: 'UI/UX & Figma', level: 80, color: 'from-pink-500 to-rose-500' },
  { name: 'TypeScript / JS', level: 90, color: 'from-amber-500 to-orange-500' },
]

const infoBadges = [
  { icon: FaMapMarkerAlt, text: 'Egypt', color: 'text-violet-400' },
  { icon: FaGraduationCap, text: 'CS Graduate', color: 'text-blue-400' },
  { icon: FaGlobeAfrica, text: 'Remote-Friendly', color: 'text-emerald-400' },
  { icon: HiLightningBolt, text: 'Fast Delivery', color: 'text-amber-400' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
})

const About = () => {
  const [skillsVisible, setSkillsVisible] = useState(false)

  return (
    <div id="About" className="w-full px-6 md:px-12 py-28 flex flex-col items-center gap-24 relative">

      {/* Background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-violet-900/8 blur-[120px] rounded-full pointer-events-none" />

      {/* ── Section Header ── */}
      <motion.div {...fadeUp(0)} className="text-center space-y-3">
        <span className="tag-pill">About Me</span>
        <h2 className="text-4xl md:text-5xl font-black font-space text-white leading-tight">
          Passionate about{' '}
          <span className="gradient-text">building things</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          A full-stack developer who turns ideas into impactful, beautiful digital products.
        </p>
      </motion.div>

      {/* ── Bio Card ── */}
      <motion.div
        {...fadeUp(0.1)}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 lg:gap-14 items-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group w-fit">
            {/* Glow ring */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-violet-600 blur-md opacity-40 group-hover:opacity-70 transition duration-700" />
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-card">
              <Image
                src="/Home.jpg"
                alt="Ahmed Sluch — Full Stack Developer"
                fill
                className="object-cover object-top scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 border border-violet-500/30 shadow-glow-sm"
            >
              <p className="text-violet-300 text-xs font-medium">Experience</p>
              <p className="text-white text-lg font-black font-space">4+ Years</p>
            </motion.div>

            {/* Floating projects badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 border border-blue-500/30 shadow-glow-sm"
            >
              <p className="text-blue-300 text-xs font-medium">Projects</p>
              <p className="text-white text-lg font-black font-space">12+</p>
            </motion.div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-6 text-white">
          <div className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-black font-space leading-tight">
              Hi, I&apos;m <span className="gradient-text">Ahmed</span>
            </h3>
            <p className="text-violet-400 font-semibold text-sm tracking-wide">aka Sluch — Full Stack Developer</p>
          </div>

          <div className="space-y-4 text-gray-400 text-base leading-7">
            <p>
              With a passion for digital innovation, I have dedicated myself to mastering the art of
              full-stack development. My journey is defined by a relentless pursuit of excellence —
              turning complex challenges into{' '}
              <span className="text-white font-semibold">elegant, user-centric solutions</span>.
            </p>
            <p>
              I specialize in building scalable, high-performance applications using the MERN stack,
              writing clean and maintainable code that drives business growth and delivers
              exceptional user experiences.
            </p>
          </div>

          {/* Info badges */}
          <div className="grid grid-cols-2 gap-3">
            {infoBadges.map(({ icon: Icon, text, color }, i) => (
              <div key={i} className="flex items-center gap-2.5 glass rounded-xl px-4 py-3 border border-white/8">
                <Icon className={`${color} flex-shrink-0`} />
                <span className="text-gray-300 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <Link href="#Projects">
              <button
                className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm"
                style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}
              >
                View My Work →
              </button>
            </Link>
            <a href="/Profile.pdf" download>
              <button className="px-6 py-3 rounded-xl glass-card text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Skill Levels ── */}
      <motion.div
        {...fadeUp(0.15)}
        onViewportEnter={() => setSkillsVisible(true)}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* Left: Skill bars */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="tag-pill">Skill Levels</span>
            <h3 className="text-2xl font-bold font-space text-white mt-2">Core Proficiencies</h3>
            <p className="text-gray-400 text-sm">Years of practice condensed into progress bars.</p>
          </div>

          <div className="space-y-5">
            {skillLevels.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: skillsVisible ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1.2, delay: idx * 0.12, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Tech icons */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="tag-pill">Tech Stack</span>
            <h3 className="text-2xl font-bold font-space text-white mt-2">Technologies I Use</h3>
            <p className="text-gray-400 text-sm">The tools I rely on to build robust products.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2.5 cursor-default group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/15 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <span className="text-gray-300 text-xs font-semibold font-space">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Stats ── */}
      <motion.div {...fadeUp(0.2)} className="w-full max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <span className="tag-pill">Numbers</span>
          <h3 className="text-3xl font-bold font-space text-white">By the Numbers</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative glass-card rounded-2xl p-7 flex flex-col items-center gap-2 overflow-hidden group"
            >
              {/* hover bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-blue-600/0 group-hover:from-violet-600/10 group-hover:to-blue-600/8 transition-all duration-500 rounded-2xl" />
              <CountUp
                end={stat.num}
                suffix="+"
                duration={3.5}
                delay={0.5}
                className="text-4xl font-black gradient-text font-space relative z-10"
              />
              <p className="text-sm text-gray-400 text-center relative z-10 leading-snug">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About

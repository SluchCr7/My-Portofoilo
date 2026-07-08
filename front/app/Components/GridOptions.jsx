'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaCode, FaGlobe } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const GridOptions = ({ setIsOpen }) => {
  return (
    <div className="w-full px-6 md:px-12 py-16 max-w-7xl mx-auto">

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 space-y-2"
      >
        <span className="tag-pill">Quick Look</span>
        <h2 className="text-3xl md:text-4xl font-black font-space text-white">
          Everything You Need to <span className="gradient-text">Know</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-5">

        {/* Card 1 — Large: Currently Building */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="md:col-span-3 h-[380px] glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row relative group"
        >
          {/* image half */}
          <div className="relative w-full md:w-1/2 h-44 md:h-full overflow-hidden">
            <Image src="/assets/grid.svg" alt="Building" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
            {/* sub image */}
            <div className="absolute bottom-4 left-4 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md z-10 transition-transform duration-300 group-hover:scale-105">
              <Image src="/assets/b5.svg" alt="sub" fill className="object-cover" />
            </div>
          </div>

          {/* text half */}
          <div className="flex flex-col justify-center p-6 md:w-1/2 text-white gap-4 relative z-10">
            <span className="tag-pill w-fit">🔬 Inside Scoop</span>
            <h2 className="text-xl md:text-2xl font-bold font-space leading-snug">
              Currently building a{' '}
              <span className="gradient-text-blue">JS Animation</span> library
            </h2>
            <p className="text-gray-400 text-sm leading-6">
              Animating user interfaces from scratch to deliver immersive, interactive experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-violet-400 font-medium">
              <HiSparkles className="text-sm" />
              In active development
            </div>
          </div>
        </motion.div>

        {/* Card 2 — Client Collaboration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-3 h-[380px] glass-card rounded-3xl overflow-hidden relative group"
        >
          <Image src="/assets/b1.svg" alt="Collaboration" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
            <span className="tag-pill w-fit mb-3">🤝 Collaboration</span>
            <h2 className="text-2xl md:text-3xl font-bold font-space leading-snug">
              I prioritize client collaboration, fostering{' '}
              <span className="gradient-text">open communication</span>
            </h2>
          </div>
        </motion.div>

        {/* Card 3 — Download CV */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="md:col-span-2 h-52 glass-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center mb-4">
              <FaDownload className="text-white text-sm" />
            </div>
            <h3 className="text-lg font-bold font-space text-white">Download My CV</h3>
            <p className="text-gray-500 text-xs mt-1">Get the full picture of my experience</p>
          </div>
          <a href="/Profile.pdf" download className="relative z-10">
            <button className="w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)', boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }}>
              Download PDF
            </button>
          </a>
        </motion.div>

        {/* Card 4 — Tech Enthusiast */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-2 h-52 glass-card rounded-3xl overflow-hidden relative group"
        >
          <Image src="/assets/grid.svg" alt="Tech" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 -right-2 w-[55%] h-[50%] rounded-md overflow-hidden z-10">
            <Image src="/assets/b4.svg" alt="sub" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-5 left-5 z-20 text-white">
            <FaCode className="text-violet-400 text-xl mb-2" />
            <h2 className="text-base font-bold font-space leading-tight w-[55%]">
              Tech enthusiast with passion for dev.
            </h2>
          </div>
        </motion.div>

        {/* Card 5 — Start a Project */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="md:col-span-2 h-52 glass-card rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
              <FaGlobe className="text-white text-sm" />
            </div>
            <h3 className="text-lg font-bold font-space text-white">Start a Project?</h3>
            <p className="text-gray-500 text-xs mt-1">Let&apos;s build something amazing together</p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 w-full py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            style={{ background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 4px 15px rgba(16,185,129,0.3)' }}
          >
            <FaEnvelope className="text-xs" />
            Contact Me
          </button>
        </motion.div>

        {/* Card 6 — Timezone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-3 h-52 glass-card rounded-3xl p-7 flex items-center gap-6 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          <div className="relative z-10 text-5xl animate-float">🌍</div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold font-space text-white">Flexible with Time Zones</h3>
            <p className="text-gray-400 text-sm mt-2 leading-6">
              Based in Egypt (EET/UTC+2). I adapt my schedule to accommodate clients across any timezone, ensuring smooth, consistent communication.
            </p>
          </div>
        </motion.div>

        {/* Card 7 — My Tech Stack */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="md:col-span-3 h-52 glass-card rounded-3xl p-7 flex flex-col justify-center gap-4 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
          <div className="relative z-10">
            <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase mb-1">Constantly Evolving</p>
            <h3 className="text-xl font-bold font-space text-white">My Tech Stack</h3>
          </div>
          <div className="relative z-10 flex flex-wrap gap-2">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'Figma', 'JavaScript', 'Express'].map((t, i) => (
              <span key={i} className="tag-pill">{t}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default GridOptions
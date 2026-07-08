'use client'
import React from 'react';
import { services } from '@/lib/Data';
import { motion } from 'framer-motion';
import { CiGlobe, CiServer, CiImageOn } from 'react-icons/ci';
import { IoMdColorPalette } from 'react-icons/io';

const serviceColors = [
  { from: 'from-violet-600/30', to: 'to-blue-600/20', icon: 'text-violet-400', border: 'border-violet-500/20', glow: 'group-hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]' },
  { from: 'from-blue-600/30', to: 'to-cyan-600/20', icon: 'text-blue-400', border: 'border-blue-500/20', glow: 'group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]' },
  { from: 'from-emerald-600/30', to: 'to-teal-600/20', icon: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]' },
  { from: 'from-pink-600/30', to: 'to-rose-600/20', icon: 'text-pink-400', border: 'border-pink-500/20', glow: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]' },
];

const Services = () => {
  return (
    <div id="Services" className="w-full px-6 md:px-12 py-28 flex flex-col items-center gap-16 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4"
      >
        <span className="tag-pill">What I Do</span>
        <h2 className="text-4xl md:text-5xl font-black font-space text-white">
          Professional{' '}
          <span className="gradient-text">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Tailored web solutions designed to elevate your digital presence and drive results.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {services.map((service, idx) => {
          const colors = serviceColors[idx % serviceColors.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative glass-card rounded-2xl p-8 flex flex-col gap-5 overflow-hidden cursor-default transition-shadow duration-300 ${colors.glow}`}
            >
              {/* Gradient bg on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.from} ${colors.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-black font-space text-white/5 select-none">
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${colors.from} ${colors.to} border ${colors.border} flex items-center justify-center text-3xl ${colors.icon} transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-xl font-bold font-space text-white group-hover:text-white transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm leading-7 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}

export default Services
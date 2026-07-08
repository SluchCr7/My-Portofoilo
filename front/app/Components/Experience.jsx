'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa'

const experiences = [
  {
    type: 'work',
    icon: FaBriefcase,
    iconColor: 'text-violet-400',
    iconBg: 'from-violet-600/30 to-violet-800/20',
    border: 'border-violet-500/20',
    title: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2022 – Present',
    location: 'Remote · Egypt',
    description: 'Building end-to-end web applications for clients worldwide using the MERN stack. Delivered 12+ projects across e-commerce, social media, fintech, and SaaS domains.',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    type: 'work',
    icon: FaCode,
    iconColor: 'text-blue-400',
    iconBg: 'from-blue-600/30 to-blue-800/20',
    border: 'border-blue-500/20',
    title: 'Frontend Developer',
    company: 'Various Clients',
    period: '2021 – 2022',
    location: 'Remote',
    description: 'Developed responsive, pixel-perfect interfaces for startups and businesses. Focused on performance optimization, accessibility, and modern design systems.',
    tags: ['React', 'JavaScript', 'CSS3', 'Figma', 'REST APIs'],
  },
  {
    type: 'education',
    icon: FaGraduationCap,
    iconColor: 'text-emerald-400',
    iconBg: 'from-emerald-600/30 to-emerald-800/20',
    border: 'border-emerald-500/20',
    title: 'Computer Science',
    company: 'Faculty of Computers & Information',
    period: '2020 – 2024',
    location: 'Egypt',
    description: 'Graduated with a strong foundation in algorithms, data structures, software engineering, and web development technologies.',
    tags: ['Algorithms', 'Data Structures', 'OOP', 'Databases', 'Networking'],
  },
]

const Experience = () => {
  return (
    <div id="Experience" className="w-full px-6 md:px-12 py-28 flex flex-col items-center gap-16 relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[300px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4"
      >
        <span className="tag-pill">Background</span>
        <h2 className="text-4xl md:text-5xl font-black font-space text-white">
          Experience &{' '}
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          My professional journey and academic background that shaped my skills.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="w-full max-w-4xl relative">

        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-blue-500/20 to-transparent transform md:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isRight = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon node — centered on line */}
                <div className={`flex-shrink-0 relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-6`}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.iconBg} border ${exp.border} flex items-center justify-center shadow-lg`}>
                    <Icon className={`${exp.iconColor} text-lg`} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 md:w-[calc(50%-3rem)] ${isRight ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} pl-2 md:pl-0`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl p-6 flex flex-col gap-4 transition-shadow duration-300 hover:shadow-card-hover"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <h3 className="text-lg font-bold font-space text-white">{exp.title}</h3>
                        <p className="text-violet-400 text-sm font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="tag-pill text-xs">{exp.period}</span>
                        <p className="text-gray-500 text-xs mt-1">{exp.location}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-6">{exp.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-400 bg-white/5 border border-white/8 hover:text-white hover:border-violet-500/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience

'use client'
import { projects } from '@/lib/Data'
import React, { useState, useMemo } from 'react'
import Project from './Project'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectView from './ProjectView'

const FILTERS = ['All', 'Frontend', 'Full Stack', 'In Progress']

const getCategory = (proj) => {
  const hasBackend = proj.tools.some(t =>
    ['nodejs', 'mongodb', 'expressjs'].includes(t.toLowerCase())
  )
  if (proj.status === 'In Progress') return 'In Progress'
  if (hasBackend) return 'Full Stack'
  return 'Frontend'
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [project , setProject] = useState({})
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter(p => getCategory(p) === activeFilter)
  }, [activeFilter])

  const visible = showAll ? filtered : filtered.slice(0, 6)

  return (
    <>
      <ProjectView project={project} setProject={setProject} />
      <div id="Projects" className="w-full px-6 md:px-12 py-28 flex flex-col items-center gap-14 relative">

        {/* Background glow */}
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <span className="tag-pill">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black font-space text-white">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated selection of my best work — each project built with precision and passion.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setShowAll(false) }}
              className={`px-5 py-2 rounded-xl text-sm font-semibold font-space transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white border-transparent shadow-glow-sm'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {filter}
              <span className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
                activeFilter === filter ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'
              }`}>
                {filter === 'All' ? projects.length : projects.filter(p => getCategory(p) === filter).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
          <AnimatePresence mode="popLayout">
            {visible.map((proj, idx) => (
              <motion.div
                key={proj.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
              >
                <Project project={proj} setProject={setProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less */}
        {filtered.length > 6 && (
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-xl glass-card text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm border border-violet-500/20 hover:border-violet-500/50"
          >
            {showAll ? '↑ Show Less' : `↓ Load ${filtered.length - 6} More`}
          </motion.button>
        )}
      </div>
    </>
  )
}

export default Portfolio

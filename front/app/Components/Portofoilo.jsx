'use client'
import { projects } from '@/lib/Data'
import React, { useState } from 'react'
import Project from './Project'
import { motion, AnimatePresence } from 'framer-motion'

const Portfolio = ({ setProject }) => {
  const [showNum, setShowNum] = useState(3)

  const handleShow = () => {
    setShowNum(showNum === projects.length ? 3 : projects.length)
  }

  return (
    <div id="Projects" className="w-full bg-Black-100 px-6 md:px-12 py-20 flex flex-col items-center gap-12">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-white">
        Small Collection Of <span className="text-purple-400">My Work</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl">
        <AnimatePresence>
          {projects.slice(0, showNum).map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Project project={proj} setProject={setProject} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less */}
      {projects.length > 3 && (
        <button
          onClick={handleShow}
          className="mt-6 px-8 py-3 rounded-lg bg-Accent-100 text-Black font-semibold shadow-md hover:bg-Accent-200 transition-all duration-300"
        >
          {showNum === projects.length ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default Portfolio

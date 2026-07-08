import React, { useEffect } from "react"
import { IoIosClose } from "react-icons/io"
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaClock, FaCalendarAlt } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { techIcons } from "@/lib/Data"

const statusConfig = {
  Completed: { dot: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-500/30', label: 'Completed' },
  'In Progress': { dot: 'bg-amber-400', text: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-500/30', label: 'In Progress' },
}

const ProjectView = ({ project, setProject }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setProject({})
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [setProject])

  if (!project || Object.keys(project).length === 0) return null;

  const status = statusConfig[project.status] || statusConfig.Completed;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[5000] flex items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(0,3,25,0.85)', backdropFilter: 'blur(12px)' }}
        onClick={() => setProject({})}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-hidden flex flex-col lg:flex-row relative"
          style={{ background: '#0a0a1a', border: '1px solid rgba(99,102,241,0.2)', boxShadow: '0 0 80px rgba(99,102,241,0.15), 0 40px 80px rgba(0,0,0,0.6)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setProject({})}
            className="absolute top-4 right-4 z-50 p-2 rounded-xl text-gray-400 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <IoIosClose size={24} />
          </button>

          {/* Left — Image */}
          <div className="lg:w-[55%] h-56 lg:h-auto relative overflow-hidden flex-shrink-0">
            <Image
              src={project.img}
              alt={project.name}
              fill
              className="object-cover object-top"
              priority
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1a] lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0a1a]" />

            {/* Project name overlay on mobile */}
            <div className="absolute bottom-4 left-4 lg:hidden">
              <h2 className="text-2xl font-black font-space text-white drop-shadow-xl">{project.name}</h2>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:w-[45%] flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto custom-scroll p-7 lg:p-8 flex flex-col gap-6">

              {/* Header */}
              <div className="space-y-3 hidden lg:block">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-black font-space text-white leading-tight"
                >
                  {project.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-gray-400 text-sm leading-6"
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Mobile description */}
              <p className="text-gray-400 text-sm leading-6 lg:hidden">{project.description}</p>

              {/* Meta Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl p-3 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Status</p>
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-xs font-semibold w-fit ${status.bg} ${status.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </div>
                </div>
                <div className="rounded-xl p-3 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Timeline</p>
                  <div className="flex items-center gap-1 text-gray-200 text-xs font-semibold">
                    <FaClock className="text-violet-400 text-[10px]" />
                    {project.duration}
                  </div>
                </div>
                <div className="rounded-xl p-3 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Finished</p>
                  <div className="flex items-center gap-1 text-gray-200 text-xs font-semibold">
                    <FaCalendarAlt className="text-blue-400 text-[10px]" />
                    {project.finishedAt}
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-300 text-xs font-medium transition-colors hover:text-white"
                      style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}
                    >
                      <span className="text-sm">{techIcons[tool] || '⚡'}</span>
                      <span className="capitalize">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Key Features</h3>
                  <ul className="grid gap-2.5">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.06 }}
                        className="flex items-center gap-3 text-gray-400 text-sm group hover:text-gray-200 transition-colors"
                      >
                        <FaCheckCircle className="text-violet-500 flex-shrink-0 text-xs group-hover:text-violet-400 transition-colors" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Details */}
              {project.details && (
                <div className="rounded-xl p-4" style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)' }}>
                  <p className="text-gray-400 text-xs leading-5">
                    <span className="text-violet-400 font-semibold">Note: </span>
                    {project.details}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="p-6 pt-4 flex gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {project.preview && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}
                >
                  <FaExternalLinkAlt className="text-xs" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <FaGithub className="text-base" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectView

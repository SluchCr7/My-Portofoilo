import React, { useEffect } from "react"
import { IoIosClose } from "react-icons/io"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { techIcons } from "@/lib/Data"

const ProjectView = ({ project, setProject }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setProject({})
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [setProject])

  if (!project || Object.keys(project).length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[5000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
        onClick={() => setProject({})}
      >
        <motion.div
          layoutId={`project-${project.name}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="w-full max-w-6xl bg-[#0f0f0f] border border-white/10 rounded-[30px] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] relative group"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button Mobile */}
          <button
            onClick={() => setProject({})}
            className="lg:hidden absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10"
          >
            <IoIosClose size={24} />
          </button>

          {/* Image Section */}
          <div className="lg:w-[60%] h-64 lg:h-auto relative bg-[#111] overflow-hidden">
            <Image
              src={project.img}
              alt={project.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0f0f0f]" />

            {/* Floating Title on Desktop (Optional stylistic choice, keeping it clean for now) */}
          </div>

          {/* Content Section */}
          <div className="lg:w-[40%] flex flex-col bg-[#0f0f0f] relative">
            {/* Close Button Desktop */}
            <button
              onClick={() => setProject({})}
              className="hidden lg:flex absolute top-6 right-6 z-50 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <IoIosClose size={28} />
            </button>

            <div className="flex-1 overflow-y-auto custom-scroll p-8 lg:p-10 flex flex-col gap-8">

              {/* Header */}
              <div className="space-y-4 mt-2">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl lg:text-4xl font-bold text-white leading-tight"
                >
                  {project.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-sm lg:text-base leading-relaxed"
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Meta Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-medium text-sm">{project.status}</span>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Timeline</p>
                  <p className="text-gray-200 font-medium text-sm">{project.duration}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
                      <span className="text-base">
                        {techIcons[tool] || "⚡"}
                      </span>
                      <span className="capitalize">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              {project.features && (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Key Features</h3>
                  <ul className="grid gap-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm group">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                        <span className="group-hover:text-gray-300 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-8 pt-4 border-t border-white/5 bg-[#0f0f0f]">
              <div className="flex gap-4">
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 active:scale-[0.98]"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-3 rounded-xl font-semibold border border-white/5 transition-all active:scale-[0.98]"
                  >
                    <FaGithub className="text-lg" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectView

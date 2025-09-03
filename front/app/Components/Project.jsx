import Image from 'next/image'
import React from 'react'
import { techIcons } from '@/lib/Data'
import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/react' // لو تحب تستخدم مكتبة Tooltips

const Project = ({ project, setProject }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md group overflow-hidden"
    >
      {/* Project Image + Overlay */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={project.img}
          width={500}
          height={300}
          alt={project.name}
          className="w-full h-[200px] object-cover object-top group-hover:opacity-80 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <button
            onClick={() => setProject(project)}
            className="px-5 py-2 bg-Accent-100 text-Black font-semibold rounded-lg shadow-md hover:bg-Accent-200 transition"
          >
            View Project
          </button>
        </div>
      </div>

      {/* Project Info */}
      <h3 className="text-lg text-white font-semibold mt-4">{project.name}</h3>
      <p className="text-sm text-gray-300 mt-2 line-clamp-2">{project.description}</p>

      {/* Tools & Link */}
      <div className="mt-3 flex items-center justify-between">
        {/* Tools */}
        <div className="flex items-center gap-2 flex-wrap">
          {project.tools.map((tool, i) => (
            <Tooltip key={i} content={tool} placement="top">
              <span className="text-xl text-gray-300 cursor-pointer">{techIcons[tool]}</span>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Project

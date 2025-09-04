import React, { useEffect } from "react"
import { IoIosClose } from "react-icons/io"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { techIcons } from "@/lib/Data"

const ProjectView = ({ project, setProject }) => {
  // إغلاق بالضغط على ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setProject({})
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [setProject])

  return (
    <AnimatePresence>
      {Object.keys(project).length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setProject({})}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white max-w-3xl w-full rounded-2xl shadow-2xl overflow-hidden h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل المودال
          >
            {/* Close Button */}
            <button
              onClick={() => setProject({})}
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-red-500 hover:text-white transition text-2xl"
            >
              <IoIosClose />
            </button>

            {/* Project Image */}
            <Image
              width={1200}
              height={600}
              src={project.img}
              alt={project.name}
              className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
            />

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scroll p-6 space-y-6">
              {/* Title & Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
                <p className="text-gray-600 mt-2 leading-relaxed">{project.description}</p>
              </div>

              {/* Tools */}
              {project.tools?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">🛠️ Tools:</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="text-2xl text-gray-700 hover:text-black transition"
                        title={tool}
                      >
                        {techIcons[tool] || tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-800">📌 Status:</span>{" "}
                    {project.status}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-800">⏳ Duration:</span>{" "}
                    {project.duration}
                  </p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-800">📅 Finished:</span>{" "}
                    {project.finishedAt}
                  </p>
                </div>
                {project.details && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-gray-800">ℹ️ Details:</span>{" "}
                      {project.details}
                    </p>
                  </div>
                )}
              </div>

              {/* Features */}
              {project.features?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">✨ Main Features:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt /> Live Preview
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectView


import Image from "next/image";
import React from "react";
import { techIcons } from "@/lib/Data";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const statusConfig = {
  Completed: { dot: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/30' },
  'In Progress': { dot: 'bg-amber-400', text: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/30' },
}

const Project = ({ project, setProject }) => {
  const status = statusConfig[project.status] || statusConfig.Completed;

  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover cursor-pointer">

      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.5)' }}
      />

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-black/40 flex-shrink-0">
        <Image
          src={project.img}
          width={600}
          height={350}
          alt={project.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status badge */}
        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${status.bg} ${status.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${project.status === 'In Progress' ? 'animate-ping' : ''}`} />
          {project.status}
        </div>

        {/* Quick action buttons — appear on hover */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors border border-white/20 text-sm"
              title="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors border border-white/20 text-sm"
              title="Source Code"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold font-space text-white group-hover:text-violet-300 transition-colors leading-tight">
            {project.name}
          </h3>
          <span className="text-gray-500 text-xs whitespace-nowrap pt-0.5">{project.finishedAt}</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-6 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tools + View Button */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          {/* Tool icons */}
          <div className="flex items-center gap-2 flex-wrap">
            {project.tools.slice(0, 5).map((tool, i) => (
              <span
                key={i}
                className="text-lg text-gray-500 hover:text-gray-300 transition-colors"
                title={tool}
              >
                {techIcons[tool] || '⚡'}
              </span>
            ))}
            {project.tools.length > 5 && (
              <span className="text-xs text-gray-600">+{project.tools.length - 5}</span>
            )}
          </div>

          {/* View More */}
          <button
            onClick={() => setProject(project)}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-violet-600/80 to-blue-600/80 hover:from-violet-600 hover:to-blue-600 text-white text-xs font-semibold transition-all duration-200 hover:shadow-glow-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

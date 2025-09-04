import Image from "next/image";
import React from "react";
import { techIcons } from "@/lib/Data";

const Project = ({ project, setProject, idx }) => {
  return (
    <div
      key={idx}
      className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-5 shadow-md hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 flex flex-col"
    >
      {/* Project Image */}
      <div className="rounded-xl overflow-hidden relative">
        <Image
          src={project.img}
          width={500}
          height={300}
          alt={project.name}
          className="w-full h-[200px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Info */}
      <div className="flex flex-col flex-1 mt-4">
        {/* Project Name */}
        <h3 className="text-lg text-white font-semibold">{project.name}</h3>

        {/* Project Description (2 lines only) */}
        <p className="text-sm text-gray-300 mt-2 line-clamp-2">
          {project.description}
        </p>

        {/* Tools & Button */}
        <div className="mt-auto flex items-center justify-between pt-4">
          {/* Tools */}
          <div className="flex items-center gap-2 flex-wrap">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="text-xl text-gray-300 hover:text-white transition-colors"
              >
                {techIcons[tool]}
              </span>
            ))}
          </div>

          {/* View Link */}
          <button
            onClick={() => setProject(project)}
            className="px-4 py-2 rounded-xl bg-Accent-100 text-Black font-semibold shadow-md hover:bg-Accent-200 transition-all duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

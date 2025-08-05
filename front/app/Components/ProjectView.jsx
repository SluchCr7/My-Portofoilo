import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const ProjectView = ({ project, setProject }) => {
  if (Object.keys(project).length === 0) return null;

  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white max-w-3xl w-full rounded-2xl shadow-lg overflow-auto h-[90vh] animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={() => setProject({})}
          className="absolute top-3 right-3 text-3xl text-gray-600 hover:text-red-500 transition"
        >
          <IoIosClose />
        </button>

        {/* Project Image */}
        <Image
          width={500}
          height={300}
          src={project.img}
          alt={project.name}
          className="w-full h-64 object-cover rounded-tl-2xl"
        />

        {/* Project Info */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{project.name}</h2>
          <p className="text-gray-600">{project.description}</p>

          {/* Tools */}
          <div className="flex flex-wrap gap-3 mt-2">
            {project.tools?.map((icon, index) => (
              <span key={index} className="text-2xl text-gray-700">
                {icon}
              </span>
            ))}
          </div>

          {/* Project Meta Info */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>
              <span className="font-semibold text-gray-700">Status:</span> {project.status}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Duration:</span> {project.duration}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Finished At:</span> {project.finishedAt}
            </p>
            {project.details && (
              <p>
                <span className="font-semibold text-gray-700">Details:</span> {project.details}
              </p>
            )}
          </div>

          {/* Features */}
          {project.features?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Main Features:</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition"
            >
              <FaExternalLinkAlt /> Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;

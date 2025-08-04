'use client'
import { projects } from '@/lib/Data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Portofoilo = () => {
  const [showNum , setShowNum] = useState(3)


  return (
    <div className='w-full bg-Black-100 px-6 md:px-12 py-20 flex flex-col items-center gap-12'>

      {/* Section Title */}
      <h2 className='text-2xl md:text-3xl font-bold tracking-wider text-white'>
        Small Collection Of <span className="text-purple-400">My Work</span>
      </h2>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl'>
        {projects
          .slice(0, showNum)
          .map((project, idx) => (
          <div
            key={idx}
            className='bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group'
          >
            {/* Project Image */}
            <div className='rounded-lg overflow-hidden'>
              <Image
                src={project.img}
                width={500}
                height={300}
                alt={project.name}
                className='w-full h-[200px] object-cover object-top group-hover:opacity-90 transition-all duration-300'
              />
            </div>

            {/* Project Name */}
            <h3 className='text-lg text-white font-semibold mt-4'>{project.name}</h3>
            <p className='text-sm text-gray-300 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestias voluptas exercitationem! Iure unde explicabo sequi praesentium ad facere ea earum, minus, cum ipsa nemo non. Maiores debitis amet libero.</p>
            {/* Tools & Link */}
            <div className='mt-3 flex items-center justify-between'>

              {/* Tools */}
              <div className='flex items-center gap-2 flex-wrap'>
                {project.tools.map((tool, i) => (
                  <Image
                    key={i}
                    src={tool}
                    width={28}
                    height={28}
                    alt='tool'
                    className='w-7 h-7 object-contain'
                  />
                ))}
              </div>

              {/* View Link */}
              <Link
                href={project.link}
                target='_blank'
                rel="noreferrer"
                className='text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors'
              >
                View →
              </Link>

            </div>
          </div>
        ))}
      </div>
        <button onClick={() => setShowNum((prev) => Math.min(prev + 3, projects.length))} className="mt-6 px-8 py-3 rounded-lg bg-Accent-100 text-Black font-semibold shadow-md hover:bg-Accent-200 transition-all duration-300">
          Show More
        </button>
    </div>
  )
}

export default Portofoilo

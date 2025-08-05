import Image from 'next/image'
import React from 'react'

const Project = ({project , setProject , idx}) => {
  return (
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
            <span>{tool}</span>
        ))}
        </div>

        {/* View Link */}
        <button onClick={() => setProject(project)} className='px-4 py-2 rounded-lg bg-Accent-100 text-Black font-semibold shadow-md hover:bg-Accent-200 transition-all duration-300'>
            View More
        </button>

    </div>
    </div>
  )
}

export default Project
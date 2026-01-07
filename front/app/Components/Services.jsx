import React from 'react'
// import { MdOutlineDesignServices } from "react-icons/md";
import { services } from '@/lib/Data';
import { FocusCards } from './ui/focus-cards';
const Services = () => {

  return (
    <div className='w-full px-6 md:px-12 py-20 flex flex-col items-center gap-16 z-[1000]'>
      {/* Section Title */}
      <div className="text-center space-y-4">
        <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-white'>
          Professional <span className="text-purple-400">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Tailored web solutions designed to elevate your business.
        </p>
      </div>

      <FocusCards cards={services} />
    </div>
  )
}

export default Services
import React from 'react'
// import { MdOutlineDesignServices } from "react-icons/md";
import { services } from '@/lib/Data';
import { FocusCards } from './ui/focus-cards';
const Services = () => {

  return (
    <div className='w-full px-6 md:px-12 py-16 flex flex-col items-center gap-12 z-[1000]'>
      {/* Section Title */}
      <h2 className='text-2xl md:text-3xl font-bold tracking-wider text-white'>
            My Services That <span className="text-purple-400">Provide To You</span>
      </h2>
      <FocusCards cards={services}/>
      {/* Services Container */}
      {/* <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {
            services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 rounded-2xl flex flex-col gap-4 text-white">
                    <div className="text-3xl md:text-4xl">{service.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold">{service.name}</h3>
                    <p className="text-sm md:text-base">{service.description}</p>
                </div>
            ))
        }
      </div> */}
    </div>
  )
}

export default Services
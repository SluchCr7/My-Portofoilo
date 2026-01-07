import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { reviews } from '@/lib/Data'

const Reviews = () => {

  return (
    <div id="Reviews" className='w-full bg-Black-100 px-6 md:px-12 py-16 flex flex-col items-center gap-12 z-[1000]'>

      {/* Section Title */}
      <h2 className='text-3xl md:text-5xl font-bold tracking-tight text-white mb-6'>
        Client <span className="text-purple-400">Testimonials</span>
      </h2>
      <div className='w-full'>
        <InfiniteMovingCards items={reviews} direction="left" />
      </div>
    </div>
  )
}

export default Reviews
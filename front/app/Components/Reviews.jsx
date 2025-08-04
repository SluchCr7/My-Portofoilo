import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { reviews } from '@/lib/Data'

const Reviews = () => {

  return (
    <div className='w-full bg-Black-100 px-6 md:px-12 py-16 flex flex-col items-center gap-12 z-[1000]'>

        {/* Section Title */}
        <h2 className='text-2xl md:text-3xl font-bold tracking-wider text-white'>
            Some of my Clients <span className="text-purple-400">Reviews</span>
        </h2>
        <div className='w-full'>
            <InfiniteMovingCards items={reviews} direction="left" pauseOnHover />
        </div>
    </div>
  )
}

export default Reviews
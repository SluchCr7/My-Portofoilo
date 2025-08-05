import React from 'react';
import { gridItems } from '../../lib/Data';
import Image from 'next/image';

const GridOptions = () => {
  return  (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 p-4 w-full">
      
      {/* Main block - large section */}
      <div className="relative overflow-hidden md:col-span-6 lg:col-span-3 bg-Black-100 border border-Black-300 rounded-xl w-full h-[60vh]">
        <Image 
          src="/assets/b1.svg"
          alt="image-one"
          fill
          className="object-cover object-center rounded-xl"
        />
        {/* Optional content over the image */}
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-2xl font-bold w-[70%]">I prioritize client collaboration, fostering open communication </h2>
        </div>
      </div>

        {/* Column containing two stacked blocks */}
        <div className="md:col-span-3 lg:col-span-3  flex flex-col gap-4 w-full">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-xl h-full p-6 text-white w-full flex items-center justify-center flex-col gap-4 shadow-lg">
            <h3 className="text-2xl font-semibold">Download My CV</h3>
            <button className="px-6 py-2 bg-Black-100 text-white font-medium rounded-lg hover:bg-blue-100 transition">
              Download
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-xl h-full p-6 text-white w-full flex items-center justify-center flex-col gap-4 shadow-lg">
            <h3 className="text-2xl font-semibold">Do You Want to start ?</h3>
            <button className="px-6 py-2 bg-Black-100 text-white font-medium rounded-lg hover:bg-blue-100 transition">
              Contact With Me
            </button>
          </div>
        </div>


      <div className="md:col-span-3 lg:col-span-3 h-[60vh] relative overflow-hidden bg-Black-100 border border-Black-300 rounded-xl w-full">
        {/* الصورة الرئيسية */}
        <Image 
          src="/assets/grid.svg"
          alt="Main image"
          fill
          className="object-cover object-center rounded-xl"
        />

        {/* subimage في الزاوية اليمنى السفلى */}
        <div className="absolute bottom-0 -right-3 w-[50%] h-[70%] rounded-md overflow-hidden z-10">
          <Image 
            src="/assets/b5.svg"
            alt="Sub image"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* النص في الزاوية اليسرى السفلى */}
        <div className="flex items-center p-4 min-h-full w-full text-white z-10">
          <div className='flex items-start flex-col gap-3'>
            <span className='text-sm font-bold'>The Inside Scoop</span>
            <h2 className="text-2xl font-bold w-[50%] text-Gray-300">
              Currently building a JS Animation library
            </h2>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 lg:col-span-3 h-[60vh] relative overflow-hidden bg-Black-100 border border-Black-300 rounded-xl w-full">
        {/* الصورة الرئيسية */}
        <Image 
          src="/assets/grid.svg"
          alt="Main image"
          fill
          className="object-cover object-center rounded-xl"
        />
        {/* subimage في الزاوية اليمنى السفلى */}
        <div className="absolute bottom-0 -right-3 w-[60%] h-[50%] rounded-md overflow-hidden z-10">
            <Image 
              src="/assets/b4.svg"
              alt="Sub image"
              fill
              className="object-cover object-center"
            />
        </div>
        <div className="flex items-center p-4 min-h-full w-full text-white z-10">
          <h2 className="text-2xl font-bold w-[50%] text-white">
            Tech enthusiast with a passion for development.
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default GridOptions 
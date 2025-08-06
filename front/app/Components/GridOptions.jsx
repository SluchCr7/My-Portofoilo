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
              <a href="/Profile.pdf" download className="btn">Download CV</a>
            </button>
          </div>
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 rounded-xl h-full p-6 text-white w-full flex items-center justify-center flex-col gap-4 shadow-lg">
            <h3 className="text-2xl font-semibold">Do You Want to start ?</h3>
            <button className="px-6 py-2 bg-Black-100 text-white font-medium rounded-lg hover:bg-blue-100 transition">
              Contact With Me
            </button>
          </div>
        </div>


      {/* كارت احترافي مقسم داخليًا مع ترتيب متقن */}
      <div className="md:col-span-3 lg:col-span-3 h-[60vh] bg-gradient-to-br from-Black-100 via-Black-200 to-Black-300 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">

        {/* القسم الأيسر: الصورة الرئيسية */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <Image
            src="/assets/grid.svg"
            alt="Main image"
            fill
            className="object-cover object-center"
          />

          {/* sub image فوق الصورة الرئيسية بشكل حديث */}
          <div className="absolute bottom-4 left-4 w-[60%] h-[45%] rounded-xl overflow-hidden shadow-md border border-Black-300 z-10">
            <Image
              src="/assets/b5.svg"
              alt="Sub image"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* القسم الأيمن: النصوص والمحتوى */}
        <div className="flex flex-col justify-center p-6 md:w-1/2 w-full text-white gap-4">
          <span className="text-sm font-semibold text-Gray-200">The Inside Scoop</span>
          <h2 className="text-2xl md:text-3xl font-bold text-Gray-100 leading-snug">
            Currently building a <span className="text-blue-500">JS Animation</span> library
          </h2>
          <p className="text-Gray-300 text-sm">
            Animating user interfaces from scratch to deliver immersive experiences.
          </p>
          <button className="mt-4 w-fit px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white text-sm font-medium">
            Learn More
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
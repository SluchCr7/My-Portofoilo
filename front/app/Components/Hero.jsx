'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FaGithub , FaLinkedin , FaInstagram , FaTwitter, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import { icons } from '@/lib/Data';
const Hero = () => {
  return (
    <div className='relative pt-36 pb-20 min-h-[100vh]'>
      
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="blue" />
        <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>

      {/* Background Grid */}
      <div className="absolute top-0 left-0 z-0 flex h-full w-full items-center justify-center bg-white dark:bg-Black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-Black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]" />
      </div>

      {/* Hero Content */}
      <div className='relative z-10 flex justify-center mt-10'>
        <div className='max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] text-center flex flex-col items-center gap-4'>

          {/* Subheading */}
          <h1 className='text-xs md:text-sm tracking-[6px] uppercase font-semibold text-blue-500'>
            Dynamic Web Pages Developer
          </h1>

          {/* Main heading with animation */}
          <TextGenerateEffect
            className='text-center text-[38px] md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]'
            words='Building Modern Web Solutions with React & Node'
          />

          {/* Description */}
          <p className='pt-3 text-gray-300 text-sm md:text-base lg:text-xl max-w-xl'>
            I&apos;m <span className="text-blue-400 font-medium">Sluch</span> and I bring full-stack web applications to life with performance and style.
          </p>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-2 text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300">
            Explore My Work
          </button>
          <div className='absolute -bottom-28 flex items-center gap-10'>
            {icons.map(({link , Icon} , idx) => (
              <Link href={link} key={idx} className="text-lg text-gray-300 hover:text-gray-400 transition-all duration-300" >
                <Icon/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

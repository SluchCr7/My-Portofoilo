'use client'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import { icons } from '@/lib/Data';
const Hero = () => {
  return (
    <div id="home" className='relative pt-36 pb-20 min-h-[100vh]'>

      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="blue" />
        <Spotlight className="top-10 left-full w-[50vw] h-[80vh]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>

      {/* Background Grid */}
      <div className="absolute top-0 left-0 bottom-0 z-0 flex h-full w-full items-center justify-center bg-white dark:bg-Black-100">
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
          <h1 className='text-xs md:text-sm tracking-[6px] uppercase font-bold text-blue-400 mb-4'>
            Professional MERN Stack Developer
          </h1>

          {/* Main heading with animation */}
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl'
            words='Crafting Exceptional Digital Experiences with Precision'
          />

          {/* Description */}
          <p className='pt-6 text-gray-200 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed'>
            I&apos;m <span className="text-blue-400 font-bold">Sluch</span>, a dedicated Website Developer specializing in the MERN Stack. I transform complex requirements into seamless, high-performance web applications that drive success.
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center">
            <button className="px-8 py-3 text-sm md:text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all duration-300 transform hover:-translate-y-1">
              <Link href="#Projects">View Projects</Link>
            </button>
            <button className="px-8 py-3 text-sm md:text-base font-semibold border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-full transition-all duration-300">
              <Link href="#Contact">Contact Me</Link>
            </button>
          </div>

          <div className='absolute -bottom-32 flex items-center gap-8'>
            {icons.map(({ link, Icon }, idx) => (
              <Link href={link} key={idx} className="text-2xl text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110" >
                <Icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

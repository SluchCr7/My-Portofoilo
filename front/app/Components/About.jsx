'use client'
import { stats, tools } from '@/lib/Data'
import Image from 'next/image'
import React from 'react'
import CountUp from "react-countup"

const About = () => {


  return (
    <div id={"About"} className="w-full px-6 md:px-12 py-16 flex flex-col items-center gap-12 z-[1000]">
      
      {/* About Section */}
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl p-8 rounded-2xl flex flex-col gap-4 text-white">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">About Me</h2>
        <p className="text-gray-300 text-sm leading-6 md:text-base w-full md:w-[80%]">
          I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. 
          I build scalable and interactive applications using the MERN stack and beyond. 
          From idea to deployment, I&apos;m committed to clean, efficient, and user-centered development.
        </p>
      </div>

      {/* Tools Section */}
      <div className="w-full max-w-5xl flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-semibold text-white">🛠️ Essential Tools & Technologies</h2>
        <p className="text-sm text-gray-400 w-full md:w-[80%]">
          Explore the technologies that power my development workflow and bring ideas to life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="bg-Black-100 p-2 rounded-lg">
                <Image src={tool.img} width={40} height={40} alt={tool.name} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-white text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-5xl flex flex-col gap-6">
        <h2 className="text-xl md:text-2xl font-semibold text-white">📊 My Stats</h2>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-2 backdrop-blur-sm shadow-lg">
              <CountUp
                end={stat.num}
                duration={4}
                delay={1}
                className="text-4xl font-extrabold text-accent"
              />
              <p className="text-sm text-gray-300 text-center">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About

// 'use client'
// import { stats, tools } from '@/lib/Data'
// import Image from 'next/image'
// import React from 'react'
// import CountUp from "react-countup"

// const About = () => {
//   return (
//     <div id="About" className="w-full px-6 md:px-12 py-16 flex flex-col items-center gap-16 z-[1000] relative">
//       {/* About Section */}
//       <div className="w-full max-w-5xl bg-Black-200 backdrop-blur-md border border-Gray-200 shadow-xl p-8 rounded-2xl flex flex-col gap-4 text-white">
//         <h2 className="text-2xl md:text-3xl font-bold tracking-wide">About Me</h2>
//         <p className="text-Gray-400 text-sm leading-6 md:text-base w-full md:w-[80%]">
//           I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. 
//           I build scalable and interactive applications using the MERN stack and beyond. 
//           From idea to deployment, I&apos;m committed to clean, efficient, and user-centered development.
//         </p>
//         <p className="text-Gray-400 text-sm leading-6 md:text-base w-full md:w-[80%]">
//           Performance and scalability are always top priorities in my development process. I write clean, maintainable code with a focus on optimizing both frontend and backend systems.
//         </p>
//       </div>

//       {/* Tools Section */}
//       <div className="w-full max-w-5xl flex flex-col gap-6">
//         <h2 className="text-xl md:text-2xl font-semibold text-white">🛠️ Essential Tools & Technologies</h2>
//         <p className="text-sm text-Gray-400 w-full md:w-[80%]">
//           Explore the technologies that power my development workflow and bring ideas to life.
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {tools.map((tool, idx) => (
//             <div key={idx} className="flex items-center gap-3 bg-Black-100 backdrop-blur-sm border border-Gray-200 rounded-xl p-3 hover:scale-105 hover:shadow-xl transition-all duration-300">
//               <div className="bg-Black-300 p-2 rounded-lg">
//                 <span className="text-3xl">{tool.icon}</span>
//               </div>
//               <span className="text-white text-sm font-medium">{tool.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="w-full max-w-5xl flex flex-col gap-6">
//         <h2 className="text-xl md:text-2xl font-semibold text-white">📊 My Stats</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
//           {stats.map((stat, i) => (
//             <div key={i} className="bg-Black-100 border border-Gray-200 rounded-xl p-6 flex flex-col items-center gap-2 backdrop-blur-sm shadow-lg">
//               <CountUp
//                 end={stat.num}
//                 duration={4}
//                 delay={1}
//                 className="text-4xl font-extrabold text-Primary"
//               />
//               <p className="text-sm text-Gray-400 text-center">{stat.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About


'use client'
import { stats, tools } from '@/lib/Data'
import Image from 'next/image'
import React from 'react'
import CountUp from "react-countup"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div 
      id="About" 
      className="w-full px-6 md:px-12 py-20 flex flex-col items-center gap-20 relative bg-gradient-to-br from-black to-gray-900"
    >
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center bg-Black-200/60 backdrop-blur-md border border-Gray-200 shadow-xl p-10 rounded-2xl"
      >
        {/* صورة شخصية */}
        <div className="flex justify-center">
          <Image
            src="/me.jpg" // ضع صورتك هنا
            alt="My Photo"
            width={280}
            height={280}
            className="rounded-full shadow-2xl border-4 border-Primary object-cover"
          />
        </div>

        {/* النص */}
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">About Me</h2>
          <p className="text-Gray-400 text-base leading-7">
            From building my first website at 16 to scaling apps with thousands of users, 
            I’ve always loved turning ideas into digital experiences. 
            As a passionate full-stack developer, I bring both creativity and precision into every project.
          </p>
          <p className="text-Gray-400 text-base leading-7">
            My focus is clean code, performance, and scalability — creating solutions that not only work but also inspire.
          </p>
          <div className="mt-4">
            <Button className="bg-Primary text-white px-6 py-2 rounded-xl shadow-lg hover:scale-105 transition">
              Let’s Work Together 🚀
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl flex flex-col gap-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">🛠️ Essential Tools & Technologies</h2>
        <p className="text-sm text-Gray-400 w-full md:w-[70%]">
          These are the technologies I use daily to craft scalable and impactful web solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.05 }} 
              className="flex items-center gap-3 bg-Black-100/70 backdrop-blur-sm border border-Gray-200 rounded-xl p-4 shadow-md"
            >
              <div className="bg-Black-300 p-3 rounded-lg">
                <span className="text-3xl">{tool.icon}</span>
              </div>
              <span className="text-white text-sm font-medium">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl flex flex-col gap-6"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white">📊 My Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }} 
              className="bg-Black-100/80 border border-Gray-200 rounded-xl p-8 flex flex-col items-center gap-2 backdrop-blur-sm shadow-xl"
            >
              <CountUp
                end={stat.num}
                duration={4}
                delay={1}
                className="text-4xl font-extrabold text-Primary"
              />
              <p className="text-sm text-Gray-400 text-center">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}  

export default About

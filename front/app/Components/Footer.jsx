'use client'
import React, { useState } from "react";
import { icons } from "@/lib/Data";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import Contact from "./Contact";

const Footer = () => {
  const year = new Date().getFullYear();
  const [isOpen , setIsOpen] = useState(false)
  return (
    <>
      <Contact isOpen={isOpen} setIsOpen={setIsOpen} />    
      <footer className="w-full relative overflow-hidden">

        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-900/15 blur-[80px] rounded-full pointer-events-none" />

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col items-center text-center px-6 py-24 gap-8"
        >
          {/* Decorative line top */}
          <div className="section-divider w-full mb-4" />

          <span className="tag-pill">Available for Work</span>

          <h2 className="text-4xl md:text-6xl font-black font-space text-white leading-tight max-w-2xl">
            Ready to Build{' '}
            <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            Let&apos;s collaborate and turn your vision into a stunning, high-performance web application.
            I&apos;m just one message away.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center gap-2 px-10 py-4 rounded-2xl text-white font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 30px rgba(99,102,241,0.4)' }}
            >
              Start a Project
              <span className="text-white/60 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a href="/Profile.pdf" download>
              <button className="px-10 py-4 rounded-2xl glass-card text-white font-bold text-base transition-all duration-300 hover:-translate-y-1">
                Download CV
              </button>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-2">
            {icons.map(({ link, Icon }, idx) => (
              <Link
                key={idx}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl glass-card text-gray-400 hover:text-white text-lg transition-all duration-300 hover:scale-110 hover:shadow-glow-sm"
              >
                <Icon />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="relative" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>© {year} <span className="text-gray-300 font-semibold">Sluch</span>. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with <FaHeart className="text-red-500 text-xs" /> using Next.js & Tailwind CSS
            </p>
            <p>Ahmed (Sluch) — Full Stack Developer</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

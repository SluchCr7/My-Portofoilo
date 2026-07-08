'use client';
import React, { useState, useEffect } from 'react';
import { links } from '@/lib/Data';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = links.map(l => l.url.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── Main Nav ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[1000] px-4 py-3"
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-2xl px-6 py-3 ${
            scrolled
              ? 'bg-[#000319]/80 backdrop-blur-xl border border-white/[0.07] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-glow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-base font-space">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold font-space text-lg leading-none">Sluch</span>
              <p className="text-gray-500 text-[10px] font-medium tracking-wider leading-none mt-0.5">Full Stack Dev</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const id = link.url.replace('#', '');
              const isActive = active === id;
              return (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl bg-white/8 border border-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{link.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/Profile.pdf" download>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-gray-300 hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5">
                <FaDownload className="text-xs text-violet-400" />
                CV
              </button>
            </a>
            <Link href="#Projects">
              <button
                className="px-5 py-2 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-sm"
                style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}
              >
                View Work
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2.5 rounded-xl glass-card text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-[999] rounded-2xl p-3 flex flex-col gap-1"
            style={{
              background: 'rgba(10,10,26,0.97)',
              border: '1px solid rgba(99,102,241,0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
            }}
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
              >
                {link.title}
              </Link>
            ))}

            <div className="h-px bg-white/8 my-1 mx-2" />

            <div className="flex gap-2 p-1">
              <a href="/Profile.pdf" download className="flex-1">
                <button className="w-full py-2.5 rounded-xl glass-card text-white text-sm font-medium text-center">
                  Download CV
                </button>
              </a>
              <Link href="#Projects" onClick={() => setMobileOpen(false)} className="flex-1">
                <button
                  className="w-full py-2.5 rounded-xl text-white text-sm font-semibold text-center"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #3b82f6)' }}
                >
                  View Work
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

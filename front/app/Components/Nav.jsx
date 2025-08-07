'use client';
import React from 'react';
import { links } from '@/lib/Data';
import Link from 'next/link';
import { FloatingNav } from './ui/floating-navbar';

const Nav = () => {
  return (
    // <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[1001] 
    //                 bg-white/10 backdrop-blur-md border border-white/20 
    //                 px-8 py-3 rounded-full shadow-lg
    //                 flex gap-6 items-center justify-center 
    //                 w-[90%] md:w-auto">
    //   {links.map((link) => (
    //     <Link
    //       key={link.id}
    //       href={link.url}
    //       className="relative text-sm md:text-base font-medium text-white transition duration-300 
    //                  hover:text-Accent-100"
    //     >
    //       <span className="relative z-10">{link.title}</span>
    //       <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-Accent-100 transition-all duration-300 
    //                       group-hover:w-full"></span>
    //     </Link>
    //   ))}
    // </nav>
    <FloatingNav navItems={links} />
  );
};

export default Nav;

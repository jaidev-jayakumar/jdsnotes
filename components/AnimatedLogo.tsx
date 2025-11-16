"use client";

import Link from "next/link";
import { useState } from "react";

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href="/" 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Main title */}
        <h1 className="text-3xl md:text-[2.5rem] font-serif leading-tight transition-all duration-300">
          <span className="relative inline-block">
            Jaidev Jayakumar 
            {/* Accent line under name */}
            <span 
              className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-500 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            />
          </span>
        </h1>
        
        {/* Tagline appears on hover */}
        <div className={`absolute -bottom-6 left-0 text-[10px] font-mono text-accent uppercase tracking-widest transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          improving healthcare by >=1%
        </div>
      </div>
    </Link>
  );
}


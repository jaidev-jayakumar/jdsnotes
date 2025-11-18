'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BookCardProps {
  title: string;
  author?: string;
  image: string;
  rotation?: number;
  scale?: number;
  showTitle?: boolean;
}

export default function BookCard({ 
  title, 
  author, 
  image, 
  rotation = 0,
  scale = 1,
  showTitle = true
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: `rotate(${isHovered ? rotation * 0.5 : rotation}deg) scale(${isHovered ? 1.02 : scale})`,
          transformOrigin: 'center center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Book Container with realistic depth */}
        <div className="relative w-full">
          {/* Main Book Cover */}
          <div className="relative w-full rounded-[2px] overflow-hidden shadow-[4px_8px_16px_rgba(0,0,0,0.15),8px_16px_32px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-[6px_12px_24px_rgba(0,0,0,0.2),12px_24px_48px_rgba(0,0,0,0.15)]">
            <Image
              src={image}
              alt={title}
              width={300}
              height={450}
              className="w-full h-auto block"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Realistic Page Stack Effect - Right Edge */}
          <div className="absolute top-[3px] right-[-2px] bottom-[3px] w-[2px] bg-white/90 rounded-r-[1px]" />
          <div className="absolute top-[4px] right-[-3px] bottom-[4px] w-[1px] bg-gray-100/80" />
          <div className="absolute top-[5px] right-[-4px] bottom-[5px] w-[1px] bg-gray-200/70" />
          
          {/* Bottom shadow for depth */}
          <div className="absolute bottom-[-2px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-black/10 to-transparent blur-[1px]" />
        </div>
      </div>

      {/* Book Title - Static below the book (optional) */}
      {showTitle && (
        <div className="mt-4 text-center">
          <h3 className="text-foreground font-serif text-sm md:text-base font-normal">
            {title}
          </h3>
          {author && (
            <p className="text-muted text-xs font-mono mt-1">
              {author}
            </p>
          )}
        </div>
      )}
    </div>
  );
}


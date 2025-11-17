"use client";

import Link from "next/link";
import { useState } from "react";

const placesLived = [
  { name: "Kerala, India", emoji: "🌴", vibe: "home home", x: 10 },
  { name: "Vellore, India", emoji: "🎓", vibe: "undergrad years", x: 30 },
  { name: "Durham, NC", emoji: "🏀", vibe: "duke days", x: 60 },
  { name: "San Francisco, CA", emoji: "🌉", vibe: "home now", x: 90 },
];

export default function AnimatedLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!showPlaces) {
      setAnimating(true);
      // Don't stop animation - let it stay at San Francisco
    } else {
      setAnimating(false);
    }
    setShowPlaces(!showPlaces);
  };

  return (
    <div className="relative">
      <div 
        className="group relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
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
            improving healthcare by {'>'}=1%
          </div>
        </div>
      </div>

      {/* Journey animation */}
      {showPlaces && (
        <div className="absolute top-full left-0 mt-8 w-[550px] border border-foreground/10 bg-background shadow-lg 
          animate-fadeIn z-50 p-6">
          <div className="mb-6">
            <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
              places i've called home
            </p>
          </div>
          
          {/* Journey path visualization */}
          <div className="relative w-full h-[180px] mb-4">
            {/* Wavy diagonal path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 180" preserveAspectRatio="none">
              <path 
                d="M 30 150 Q 150 120, 200 80 T 460 40" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeDasharray="8,8"
                fill="none"
                className="text-accent/30"
              />
            </svg>
            
            {/* City stops with emojis and vibes */}
            <div className="absolute" style={{ left: '30px', top: '150px' }}>
              <span className="text-[20px]">🌴</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Kerala, India</div>
              <div className="text-[8px] font-mono text-muted/60 italic">home home</div>
            </div>
            <div className="absolute" style={{ left: '150px', top: '100px' }}>
              <span className="text-[20px]">🎓</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Vellore, India</div>
              <div className="text-[8px] font-mono text-muted/60 italic">undergrad years</div>
            </div>
            <div className="absolute" style={{ left: '280px', top: '60px' }}>
              <span className="text-[20px]">🏀</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">Durham, NC</div>
              <div className="text-[8px] font-mono text-muted/60 italic">duke days</div>
            </div>
            <div className="absolute" style={{ left: '450px', top: '40px' }}>
              <span className="text-[20px]">🌉</span>
              <div className="text-[9px] font-mono text-muted mt-1 whitespace-nowrap">San Francisco</div>
              <div className="text-[8px] font-mono text-muted/60 italic">home now</div>
            </div>
            
            {/* Animated bike - follows the path exactly */}
            {animating && (
              <div 
                className="absolute text-[24px] z-20"
                style={{
                  offsetPath: 'path("M 30 150 Q 150 120, 200 80 T 460 40")',
                  offsetRotate: '0deg',
                  animation: 'bikeRide 6s ease-in-out forwards',
                  transform: 'scaleX(-1) translate(-12px, -12px)' // Flip and center on path
                }}
              >
                🚴
              </div>
            )}
          </div>
          
          <button
            onClick={() => {
              setShowPlaces(false);
              setAnimating(false);
            }}
            className="mt-4 pt-3 border-t border-foreground/10 w-full text-[10px] font-mono text-muted 
              hover:text-accent transition-colors text-center"
          >
            close →
          </button>
        </div>
      )}
      
      {/* CSS for bike animation */}
      <style jsx>{`
        @keyframes bikeRide {
          0% { 
            offset-distance: 0%;
          }
          100% { 
            offset-distance: 100%;
          }
        }
      `}</style>
    </div>
  );
}


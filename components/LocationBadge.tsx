'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const favoritePlaces = [
  { name: "Reveille", emoji: "☕", vibe: "work and chill" },
  { name: "Coffee Movement", emoji: "☕", vibe: "best in the city" },
  { name: "Starbucks Presidio", emoji: "☕", vibe: "sunday mornings" },
  { name: "Golden Boy Pizza", emoji: "🍕", vibe: "north beach classic" },
  { name: "Kokkari", emoji: "🇬🇷", vibe: "10/10 greek food" },
  { name: "Avenues", emoji: "🍽️", vibe: "hole in the wall in sunset" },
  { name: "Z&Y", emoji: "🌶️", vibe: "best szechuan" },
  { name: "Lafayette Park", emoji: "🌳", vibe: "good views" },
  { name: "Ferry Building", emoji: "🏛️", vibe: "farmers market" },
  { name: "Billionaire's Row to Lafayette", emoji: "🚶", vibe: "best walk in the city" },
  { name: "Lands End → Presidio → Marina", emoji: "🚴", vibe: "go to biking route" },
];

export default function LocationBadge() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [showSpots, setShowSpots] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const sfTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(new Date());
      setCurrentTime(sfTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSpots(false);
      }
    };

    if (showSpots) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSpots]);

  return (
    <div ref={dropdownRef} className="relative flex flex-col items-end">
      <button
        onClick={() => setShowSpots(!showSpots)}
        className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 border border-foreground/10 bg-background/80 backdrop-blur-sm
          hover:border-accent/30 transition-all duration-300 cursor-pointer group"
        title="Click to see my favorite SF spots"
      >
        {/* Pin emoji - rotates on hover */}
        <span className="text-[12px] md:text-[14px] transition-transform duration-300 group-hover:scale-110">
          📍
        </span>
        
        {/* Golden Gate Bridge tiny image */}
        <div className="relative w-5 h-5 md:w-6 md:h-6 overflow-hidden">
          <Image
            src="/golden-gate.jpg"
            alt="Golden Gate Bridge"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Location and time */}
        <div className="flex flex-col">
          <span className="text-[10px] md:text-[11px] font-mono text-muted whitespace-nowrap">
            San Francisco, CA
          </span>
          {currentTime && (
            <span className="text-[9px] md:text-[10px] font-mono text-muted/60">
              {currentTime}
            </span>
          )}
        </div>
      </button>
      
      {/* Source code link */}
      <a
        href="https://github.com/jaidev-jayakumar/jdsnotes"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 flex items-center gap-1 text-[9px] md:text-[10px] font-mono text-muted/40 hover:text-accent/60 transition-colors"
      >
        <svg 
          width="10" 
          height="10" 
          viewBox="0 0 16 16" 
          fill="currentColor"
          className="opacity-60"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        see source code
      </a>

      {/* Dropdown with favorite spots */}
      {showSpots && (
        <div className="absolute top-full right-0 mt-2 w-[85vw] md:w-72 max-w-[300px] border border-foreground/10 bg-background shadow-lg 
          animate-fadeIn z-50 p-3 md:p-4 max-h-[70vh] md:max-h-96 overflow-y-auto">
          <div className="mb-3 pb-2 border-b border-foreground/10">
            <p className="text-[11px] font-mono text-accent uppercase tracking-wider">
              my favorite sf spots
            </p>
          </div>
          <div className="space-y-2">
            {favoritePlaces.map((place, index) => (
              <div 
                key={index}
                className="flex items-start gap-2 text-[12px] font-mono group/item cursor-default
                  hover:translate-x-1 transition-transform duration-200"
              >
                <span className="text-[14px] flex-shrink-0">{place.emoji}</span>
                <div className="flex flex-col">
                  <span className="text-foreground group-hover/item:text-accent transition-colors">
                    {place.name}
                  </span>
                  <span className="text-[10px] text-muted/70 italic">
                    {place.vibe}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowSpots(false)}
            className="mt-3 pt-2 border-t border-foreground/10 w-full text-[10px] font-mono text-muted 
              hover:text-accent transition-colors text-center"
          >
            close →
          </button>
        </div>
      )}
    </div>
  );
}


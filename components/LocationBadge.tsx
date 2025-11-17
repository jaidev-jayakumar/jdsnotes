'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LocationBadge() {
  const [currentTime, setCurrentTime] = useState<string>("");

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

  return (
    <div className="flex items-center gap-2 px-3 py-2 border border-foreground/10 bg-background/80 backdrop-blur-sm">
      {/* Pin emoji */}
      <span className="text-[14px]">📍</span>
      
      {/* Golden Gate Bridge tiny image */}
      <div className="relative w-6 h-6 overflow-hidden">
        <Image
          src="/golden-gate.jpg"
          alt="Golden Gate Bridge"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Location and time */}
      <div className="flex flex-col">
        <span className="text-[11px] font-mono text-muted whitespace-nowrap">
          San Francisco, CA
        </span>
        {currentTime && (
          <span className="text-[10px] font-mono text-muted/60">
            {currentTime}
          </span>
        )}
      </div>
    </div>
  );
}


"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [readingTime, setReadingTime] = useState<number>(0);

  useEffect(() => {
    // Calculate reading time based on word count
    const text = document.body.innerText || "";
    const wordCount = text.trim().split(/\s+/).length;
    const wordsPerMinute = 200;
    const time = Math.ceil(wordCount / wordsPerMinute);
    setReadingTime(time);
  }, []);

  if (readingTime === 0) return null;

  return (
    <div className="fixed bottom-8 left-8 text-[11px] text-muted font-mono 
      bg-background/80 backdrop-blur-sm px-3 py-2 border border-foreground/10
      opacity-0 hover:opacity-100 transition-opacity duration-300">
      ~{readingTime} min read
    </div>
  );
}


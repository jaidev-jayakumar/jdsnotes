"use client";

import { useState } from "react";

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "stats", label: "Overview" },
    { id: "research", label: "Research" },
  ];

  return (
    <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-30">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              setActiveSection(section.id);
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3"
          >
            <div className={`w-8 h-[1px] transition-all duration-300 ${
              activeSection === section.id 
                ? 'bg-accent' 
                : 'bg-foreground/20 group-hover:bg-accent/50'
            }`} />
            <span className={`text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
              activeSection === section.id
                ? 'text-accent opacity-100'
                : 'text-muted opacity-0 group-hover:opacity-100'
            }`}>
              {section.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}


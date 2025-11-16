import Image from "next/image";

export default function LocationBadge() {
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
      
      {/* Location text */}
      <span className="text-[11px] font-mono text-muted whitespace-nowrap">
        San Francisco, CA
      </span>
    </div>
  );
}


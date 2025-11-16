import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";
import LocationBadge from "./LocationBadge";

export default function Header() {
  return (
    <header className="border-b border-foreground/5 bg-background sticky top-0 z-40 backdrop-blur-sm bg-background/95 relative">
      {/* Location badge - absolute positioned top right */}
      <div className="absolute top-8 md:top-10 right-6 md:right-8 lg:right-12">
        <LocationBadge />
      </div>
      
      <nav className="container-custom py-8 md:py-10">
        <div className="flex items-start justify-between">
          <AnimatedLogo />
          
          {/* Navigation */}
          <ul className="flex items-center gap-6 md:gap-8 pt-1">
            <li>
              <Link href="/" className="link-underline text-[14px] font-mono relative group">
                <span className="relative z-10 transition-colors group-hover:text-accent">Home</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
            <li>
              <Link href="/work" className="link-underline text-[14px] font-mono relative group">
                <span className="relative z-10 transition-colors group-hover:text-accent">Research</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline text-[14px] font-mono relative group">
                <span className="relative z-10 transition-colors group-hover:text-accent">Join Us</span>
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


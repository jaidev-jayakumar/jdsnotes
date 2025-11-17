import Image from "next/image";
import { ImageSwiper } from "./ImageSwiper";

interface ProjectCardProps {
  title: string;
  description: string;
  date?: string;
  href?: string;
  highlighted?: boolean;
  tags?: string[];
  index?: number;
  image?: string;
  swiperImages?: string;
  video?: string;
  techStack?: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  date,
  href,
  highlighted = false,
  tags = [],
  index = 0,
  image,
  swiperImages,
  video,
  techStack = [],
  githubUrl,
}: ProjectCardProps) {
  const content = (
    <article className="group cursor-pointer border border-foreground/10 p-6 md:p-8 
      transition-all duration-500 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(139,69,19,0.12)]
      hover:-translate-y-1 bg-background hover:bg-accent/[0.02] relative overflow-hidden h-full flex flex-col">
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-accent to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-accent to-transparent" />
      </div>

      {/* Index number */}
      <div className="text-[11px] font-mono text-accent/40 mb-3 tracking-widest">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Project image, video or swiper */}
      {swiperImages ? (
        <div className="mb-4 flex justify-center">
          <ImageSwiper 
            images={swiperImages} 
            cardWidth={180}
            cardHeight={320}
          />
        </div>
      ) : video ? (
        <div className="relative w-full h-48 mb-4 overflow-hidden bg-foreground/5">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ) : image ? (
        <div className="relative w-full h-48 mb-4 overflow-hidden bg-foreground/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}

      {/* Title and date */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-[18px] md:text-[20px] font-serif leading-tight 
            transition-colors duration-300 group-hover:text-accent flex-1">
            {title}
          </h3>
         
        </div>
        {date && (
          <time className="text-[12px] font-mono text-muted">
            {date}
          </time>
        )}
      </div>

      {/* Description */}
      <p className="text-[14px] leading-[1.7] text-muted mb-4 font-mono flex-1">
        {description}
      </p>

      {/* Tech Stack */}
      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-[11px] font-mono bg-foreground/5 text-foreground/70 
                rounded-sm hover:bg-foreground/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="mt-4 flex items-center gap-4">
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[12px] font-mono text-foreground hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>Website</span>
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[12px] font-mono text-foreground hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Github</span>
          </a>
        )}
      </div>
    </article>
  );

  return content;
}


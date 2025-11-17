import Link from "next/link";
import Image from "next/image";
import ProjectTag from "./ProjectTag";

interface ProjectCardProps {
  title: string;
  description: string;
  date?: string;
  href?: string;
  highlighted?: boolean;
  tags?: string[];
  index?: number;
  image?: string;
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
}: ProjectCardProps) {
  const content = (
    <article className="group cursor-pointer border border-foreground/10 p-6 md:p-8 
      transition-all duration-500 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(139,69,19,0.12)]
      hover:-translate-y-1 bg-background hover:bg-accent/[0.02] relative overflow-hidden">
      
      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-accent to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-accent to-transparent" />
      </div>

      {/* Index number */}
      <div className="text-[11px] font-mono text-accent/40 mb-3 tracking-widest">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Project image */}
      {image && (
        <div className="relative w-full h-48 mb-4 overflow-hidden bg-foreground/5">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Title and date */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-[18px] md:text-[20px] font-serif leading-tight 
            transition-colors duration-300 group-hover:text-accent flex-1">
            {title}
          </h3>
          {highlighted && (
            <div className="px-2 py-1 text-[9px] font-mono uppercase tracking-wider 
              bg-accent/10 text-accent border border-accent/30">
              Featured
            </div>
          )}
        </div>
        {date && (
          <time className="text-[12px] font-mono text-muted">
            {date}
          </time>
        )}
      </div>

      {/* Description */}
      <p className="text-[14px] leading-[1.7] text-muted mb-4 font-mono">
        {description}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <ProjectTag key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Read more indicator */}
      <div className="mt-6 flex items-center gap-2 text-[12px] font-mono text-accent 
        opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-2">
        <span>Explore</span>
        <span>→</span>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}


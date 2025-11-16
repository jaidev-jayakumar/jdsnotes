import Link from "next/link";
import ProjectTag from "./ProjectTag";

interface TimelineCardProps {
  title: string;
  description: string;
  date?: string;
  href?: string;
  highlighted?: boolean;
  isLast?: boolean;
  tags?: string[];
}

export default function TimelineCard({
  title,
  description,
  date,
  href,
  highlighted = false,
  isLast = false,
  tags = [],
}: TimelineCardProps) {
  const content = (
    <article className="relative pl-0 group cursor-pointer">
      {/* Timeline line (extends from top to bottom of card) */}
      {!isLast && (
        <div className="absolute left-[5.5px] top-0 bottom-0 w-[1px] bg-foreground/15 transition-colors duration-300 group-hover:bg-gradient-to-b group-hover:from-accent/50 group-hover:to-foreground/20" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px]">
        <div className="w-3 h-3 bg-foreground rounded-full relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(139,69,19,0.4)]" />
      </div>

      {/* Content */}
      <div className={`ml-11 pb-10 transition-all duration-300 ${
        highlighted 
          ? 'border-l-4 border-accent/40 pl-5 py-4 bg-accent/[0.02] group-hover:border-accent/70 group-hover:bg-accent/[0.04] group-hover:shadow-[4px_0_12px_rgba(139,69,19,0.08)]' 
          : 'group-hover:translate-x-1'
      }`}>
        <div className="flex items-start justify-between gap-6 mb-2">
          <h3 className="text-[16px] font-bold font-mono leading-snug group-hover:opacity-70 transition-opacity flex-1">
            {title}
          </h3>
          {date && (
            <time className="text-[13px] text-muted whitespace-nowrap font-mono mt-0.5 transition-colors duration-300 group-hover:text-foreground">
              {date}
            </time>
          )}
        </div>
        <p className="text-[13px] text-muted leading-[1.6] font-mono transition-colors duration-300 group-hover:text-foreground/80">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {tags.map((tag) => (
              <ProjectTag key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}


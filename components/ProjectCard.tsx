import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  date?: string;
  href?: string;
  highlighted?: boolean;
  isLast?: boolean;
}

export default function ProjectCard({
  title,
  description,
  date,
  href,
  highlighted = false,
  isLast = false,
}: ProjectCardProps) {
  const content = (
    <article className="relative pl-0 group">
      {/* Timeline line (extends from top to bottom of card) */}
      {!isLast && (
        <div className="absolute left-[5.5px] top-0 bottom-0 w-[1px] bg-foreground/15" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px]">
        <div className="w-3 h-3 bg-foreground rounded-full relative z-10" />
      </div>

      {/* Content */}
      <div className={`ml-11 pb-10 ${highlighted ? 'border border-foreground p-5 mb-2' : ''}`}>
        <div className="flex items-start justify-between gap-6 mb-2">
          <h3 className="text-[16px] font-bold font-mono leading-snug group-hover:opacity-70 transition-opacity flex-1">
            {title}
          </h3>
          {date && (
            <time className="text-[13px] text-muted whitespace-nowrap font-mono mt-0.5">
              {date}
            </time>
          )}
        </div>
        <p className="text-[13px] text-muted leading-[1.6] font-mono">
          {description}
        </p>
      </div>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}


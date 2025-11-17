import Link from "next/link";

interface NoteCardProps {
  title: string;
  date: string;
  excerpt: string;
  href?: string;
  readTime?: string;
}

export default function NoteCard({
  title,
  date,
  excerpt,
  href,
  readTime = "3 min read",
}: NoteCardProps) {
  const content = (
    <article className="py-6 md:py-8 border-b border-foreground/10 last:border-b-0 
      transition-all duration-300 hover:translate-x-2 cursor-pointer group">
      <div className="flex items-center gap-2 md:gap-3 mb-2">
        <time className="text-[10px] md:text-[11px] font-mono text-muted uppercase tracking-wider">
          {date}
        </time>
        <span className="text-muted/50">•</span>
        <span className="text-[10px] md:text-[11px] font-mono text-muted/70">
          {readTime}
        </span>
      </div>
      <h2 className="text-xl md:text-3xl font-serif mb-2 md:mb-3 transition-colors duration-300 
        group-hover:text-accent">
        {title}
      </h2>
      <p className="text-[13px] md:text-[15px] leading-[1.7] text-muted font-mono">
        {excerpt}
      </p>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}


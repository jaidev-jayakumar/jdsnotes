import Link from "next/link";

interface NoteCardProps {
  title: string;
  date: string;
  excerpt: string;
  href?: string;
}

export default function NoteCard({
  title,
  date,
  excerpt,
  href,
}: NoteCardProps) {
  const content = (
    <article className="py-8 border-b border-foreground/10 last:border-b-0 
      transition-all duration-300 hover:translate-x-2 cursor-pointer group">
      <time className="text-[11px] font-mono text-muted uppercase tracking-wider mb-2 block">
        {date}
      </time>
      <h2 className="text-2xl md:text-3xl font-serif mb-3 transition-colors duration-300 
        group-hover:text-accent">
        {title}
      </h2>
      <p className="text-[14px] md:text-[15px] leading-[1.7] text-muted font-mono">
        {excerpt}
      </p>
    </article>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}


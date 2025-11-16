interface ProjectTagProps {
  label: string;
}

export default function ProjectTag({ label }: ProjectTagProps) {
  return (
    <span className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider
      border border-foreground/20 text-foreground/60 
      hover:border-foreground/40 hover:text-foreground/80 transition-all duration-300
      mr-2 mb-2">
      {label}
    </span>
  );
}


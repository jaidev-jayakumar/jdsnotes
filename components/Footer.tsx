export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 mt-32">
      <div className="container-custom py-12">
        <div className="flex justify-center items-center">
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/jaidev-jayakumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/jaidevjayakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              Twitter
            </a>
            <a
              href="https://github.com/jaidev-jayakumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              GitHub
            </a>
            <a
              href="https://substack.com/@jdsnotes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              Substack
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


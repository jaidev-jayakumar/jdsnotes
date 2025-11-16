export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 mt-32">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[13px] text-muted font-mono">
            © {new Date().getFullYear()} Physical Intelligence. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono transition-all duration-300 hover:tracking-wide"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


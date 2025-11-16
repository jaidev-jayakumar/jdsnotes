export default function Footer() {
  return (
    <footer className="border-t-0 mt-32">
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
              className="text-[13px] text-muted hover:text-foreground font-mono link-underline"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono link-underline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-foreground font-mono link-underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


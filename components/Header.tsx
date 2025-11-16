import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-0 bg-background">
      <nav className="container-custom py-8 md:py-10">
        <div className="flex items-start justify-between">
          <Link href="/" className="text-3xl md:text-[2.5rem] font-serif hover:opacity-70 leading-tight">
            Physical Intelligence (π)
          </Link>
          <ul className="flex items-center gap-6 md:gap-8 pt-1">
            <li>
              <Link href="/" className="link-underline text-[14px] font-mono">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="link-underline text-[14px] font-mono">
                Research
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-underline text-[14px] font-mono">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}


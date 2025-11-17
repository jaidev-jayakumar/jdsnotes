import Section from "@/components/Section";
import Image from "next/image";

export default function NotePage() {
  return (
    <>
      <Section>
        <article className="max-w-2xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <time className="text-[11px] font-mono text-muted uppercase tracking-wider mb-4 block">
              9 Nov
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              somewhere between momentum and meaning
            </h1>
          </header>

          {/* Featured Image */}
          <div className="relative w-full h-64 md:h-96 mb-12 overflow-hidden">
            <Image
              src="/substack1.jpg"
              alt="somewhere between momentum and meaning"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p>
              everyone's trying to push mach 10. most get lost in the noise. some break through it.
            </p>

            <p>
              the difference isn't more information. it's knowing what actually matters when everything's moving this fast.
            </p>

            <p>
              so this isn't about answers. it's just notes. things i've seen moving around, trying stuff, messing up. i've learned that experience helps you figure out what you actually believe, not just what sounds right.
            </p>

            <p>
              i've been lucky to move across a few places, collect some experience, make some mistakes. this is where i share what came out of it.
            </p>

            <p>
              if you're trying to figure out similar stuff, maybe it'll help.
            </p>

            <p className="text-muted italic">
              more soon.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}


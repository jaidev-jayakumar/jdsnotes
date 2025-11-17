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
              11 Nov
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              applied to one school three days before the deadline and somehow ended up in san francisco
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p>
              i applied to one school. three days before the deadline. didn't even know if i wanted to go.
            </p>

            <p>
              spent months thinking success was about control. turns out it's about knowing when to let go and just move.
            </p>

            <p>
              the thing about desperation is it makes you really good at applying to things. really bad at knowing what you actually want.
            </p>

            <p>
              ended up in north carolina at a school i never planned for. didn't even know if i wanted to be there. just knew i wasn't happy where i was.
            </p>

            {/* Duke image */}
            <div className="my-8">
              <div className="relative w-full aspect-[16/9] bg-foreground/5">
                <Image
                  src="/duke.jpg"
                  alt="duke in all its glory"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-[13px] text-muted mt-2 italic">duke in all its glory</p>
            </div>

            <p>
              spent months in durham sending hundreds of applications. watching everyone around me get offers. walking to campus just hoping someone would say hi because it was the only human interaction i'd get that day.
            </p>

            <p>
              built something on the side because sitting alone applying felt useless. 200 users in a week. then another 200. first time something i made actually worked.
            </p>

            {/* Email and Analytics images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="relative w-full aspect-square bg-foreground/5">
                <Image
                  src="/email.jpg"
                  alt="user feedback"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-full aspect-square bg-foreground/5">
                <Image
                  src="/analytics.jpg"
                  alt="product analytics"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p>
              here's what i learned: you can't force the path. you can only show up and do the work in front of you.
            </p>

            <p>
              i didn't plan to learn how to code. didn't plan to build a product. didn't plan to end up in san francisco at a startup instead of the brand-name company i thought i needed.
            </p>

            {/* SF image */}
            <div className="relative w-full aspect-[16/9] my-8 bg-foreground/5">
              <Image
                src="/sf.jpg"
                alt="san francisco"
                fill
                className="object-contain"
              />
            </div>

            <p>
              but the chaos at duke led me to learn how to build. building led to realizing i could do more than just apply for jobs. realizing that led to taking a shot at a startup.
            </p>

            <p>
              none of it felt right in the moment. all of it makes sense now.
            </p>

            <p>
              i think people confuse "everything happens for a reason" with "everything works out perfectly." it doesn't. you suffer either way. the question is whether you're suffering while sitting still or suffering while moving toward something.
            </p>

            <p>
              the 10 users i got on day one wasn't success. but it was momentum. and momentum is the only thing that gets you through the days when you're convinced you're not good enough.
            </p>

            <p>
              you can't control outcomes. you can control whether you're building something, learning something, moving somewhere. the rest sorts itself out in ways you can't predict.
            </p>

            <p>
              trust that. not because it's mystical. because it's the only thing that keeps you sane when the plan falls apart.
            </p>

            <p>
              which it will. repeatedly.
            </p>

            {/* Kanye image */}
            <div className="relative w-full aspect-[16/9] my-8 bg-foreground/5">
              <Image
                src="/kanye.jpg"
                alt="perspective"
                fill
                className="object-contain"
              />
            </div>

            <p>
              here's how i know if i'm on the right path: i feel like a kid again. building something and watching people actually use it. walking around san francisco and stumbling into random conversations. seeing waymos everywhere and getting unreasonably excited about it.
            </p>

            <p>
              the nerdy 10 year old version of me would be so stoked about this life.
            </p>

            <p className="font-bold">
              if what you're doing doesn't make that kid in you light up, you're probably optimizing for the wrong thing.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}


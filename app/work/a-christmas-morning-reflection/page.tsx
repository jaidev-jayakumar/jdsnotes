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
              25 Dec
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              a christmas morning reflection…
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p className="italic text-muted">
              had this in my drafts on christmas day, seemed worth sharing.
            </p>

            <p>
              as a kid i used to despise going to social events at others' homes with my family, cause i just wanted to tinker on my game boy or talk life with my grandmom.
            </p>

            <p>
              as an adult living 9k miles away from my family, all i want is to be invited for a lavish christmas meal where you get a sense of family pop. as i walk past homes in san francisco, i reminisce sitting in round tables, eating a carb heavy meal, usually with a side of seafood, my dad telling me not to rush eat, but my competitive spirit always pushing to do the opposite and finish first before my brother and dad, mom always disappointed i'm not consuming more calories.
            </p>

            {/* Featured Image */}
            <div className="relative my-10 flex justify-center">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08),0_8px_40px_rgba(0,0,0,0.06)]">
                <Image
                  src="/children.jpg"
                  alt="childhood memories"
                  width={400}
                  height={600}
                  className="max-w-[280px] md:max-w-[320px] h-auto"
                />
              </div>
            </div>

            <p>
              then slurping tea after a meal that leaves no space in your stomach but you do it anyways just cause of how temporarily relaxing it makes you feel.
            </p>

            <p>
              what follows the tea is the family all going into the wind down room (where the tv is) by putting on the local movies channel and watching some of the classics…the malayalam movie industry is the one of the most underrated ones, the characters, the songs, i was truly blessed to grow up with this, one of my favourite actors passed away recently, and it brought so many raw memories i had with my family.
            </p>

            <p>
              these memories stored deep in one compartment of your brain are the hardest when it pops up occasionally.
            </p>

            <p>
              they say by the time your kid turns 18, you've spent 95% of the time you'll ever spend with them. i'm realizing the same curve applies backwards - most of my round table time is already spent. the compartment opens less often now, but when it does, it's intact & cruelly familiar.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}


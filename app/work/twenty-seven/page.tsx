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
              8 Feb
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              broke my sugar fast on my 27th with a sorbet cake
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p>
              i turned 27 last week. i've always loved spending birthdays in the tiniest of ways cause i was never really a fan of celebrating growing a year older. it always gave me the feeling of holding on to a pull-up bar in a dead hang. the bar is time, and i was never really in control. 27 felt the same. feels super weird, but this time in a good way actually.
            </p>

            <p>
              growing up in kerala (south of india) was grounding. the culture moulded me into the person i am today. but my exposure to the real world was minuscule — my mind had barely formed when i came to the US. i showed up completely un-opinionated and with zero context. the best combination, really.
            </p>

            <p>
              2024 and 2025 were brutal in every way. but those were the kind of years i was truly longing for. the last two years feel like i lived 30. the density of experience is insane — the people, the lessons, the failures. it's a lot. the kind of lot that if acted on the right way builds your principles, and rearranges how you see everything.
            </p>

            <p>
              2026 feels different. the analogy i like to use is bradley cooper's character from limitless, always full of energy, clarity dialled to ten, and locked in on a few things that matter. working out five days a week, saunas, being genuinely obsessed with living a long life, aggressively paying down student debt, and starting at a healthcare startup i 100% believe can change the world.
            </p>

            <p>
              the only thing i still feel like i don't have complete control over is time. i still feel like i'm hanging on to that pull-up bar. in a year or two, my brother and some of my best friends are going to get married. i'll be holding their kids. maybe mine. the awareness is uncomfortable, but clarifying.
            </p>

            <p>
              one thing i keep telling myself: don't ask what the year needs. ask what today needs. one finished task. one workout. one closed loop. one hard conversation. always in a state of momentum. always indexing on the greedy algorithm.
            </p>

            <p className="italic text-muted">
              also ran into dwarkesh patel outside this restaurant in SF on my bday. i fanboyed so hard i blurted out something like, "keep going at it." zero eloquence.
            </p>

            {/* Featured Image */}
            <div className="relative my-10 flex justify-center">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08),0_8px_40px_rgba(0,0,0,0.06)]">
                <Image
                  src="/jd.JPG"
                  alt="27"
                  width={400}
                  height={600}
                  className="max-w-[280px] md:max-w-[320px] h-auto"
                />
              </div>
            </div>
          </div>
        </article>
      </Section>
    </>
  );
}

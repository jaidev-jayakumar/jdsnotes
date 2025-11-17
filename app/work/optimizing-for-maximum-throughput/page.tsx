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
              15 Nov
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              optimizing for maximum throughput per unit time
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p>
              i've had people tell me i need a break. like genuinely concerned, "you're gonna burn out" type stuff. but here's the thing — i've never felt like that. my mind is restless. i want to keep at it.
            </p>

            <p>
              maybe that sounds unhealthy or whatever. but i think i was just slow to realize what actually makes me happy. turns out catching small wins lights me up. being a workaholic isn't my problem, it's literally what i want.
            </p>

            <p>
              high school, college — i was just drifting. no real agency over what i was doing or why. then i got into a 9-9-6. and for the first time, i had structure. agency. something to optimize around. but the real unlock? nights and weekends on top of that. that's when i realized: oh, i'm actually energized by this. more reps, more learning, more small wins stacking up. wasn't burnout. was flow.
            </p>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] my-8 bg-foreground/5">
              <Image
                src="/substack2.jpg"
                alt="optimizing for throughput"
                fill
                className="object-contain"
              />
            </div>

            <p>
              i think being in the top 1% is subjective, but here's my definition: you're in the top 1% if you optimize for maximum throughput per unit time. that's it. not about being the smartest or most talented. it's about picking a few bets you'd have infinite energy for and then maxing both reps and learning rate.
            </p>

            <p>
              most people either optimize for perfect execution (low volume) or they just mindlessly grind (low learning). you need both. high shot volume where each attempt makes you sharper. that's how you compound. ship something, learn, iterate, get faster. the volume itself creates the wins.
            </p>

            <p>
              time freedom lets you compartmentalize. work hard, recover properly, stay healthy, repeat. when you have agency over your time, high-volume work stops being draining and starts being energizing. the real unlock is maxing out throughput on stuff you actually care about — that's where the energy comes from.
            </p>

            <p>
              small wins across everything you wanna achieve. not just work, everything. they stack. a win here informs something there. you're learning faster because you're experimenting more and weirdly, the more shots you take, the luckier you get.
            </p>

            <p>
              you can't control outcomes. can't control if you're naturally talented. can't control luck. you can control: what you take shots at, how many attempts you make, how much you learn from each one. that's the only variable that matters. the agency to execute.
            </p>

            <p>
              so i'm taking shots at everything. win or lose. dream big, work towards it everyday. the throughput itself is the strategy. being a workaholic when it's your bets, your timeline, your wins? that's not the problem. that's the point.
            </p>

            <p className="font-bold">
              most people never get there not because they're not smart enough, but because they never optimized the one thing they could actually control: their throughput per unit time.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}


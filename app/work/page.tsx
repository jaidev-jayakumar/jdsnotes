import Section from "@/components/Section";
import NoteCard from "@/components/NoteCard";

// Feature flags for notes visibility
const SHOW_APPLIED_TO_ONE_SCHOOL = false;

export default function WorkPage() {
  return (
    <>
      <Section>
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-serif mb-3 md:mb-4">Notes</h1>
          <p className="text-[13px] md:text-[14px] leading-[1.7] max-w-2xl font-mono text-muted">
            Thoughts, reflections, and lessons learned along the way.
          </p>
        </div>

        <div className="max-w-3xl">
          <NoteCard
            title="broke my sugar fast on my 27th with a sorbet cake"
            date="8 Feb"
            excerpt="i turned 27 last week. always loved birthdays in the tiniest of ways — never a fan of celebrating growing older. 27 feels different. 2026 feels different. don't ask what the year needs. ask what today needs."
            href="/work/twenty-seven"
            readTime="4 min read"
          />
          <NoteCard
            title="intelligence is on tap. authenticity isn't."
            date="10 Jan"
            excerpt="anyone can build an app with a prompt. does it actually solve a real problem? or does it have that same vibe coded design you've seen a thousand times? intelligence is commoditized. authenticity is not."
            href="/work/intelligence-is-on-tap-authenticity-isnt"
            readTime="4 min read"
          />
          <NoteCard
            title="a christmas morning reflection…"
            date="25 Dec"
            excerpt="as a kid i used to despise going to social events at others' homes with my family. as an adult living 9k miles away, all i want is to be invited for a lavish christmas meal where you get a sense of family pop."
            href="/work/a-christmas-morning-reflection"
            readTime="3 min read"
          />
          <NoteCard
            title="the commute i didn't want to lose"
            date="4 Dec"
            excerpt="caltrain has a different energy than the new york subway. different than airports too. same people, same time, every day. but nobody talks. everyone's chosen their own way to spend the hour."
            href="/work/the-commute-i-didnt-want-to-lose"
            readTime="2 min read"
          />
          <NoteCard
            title="optimizing for maximum throughput per unit time"
            date="15 Nov"
            excerpt="i've had people tell me i need a break. like genuinely concerned, 'you're gonna burn out' type stuff. but here's the thing — i've never felt like that. my mind is restless. i want to keep at it."
            href="/work/optimizing-for-maximum-throughput"
            readTime="4 min read"
          />
          {SHOW_APPLIED_TO_ONE_SCHOOL && (
            <NoteCard
              title="applied to one school three days before the deadline and somehow ended up in san francisco"
              date="11 Nov"
              excerpt="i applied to one school. three days before the deadline. didn't even know if i wanted to go. spent months thinking success was about control. turns out it's about knowing when to let go and just move."
              href="/work/applied-to-one-school"
              readTime="5 min read"
            />
          )}
          <NoteCard
            title="somewhere between momentum and meaning"
            date="9 Nov"
            excerpt="everyone's trying to push mach 10. most get lost in the noise. some break through it. the difference isn't more information. it's knowing what actually matters when everything's moving this fast."
            href="/work/somewhere-between-momentum-and-meaning"
            readTime="2 min read"
          />
        </div>

        {/* Substack link */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-foreground/10 max-w-3xl">
          <a
            href="https://jdsnotes.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 md:gap-3 text-[13px] md:text-[14px] font-mono transition-all duration-300 hover:translate-x-2"
          >
            <span className="text-muted group-hover:text-accent transition-colors">
              check out my substack
            </span>
            <span className="text-accent">→</span>
          </a>
        </div>
      </Section>
    </>
  );
}


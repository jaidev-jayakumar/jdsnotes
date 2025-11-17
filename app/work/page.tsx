import Section from "@/components/Section";
import NoteCard from "@/components/NoteCard";

export default function WorkPage() {
  return (
    <>
      <Section>
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Notes</h1>
          <p className="text-[14px] leading-[1.7] max-w-2xl font-mono text-muted">
            Thoughts, reflections, and lessons learned along the way.
          </p>
        </div>

        <div className="max-w-3xl">
          <NoteCard
            title="applied to one school three days before the deadline and somehow ended up in san francisco"
            date="11 Nov"
            excerpt="i applied to one school. three days before the deadline. didn't even know if i wanted to go. spent months thinking success was about control. turns out it's about knowing when to let go and just move."
            href="/work/applied-to-one-school"
          />
          <NoteCard
            title="somewhere between momentum and meaning"
            date="9 Nov"
            excerpt="everyone's trying to push mach 10. most get lost in the noise. some break through it. the difference isn't more information. it's knowing what actually matters when everything's moving this fast."
            href="/work/somewhere-between-momentum-and-meaning"
          />
        </div>
      </Section>
    </>
  );
}


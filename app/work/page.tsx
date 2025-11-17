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


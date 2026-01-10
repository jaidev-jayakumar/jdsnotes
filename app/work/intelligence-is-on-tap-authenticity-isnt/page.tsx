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
              10 Jan
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              intelligence is on tap. authenticity isn't.
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p>
              anyone can build an app with a prompt. does it actually solve a real problem? or does it have that same vibe coded design you've seen a thousand times? gradient backgrounds, rounded corners, the exact aesthetic every other ai generated landing page has. everyone's finally realizing that building the app was never the hard part. distribution is. getting users to actually care. solving a problem people have enough to pay for. the graveyard of perfect apps nobody uses is massive.
            </p>

            <p>
              anyone can generate a resume in under 5 minutes now. fill it with "spearheaded" and "leveraged synergies" and whatever other corporate slop the ai suggests. that's an immediate no in the eyes of most people.
            </p>

            <p>
              using llms for thinking is like eating fast food. quick, convenient, but leaves you empty. the real work happens when you write, when you talk through ideas, when you build something from scratch. ai can supplement that process when you need it. but it can't replace the actual work of forming your own thoughts. when you outsource your thinking entirely, you end up with outputs that sound like everyone else's. same structure. same phrases. same nothing.
            </p>

            {/* Featured Image */}
            <div className="relative my-10 flex justify-center">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08),0_8px_40px_rgba(0,0,0,0.06)]">
                <Image
                  src="/intelligence.jpg"
                  alt="intelligence is on tap"
                  width={400}
                  height={600}
                  className="max-w-[280px] md:max-w-[320px] h-auto"
                />
              </div>
            </div>

            <p>
              look at ishowspeed. what you see on camera is probably what you get in real life. no script. no performance. just him. and he got rewarded for it. people can spot manufactured authenticity from a mile away. they scroll past the polished, ai-generated content that reads like it came from the same template as 500 other posts. but they stop for the stuff that feels real. i prioritize content on my timeline written by humans, not bots. and i'm not alone.
            </p>

            <p>
              think about relationships. the only thing that really matters is whether you can be yourself around someone. shared hobbies, attraction, lifestyle alignment, all downstream. if you can't be fully yourself, you're either performing or negotiating constantly. and that corrodes everything over time. true intimacy is being radically unedited and still accepted. same principle applies everywhere else.
            </p>

            <p>
              in today's 996 chest-thumping culture where everyone's performing productivity on linkedin, don't forget the quiet ones actually keeping your company together. the universe will reward the quiet ones before their manager does.
            </p>

            <p>
              i work at stedi, a healthcare infrastructure company. when customers tell us why they chose us over competitors, they don't mention our apis or documentation first. they mention support. one customer said they went with us because we answered every message within 15 minutes. no bots. no tickets. no automated deflection. just humans who actually fix the problem. we use ai everywhere in our product, but not to replace real human support. when something's broken and you need help, you want someone who understands your problem, not a chatbot suggesting knowledge base articles. that kind of authentic, human support is what customers remember.
            </p>

            <p>
              you escape competition through authenticity. no one can compete with you being you. the best part of being authentic is there's no image to maintain. you'll delight some people. you'll disturb others. none of it will concern the truth of your being. real people don't form connections because of an image you uphold. they connect with the truth you embody.
            </p>

            <p>
              ai makes it easier to look competent but harder to actually be competent. everyone's baseline just got raised. the delta between looking good and being good is now your only moat. and that delta is built on authenticity. your authentic perspective, your unique way of seeing problems, your specific combination of experiences. intelligence is commoditized. that's not.
            </p>

            <p>
              if you're interested in bringing healthcare into the modern era, join us:{" "}
              <a 
                href="https://www.stedi.com/careers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                stedi.com/careers
              </a>
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}


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
              22 Mar
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              the quiet superpowers you can build by cutting out the noise
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif mb-6">
              i didn't realize how crowded my head was until it got quiet
            </h2>

            <p>
              for 22 years i lived with people around me. i could never find myself alone. i was always surrounded by a pool of opinions and never left with space to think for myself.
            </p>

            <p>
              it could be dinners where you just nod along when someone tells you to stop everything and start day trading, pursue electronics engineering because that is the "next big thing" and many more…you even start reshaping your thoughts if you notice even the slightest of disappointment in someone's expression so you never really get to know that version of you that exists when no one else is around.
            </p>

            <p>
              living alone in a way helps you find that person.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 mt-8">
              no one is coming to manage your life
            </h2>

            <p>
              i don't mean this in some romanticized way because from an outside perspective it looks extremely unglamorous. it's eating instant noodles at 10pm standing over the sink. it's realizing nobody is going to tell you to go to bed, or to stop doomscrolling, or that your idea is stupid, or that your idea is brilliant. it's just you, with the full weight of your own choices pressing down on a friday night.
            </p>

            <p>
              and that weight is the whole point.
            </p>

            <p>
              because when you live surrounded by people there's a constant ambient noise of opinion. not malicious. mostly loving, actually. but relentless. you absorb it like a sponge. slowly and unconsciously, until one day you realize everything you believe is just things you heard repeated with enough confidence by people you happened to be around.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 mt-8">
              you don't find your values, you notice them
            </h2>

            <p>
              when its just you and your thoughts, you become more opinionated because you've had to build your own framework for thinking about things.
            </p>

            <p>
              you start developing principles. the quiet ones. the ones that reveal themselves when you notice you keep making the same choice in the same situation, and you realize, oh, that's what i value.
            </p>

            <p>
              that's not something anyone can give you. you have to be alone with a decision enough times, with no one to ask "what would you do?", before your own voice gets loud enough to hear.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 mt-8">
              most opinions aren't formed, they're picked up
            </h2>

            <p>
              social media is the exact opposite of this process.
            </p>

            <p>
              the whole machinery of it is designed to make sure you never sit with a thought long enough to call it yours. something happens in the world, and within minutes there's a consensus forming in real time. and your brain because it's human, because it's wired to conserve energy, because thinking from scratch is metabolically expensive grabs whatever take sounds smartest and adopts it. you never think here, you just sync.
            </p>

            <p>
              it's the same temptation with llms. you can either use them to extend your thinking or replace it entirely. and most of the time, it's easier to let them do the thinking for you.
            </p>

            <p>
              algorithms have figured out that the human mind defaults to the laziest path. not because we're stupid, but because we evolved to preserve energy for actual survival. they feed you a drip of pre-formed consensus and your brain goes, "great, i don't have to do the work." and you walk around with a head full of opinions that belong to strangers.
            </p>

            {/* Featured Image */}
            <div className="relative my-10 flex justify-center">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08),0_8px_40px_rgba(0,0,0,0.06)]">
                <Image
                  src="/brad.jpg"
                  alt="the quiet superpowers you can build by cutting out the noise"
                  width={400}
                  height={300}
                  className="max-w-[320px] md:max-w-[400px] h-auto rounded-lg"
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 mt-8">
              learning to reset without an audience
            </h2>

            <p>
              there's this thing novak djokovic talks about - the tennis mindset. you play a point. you lose it. you deal with it immediately. and then you reset to neutral before the next one comes.
            </p>

            <p>
              most humans carry the last point into the next one. someone says something that bothers us on monday and we're still composing our response in the shower on thursday. we lose a client, botch a conversation, make a wrong call and instead of processing it and returning to zero, we let it compound. we sit and ruminate.
            </p>

            <p>
              living alone teaches you the reset because when you're alone with a bad feeling, you learn pretty quickly that you're the only one who can do something about it. there's no one to vent to at 11pm and eventually you develop this muscle, this ability to feel the thing fully, let it pass through, and come back to neutral. not numb, just neutral.
            </p>

            <h2 className="text-2xl md:text-3xl font-serif mb-6 mt-8">
              what silence shows you (if you don't run from it)
            </h2>

            <p>
              i think the reason people dread being alone is because solitude forces a confrontation most people aren't ready for. the doubts. the wants you've been ignoring because they don't match the narrative. the fact that you might disagree with people you love about things that matter.
            </p>

            <p>
              but if you can sit through that discomfort what comes out the other side is a person who knows what they think and why they think it. a person whose opinions aren't moulded from a digital feed but built from lived, quiet, sometimes painful experience.
            </p>

            <p>
              not everyone needs to live alone forever. but everyone could use a season of it. a stretch of time where the only voice in the room is yours, and you have to decide whether you trust it.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}
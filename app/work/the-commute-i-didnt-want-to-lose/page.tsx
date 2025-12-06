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
              4 Dec
            </time>
            <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              the commute i didn't want to lose
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg font-mono text-[15px] leading-[1.8] space-y-6">
            <p>
              caltrain has a different energy than the new york subway. different than airports too.
            </p>

            <p>
              the subway is pure chaos. a million faces you'll never see again. everyone compressed, moving fast, gone.
            </p>

            <p>
              airports are transient in a way i've always liked. nobody's from there. everyone's heading somewhere else. there's something peaceful about existing in a space where no one expects anything from you.
            </p>

            <p>
              caltrain is the opposite. same people, same time, every day. but nobody talks. everyone's chosen their own way to spend the hour.
            </p>

            {/* Featured Image */}
            <div className="relative my-10 flex justify-center">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.08),0_8px_40px_rgba(0,0,0,0.06)]">
                <Image
                  src="/caltrain.jpg"
                  alt="caltrain"
                  width={400}
                  height={600}
                  className="max-w-[280px] md:max-w-[320px] h-auto"
                />
              </div>
            </div>

            <p>
              the guy locked in on his laptop, definitely scaling a unicorn. hasn't blinked in 45 minutes. the sales guy closing deals at 8am like it's a normal time to yell into a phone. everyone can hear him. he doesn't care. the tiktok creator with a full ring light setup because content waits for no one. coworkers from my company who made the same choice to commute 3 hours. brief nod each time. that's it. it's 7am. neither of us are ready for conversation yet. tourists genuinely shocked that american public transit doesn't suck. taking pictures of the seats. the 70-year-old real estate guy who's been riding this thing for over 20 years. talked to him once. he had stories.
            </p>

            <p>
              some days i tried to maximize the time. read, work, learn something. some days i just observed. some days i did nothing and that was fine too.
            </p>

            <p>
              moving closer to work was the easier and more comfortable option but there's something about the forced stillness i didn't want to lose. the in-between time where you can't really do anything but exist.
            </p>

            <p className="italic text-muted">
              this post was written on my last regular caltrain ride. starting a new job, no commute. felt like a good moment to jot this down.
            </p>
          </div>
        </article>
      </Section>
    </>
  );
}


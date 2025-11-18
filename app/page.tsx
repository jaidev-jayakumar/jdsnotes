'use client';

import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TimelineCard from "@/components/TimelineCard";
import VentilatorModal from "@/components/VentilatorModal";
import { useState } from "react";

export default function Home() {
  const [isVentilatorModalOpen, setIsVentilatorModalOpen] = useState(false);
  return (
    <>
      <Section>
        <div id="intro" className="mb-10 md:mb-12">
          <p className="text-[14px] md:text-[15px] leading-[1.7] max-w-3xl font-mono">
          I spend most of my time building healthcare infrastructure that lets providers focus on patients, not paperwork. I pick problems I've felt the pain of personally, then build software obsessively until reality matches the ideal. Infinite energy for my bets.
          </p>
        </div>

        {/* Timeline section - Work Experience */}
        <div className="mb-16 md:mb-20">
          <TimelineCard
            title="Product Operations"
            company="Commure · Full-time"
            description="Worked on net new launches - onboarding to go live; currently driving tooling enablement internal & customer facing. Key pain point I help address: 'this task takes too much time'"
            date="Mar 2024 - Present"
            location="Mountain View, California"
            logo="/commure-logo.jpg"
            highlighted
          />
          <TimelineCard
            title="Product Strategy - New Verticals"
            company="T-Mobile · Internship"
            description="Growth & scale across existing & emerging consumer product areas & businesses"
            date="May 2023 - Aug 2023"
            location="Greater Seattle Area"
            logo="/t-mobile-logo.jpg"
          />
          <TimelineCard
            title="Strategy Consultant"
            company="Seasoned"
            description="Drove the push for new vertical ventures in the gig industry"
            date="Aug 2022 - Jan 2023"
            location="San Francisco Bay Area"
            logo="/seasoned-logo.jpg"
          />
          <TimelineCard
            title="Product Engineer"
            company="Wipro Limited · Full-time"
            description="Managed e-commerce experience for 1000s of b2b customers; wrote code, fixed bugs, built tracking"
            date="Jul 2021 - Jul 2022"
            location="Bengaluru, Karnataka, India"
            logo="/wipro-logo.png"
          />
          <TimelineCard
            title="Strategy & Ops"
            company="AIESEC in India · Part-time"
            description="facilitated internship opportunities for 100+ students globally; gtm, sales, lot of cold pitches, handling $"
            date="Jan 2018 - Jun 2019"
            location="Vellore, Tamil Nadu"
            logo="/aiesec.png"
            isLast
          />
        </div>

        {/* Education section */}
        <div className="mb-16 md:mb-20">
          <TimelineCard
            title="Master of Engineering - MEng"
            company="Duke University · Engineering Management"
            description="focus on data, product and operations"
            date="2022 - 2023"
            location="Durham, North Carolina"
            logo="/duke-logo.png"
          />
          <TimelineCard
            title="Bachelor of Technology - BTech"
            company="Vellore Institute of Technology · Electronics · Minor in Computer Science"
            description="started with circuits, moved to software, then built circuits with software"
            date="2017 - 2021"
            location="Vellore, Tamil Nadu, India"
            logo="/vit-logo.png"
            isLast
          />
        </div>

        <div id="research" className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-serif mb-2 md:mb-3">I like to build software</h2>
          <p className="text-[12px] md:text-[13px] font-mono text-muted mb-6 md:mb-8">
          Turning personal frustration into working software
          </p>
        </div>

        {/* Grid cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ProjectCard
            index={0}
            title="bloodrec"
            description={
              <>
                Duolingo for your bloodwork. Scaled to{' '}
                <span className="text-accent font-semibold">2k+ users</span>, Product Hunt{' '}
                <span className="text-accent font-semibold">#14</span> product of the day. Applied to YC (didn't make it), received $2k microgrant from LocalHost.
              </>
            }
            href="https://bloodrec.com"
            tags={["Health Tech", "Consumer"]}
            image="/bloodrec.png"
            techStack={["React", "Next.js", "JavaScript", "Tailwind", "Supabase", "OpenRouter"]}
          />
          <ProjectCard
            index={1}
            title="easymvp"
            description="Connecting technical builders with non-technical founders to ship faster. Bridge the gap between vision and execution."
            href="https://easymvp.io"
            tags={["Marketplace", "Community"]}
            image="/easymvp.png"
            techStack={["Next.js", "React", "TypeScript", "MongoDB", "Resend", "Render"]}
          />
          <div className="md:col-span-2">
            <ProjectCard
              index={2}
              title="pcp in your pocket"
              description="AI-powered health companion that understands your bloodwork, symptoms, and health journey available 24/7. Extension of bloodrec with personalized medical insights."
              highlighted
              tags={["AI", "Health Tech"]}
              swiperImages="/swiper-1.png,/swiper-2.png,/swiper-3.png,/swiper-4.png"
              techStack={["React", "Next.js", "Supabase", "Twillio","Vercel","OpenRouter"]}
              href="https://bloodrec.com"
            />
          </div>
          <div className="md:col-span-2">
            <ProjectCard
              index={3}
              title="kairo"
              description="AI astrology companion that offers personalized cosmic insights, daily guidance, and chart interpretations. kaira is your pocket astrologer for life's questions."
              tags={["AI", "iOS"]}
              swiperImages="/kairo1.png,/kairo2.png,/kairo3.png,/kairo4.png,/kairo5.png"
              techStack={["Swift", "SwiftUI", "Firebase"]}
              githubUrl="https://github.com/jaidev-jayakumar/kairo"
            />
          </div>
          <ProjectCard
            index={4}
            title="behai.ai"
            description={
              <>
                Fasttrack your success to land your dream job. Resume revamp, cold email templates, and behavioral interview prep powered by AI.{' '}
                <span className="text-accent font-semibold">600+ users</span> to date.
              </>
            }
            href="https://behai.ai"
            tags={["Career", "AI"]}
            image="/behai.png"
            techStack={["Flask", "Python"]}
          />
          <ProjectCard
            index={5}
            title="Smart Ventilator System"
            description="Built with a box of scraps, some circuits, and a bit of code. Custom ventilator control system engineered from the ground up."
            tags={["Hardware", "IoT"]}
            video="/ventilator.mp4"
            techStack={["Arduino", "C++", "Sensor interfacing", "NodeMCU", "Microcontroller programming"]}
            hasExplore={true}
            onExplore={() => setIsVentilatorModalOpen(true)}
          />
        </div>
      </Section>

      <VentilatorModal 
        isOpen={isVentilatorModalOpen}
        onClose={() => setIsVentilatorModalOpen(false)}
      />
    </>
  );
}


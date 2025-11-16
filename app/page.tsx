import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TimelineCard from "@/components/TimelineCard";

export default function Home() {
  return (
    <>
      <Section>
        <div id="intro" className="mb-12">
          <p className="text-[15px] leading-[1.7] max-w-3xl font-mono">
          I spend most of my time building healthcare infrastructure that lets providers focus on patients, not paperwork. I pick problems I've felt the pain of personally, then build software obsessively until reality matches the ideal. Infinite energy for my bets.
          </p>
        </div>

        {/* Timeline section - Work Experience */}
        <div className="mb-20">
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
            isLast
          />
        </div>

        {/* Education section */}
        <div className="mb-20">
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

        <div id="research" className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif mb-3">Featured Projects</h2>
          <p className="text-[13px] font-mono text-muted mb-8">
            In-depth research and development
          </p>
        </div>

        {/* Grid cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            index={0}
            title="Teaching Robots to Listen and Think Harder"
            description="A method for robots to think through complex tasks step by step, incorporating human-in-the-loop feedback."
            date="February 26, 2025"
            tags={["Multi-modal", "Reasoning"]}
          />
          <ProjectCard
            index={1}
            title="Open Sourcing π₀"
            description="We are releasing the weights and code for π0 as well as our new π0-FAST autoregressive model."
            date="February 4, 2025"
            highlighted
            tags={["Open Source", "Models"]}
          />
          <ProjectCard
            index={2}
            title="FAST: Efficient Robot Action Tokenization"
            description="A new robot action tokenizer that allows us to train generalist policies 5x faster than previous models."
            date="January 16, 2025"
            tags={["Efficiency", "Architecture"]}
          />
          <ProjectCard
            index={3}
            title="π₀: Our First Generalist Policy"
            description="Our first generalist policy, π0, a prototype model that combines large-scale multi-task and multi-robot data collection with a new network architecture."
            date="October 31, 2024"
            highlighted
            tags={["Foundation", "Multi-task"]}
          />
        </div>
      </Section>
    </>
  );
}


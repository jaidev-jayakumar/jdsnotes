import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import TimelineCard from "@/components/TimelineCard";

export default function Home() {
  return (
    <>
      <Section>
        <div id="intro" className="mb-12">
          <p className="text-[15px] leading-[1.7] max-w-3xl font-mono">
            Physical Intelligence is bringing general-purpose AI into the physical world. We are a group of engineers, scientists, roboticists, and company builders developing foundation models and learning algorithms to power the robots of today and the physically-actuated devices of the future.
          </p>
        </div>

        {/* Timeline section */}
        <div className="mb-20">
          <TimelineCard
            title="Real-Time Action Chunking with Large Models"
            description="A real-time system for large VLAs that maintains precision and speed in the face of high latency."
            date="June 9, 2025"
            tags={["VLA", "Real-time", "Performance"]}
          />
          <TimelineCard
            title="VLAs that Train Fast, Run Fast, and Generalize Better"
            description="A method to train vision-language-action models that train quickly, maintain internet-scale knowledge, have high quality inference properties, and generalize well."
            date="May 28, 2025"
            tags={["Vision-Language", "Training", "Generalization"]}
          />
          <TimelineCard
            title="π₀.5: a VLA with Open-World Generalization"
            description="Our latest generalist policy, π0.5, extends π0 and enables open-world generalization. Our new model can control a mobile manipulator to clean up an entirely new kitchen or bedroom."
            date="April 22, 2025"
            highlighted
            tags={["Foundation Model", "Open-world", "Manipulation"]}
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


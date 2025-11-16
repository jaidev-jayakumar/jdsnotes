import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function WorkPage() {
  return (
    <>
      <Section>
        <div className="mb-12">
          <p className="text-[15px] leading-[1.7] max-w-3xl font-mono">
            Our research focuses on developing foundation models and learning algorithms for robotic systems. We publish our findings and open-source key components of our work.
          </p>
        </div>

        <div>
          <ProjectCard
            title="Real-Time Action Chunking with Large Models"
            description="A real-time system for large VLAs that maintains precision and speed in the face of high latency."
            date="June 9, 2025"
          />
          <ProjectCard
            title="VLAs that Train Fast, Run Fast, and Generalize Better"
            description="A method to train vision-language-action models that train quickly, maintain internet-scale knowledge, have high quality inference properties, and generalize well."
            date="May 28, 2025"
          />
          <ProjectCard
            title="π₀.5: a VLA with Open-World Generalization"
            description="Our latest generalist policy, π0.5, extends π0 and enables open-world generalization. Our new model can control a mobile manipulator to clean up an entirely new kitchen or bedroom."
            date="April 22, 2025"
            highlighted
          />
          <ProjectCard
            title="Teaching Robots to Listen and Think Harder"
            description="A method for robots to think through complex tasks step by step, incorporating human-in-the-loop feedback."
            date="February 26, 2025"
          />
          <ProjectCard
            title="Open Sourcing π₀"
            description="We are releasing the weights and code for π0 as well as our new π0-FAST autoregressive model."
            date="February 4, 2025"
            highlighted
          />
          <ProjectCard
            title="FAST: Efficient Robot Action Tokenization"
            description="A new robot action tokenizer that allows us to train generalist policies 5x faster than previous models."
            date="January 16, 2025"
          />
          <ProjectCard
            title="π₀: Our First Generalist Policy"
            description="Our first generalist policy, π0, a prototype model that combines large-scale multi-task and multi-robot data collection with a new network architecture designed for generalization to new objects and tasks."
            date="October 31, 2024"
            highlighted
            isLast
          />
        </div>
      </Section>
    </>
  );
}


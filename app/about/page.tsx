import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl space-y-12">
          <div>
            <h2 className="mb-8 font-serif">About Physical Intelligence</h2>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed font-mono">
                Physical Intelligence is developing foundation models and learning algorithms that enable robots and physically-actuated devices to perform useful tasks in the real world.
              </p>
              <p className="text-[15px] leading-relaxed font-mono">
                Our team brings together expertise in machine learning, robotics, computer vision, and systems engineering. We're building models that can generalize across different robots, tasks, and environments.
              </p>
              <p className="text-[15px] leading-relaxed font-mono">
                We believe that bringing general-purpose AI into the physical world requires fundamental advances in how we train and deploy robotic systems. Our research focuses on learning algorithms that scale with data and compute while maintaining the precision and reliability needed for physical interaction.
              </p>
            </div>
          </div>

          <div className="border-t border-foreground/10 pt-12">
            <h2 className="mb-8 font-serif">Our Approach</h2>
            <div className="space-y-6">
              <p className="text-[15px] leading-relaxed font-mono">
                We believe the key to general-purpose robots is learning from diverse, large-scale data. Our models are trained on data from multiple robot platforms performing a wide variety of tasks.
              </p>
              <p className="text-[15px] leading-relaxed font-mono">
                This approach allows our policies to generalize to new situations, objects, and environments without task-specific training. We're building toward a future where robots can adapt to open-world scenarios.
              </p>
            </div>
          </div>

          <div className="border-t border-foreground/10 pt-12">
            <h2 className="mb-8 font-serif">Research Areas</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg mb-2 font-bold font-mono">Foundation Models</h3>
                <p className="text-[15px] text-muted leading-relaxed font-mono">
                  Large-scale models that learn generalizable representations for robotic control and perception.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 font-bold font-mono">Learning Algorithms</h3>
                <p className="text-[15px] text-muted leading-relaxed font-mono">
                  Novel training methods that enable robots to learn from demonstration, interaction, and feedback.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 font-bold font-mono">Multi-Task Learning</h3>
                <p className="text-[15px] text-muted leading-relaxed font-mono">
                  Techniques for training single models that can perform many different tasks across various domains.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 font-bold font-mono">Generalization</h3>
                <p className="text-[15px] text-muted leading-relaxed font-mono">
                  Methods for ensuring robotic systems can handle novel objects, tasks, and environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


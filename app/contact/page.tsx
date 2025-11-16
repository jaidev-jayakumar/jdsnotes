import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 font-serif">Join Us</h2>
              <p className="text-[15px] mb-8 leading-relaxed font-mono">
                We're building a team of researchers, engineers, and roboticists to develop foundation models for the physical world. If you're interested in pushing the boundaries of AI and robotics, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg mb-3 font-bold font-mono">Open Positions</h3>
                  <p className="text-[15px] text-muted leading-relaxed font-mono mb-4">
                    We're hiring across research, engineering, and operations. View all open positions or send us your resume at careers@physicalintelligence.company.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3 font-bold font-mono">Research Collaborations</h3>
                  <p className="text-[15px] text-muted leading-relaxed font-mono mb-4">
                    We collaborate with academic institutions and research labs on fundamental problems in robotics and AI. Contact us at research@physicalintelligence.company.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-3 font-bold font-mono">General Inquiries</h3>
                  <p className="text-[15px] text-muted leading-relaxed font-mono">
                    For press, partnerships, or other inquiries, reach out at hello@physicalintelligence.company.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-foreground/10 pt-12">
              <h2 className="mb-8 font-serif">Location</h2>
              <p className="text-[15px] text-muted leading-relaxed font-mono">
                Physical Intelligence<br />
                San Francisco, California<br />
                United States
              </p>
            </div>

            <div className="border-t border-foreground/10 pt-12">
              <h2 className="mb-8 font-serif">Connect</h2>
              <div className="space-y-3">
                <div>
                  <a
                    href="https://twitter.com/physical_intel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] link-underline font-mono"
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/physicalintelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] link-underline font-mono"
                  >
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    href="https://linkedin.com/company/physical-intelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] link-underline font-mono"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


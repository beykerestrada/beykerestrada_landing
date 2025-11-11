"use client";

import CardShell from "@/components/ui/card-shell";
import Container from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";

const STEPS = [
  {
    title: "Alignment & Discovery",
    body:
      "Context-rich conversations to map goals, constraints, and the rhythms that keep your team moving. We align on what success looks like before a single workflow is drawn.",
  },
  {
    title: "Systems & Workflow Design",
    body:
      "Translate strategy into calm, navigable systems — bringing structure to data models, automations, and rituals that make collaboration effortless.",
  },
  {
    title: "Implementation & Optimization",
    body:
      "Ship in focused iterations, validate with your team, and refine until every interaction feels intentional. Documentation and enablement ensure adoption sticks.",
  },
];

export default function HowIWork() {
  return (
    <section className="py-24" aria-labelledby="how-i-work-heading">
      <Container className="space-y-10">
        <SectionHeader
          id="how-i-work-heading"
          eyebrow="Process"
          title="How we work together to build scalable systems"
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => (
            <CardShell key={step.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground">{step.body}</p>
            </CardShell>
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { involvementSections } from "@/content/engagement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Bhaavam Foundation as an advisory member, volunteer, or collaborator.",
};

export default function GetInvolvedPage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        Get Involved
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
        Bhaavam grows through thoughtful contributors, advisors, and volunteers
        who care about building a more mentally healthy society.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {involvementSections.map((section) => (
          <Card key={section.id} className="h-full border-blush-100/80">
            <CardHeader>
              <CardTitle className="text-2xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-relaxed text-ink-muted">
                {section.description}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted">
                {section.points.map((point) => (
                  <li key={point} className="rounded-xl bg-blush-50/60 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
                <a href={section.ctaHref}>
                  {section.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

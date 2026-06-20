import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutOverview, founders, visionContent } from "@/content/about";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bhaavam Foundation, our vision, and the people building it.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        About Us
      </h1>

      <section className="mt-10 rounded-3xl border border-blush-100 bg-white p-8 shadow-sm">
        <h2 className="font-display text-2xl font-semibold text-ink">
          About Us
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {aboutOverview.intro}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {aboutOverview.body}
        </p>
      </section>

      <section className="mt-8 rounded-3xl border border-blush-100 bg-blush-50/50 p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {visionContent.headline}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {visionContent.body}
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Founders
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted">
          This section is structured to grow with the team. Replace the sample
          profiles with founder names, roles, photos, and biographies as they
          become available.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="overflow-hidden rounded-3xl border border-blush-100 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-blush-50">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-blush-700">
                  {founder.title}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {founder.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/get-involved">Get Involved</Link>
        </Button>
        <Button asChild variant="secondary">
          <a href={`mailto:${siteConfig.email}`}>Email Us</a>
        </Button>
      </div>
    </main>
  );
}

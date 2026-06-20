import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import { donateContent } from "@/content/engagement";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Bhaavam Foundation's mental health awareness, education, and community-building work.",
};

export default function DonatePage() {
  return (
    <main id="main-content" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="rounded-3xl border border-blush-100 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-50 text-blush-600">
          <HeartHandshake className="h-7 w-7" aria-hidden />
        </div>
        <h1 className="mt-6 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {donateContent.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {donateContent.intro}
        </p>

        <ul className="mt-8 space-y-3">
          {donateContent.options.map((option) => (
            <li
              key={option}
              className="rounded-2xl border border-blush-100 bg-blush-50/50 px-5 py-4 text-ink-muted"
            >
              {option}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.email}?subject=Donation enquiry`}>
              Start a Donation Conversation
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact-us?topic=donation">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

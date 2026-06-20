import type { Metadata } from "next";
import { HeartHandshake, Mail } from "lucide-react";
import { supportContent } from "@/content/engagement";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Get Support",
  description:
    "Learn how Bhaavam can help connect you with mental health professionals and support resources.",
};

export default function SupportPage() {
  return (
    <main id="main-content" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="rounded-3xl border border-blush-100 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blush-50 text-blush-600">
          <HeartHandshake className="h-7 w-7" aria-hidden />
        </div>
        <h1 className="mt-6 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {supportContent.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {supportContent.intro}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {supportContent.body}
        </p>

        <div className="mt-8 rounded-2xl border border-blush-100 bg-blush-50/50 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-blush-700">
            Reach us by email
          </p>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Share what kind of support you are looking for, your city or region,
            and whether you want therapist recommendations, crisis resources, or
            community support options.
          </p>
          <Button asChild size="lg" className="mt-5 w-full sm:w-auto">
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                supportContent.emailSubject
              )}`}
            >
              <Mail className="h-4 w-4" aria-hidden />
              Email Bhaavam
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}

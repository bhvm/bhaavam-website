import type { Metadata } from "next";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { socialChannels } from "@/content/social";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Follow Us",
  description:
    "Stay connected with Bhaavam Foundation across Instagram and upcoming social channels.",
};

const iconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  youtube: Youtube,
} as const;

export default function FollowUsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        Follow Us
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
        Keep up with Bhaavam&apos;s work, campaigns, community updates, and
        educational content across our social channels.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {socialChannels.map((channel) => {
          const Icon = iconMap[channel.icon];
          return (
            <Card key={channel.platform} className="border-blush-100/80">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-50 text-blush-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <CardTitle>{channel.platform}</CardTitle>
                    <p className="mt-1 text-sm text-ink-light">
                      {channel.handle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-relaxed text-ink-muted">
                  {channel.description}
                </p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blush-700 hover:text-blush-600"
                  >
                    Visit channel
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                ) : (
                  <Link
                    href="/contact-us?topic=social"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blush-700 hover:text-blush-600"
                  >
                    Request this link
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}

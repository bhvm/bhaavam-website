import type { Metadata } from "next";
import { Mail, Instagram } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { contactContent } from "@/content/engagement";
import { socialChannels } from "@/content/social";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Bhaavam Foundation for partnerships, volunteering, support enquiries, and general questions.",
};

export default async function ContactUsPage({
  searchParams,
}: {
  searchParams?: Promise<{ topic?: string }>;
}) {
  const topicPrefill: Record<string, string> = {
    advisory: "I would like to learn more about joining the advisory board.",
    volunteer: "I would like to volunteer with Bhaavam Foundation.",
    donation: "I would like to discuss making a donation to Bhaavam Foundation.",
    social: "I would like to stay updated on Bhaavam's upcoming social channels.",
  };
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const initialMessage =
    topicPrefill[resolvedSearchParams?.topic ?? ""] ?? "";

  const instagram = socialChannels.find(
    (channel) => channel.platform === "Instagram"
  );

  return (
    <main id="main-content" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section>
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            {contactContent.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            {contactContent.intro}
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-blush-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush-50 text-blush-600">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-ink">Official Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-blush-700 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {instagram ? (
              <div className="rounded-2xl border border-blush-100 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush-50 text-blush-600">
                    <Instagram className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium text-ink">Instagram</p>
                    <a
                      href={instagram.href ?? siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blush-700 hover:underline"
                    >
                      {instagram.handle}
                    </a>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section>
          <ContactForm
            recipientEmail={siteConfig.email ?? "connect@bhaavamfoundation.org"}
            successMessage={contactContent.successMessage}
            initialMessage={initialMessage}
          />
        </section>
      </div>
    </main>
  );
}

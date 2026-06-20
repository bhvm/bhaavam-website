/**
 * Centralized site content for Bhaavam Foundation.
 * Instagram-sourced details: see src/content/social
 */

import { instagramProfile } from "@/content/social";

export const siteConfig = {
  name: "Bhaavam Foundation",
  /** Aligns with messaging on @bhaavam_foundation */
  tagline: "Awareness, connection, and compassionate support",
  description:
    "Bhaavam Foundation (भावम्) advances mental health awareness through education, community conversation, and stigma reduction. We share resources, stories, and pathways to support.",
  /** “Bhaav” - emotion, feeling; “-am” - a sense of belonging */
  nameMeaning:
    "Rooted in the idea that emotions (bhaav) deserve space, understanding, and care.",
  instagram: instagramProfile.url,
  instagramHandle: `@${instagramProfile.handle}`,
  /** Add when listed on Instagram or website */
  email: "bhaavamfoundation@gmail.com",
  phone: null as string | null,
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "News & Blogs", href: "/news-and-blogs" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact-us" },
] as const;

export const missionPillars = [
  {
    id: "awareness",
    title: "Mental Health Awareness",
    description:
      "We create approachable content that encourages people to understand emotions, recognize struggles early, and talk about mental health without shame.",
    icon: "lightbulb" as const,
  },
  {
    id: "education",
    title: "Education",
    description:
      "Through blogs, recommendations, and awareness initiatives, we translate mental health topics into language communities can actually use.",
    icon: "heart-handshake" as const,
  },
  {
    id: "community",
    title: "Community Building",
    description:
      "We believe safer, kinder communities are built through conversation, shared learning, volunteer energy, and spaces where people feel seen.",
    icon: "accessibility" as const,
  },
  {
    id: "stigma",
    title: "Reducing Stigma",
    description:
      "Bhaavam works to normalize asking for help, challenge silence around distress, and make support-seeking feel human rather than hidden.",
    icon: "hands-helping" as const,
  },
] as const;

export const impactStats = [
  {
    label: "Individuals Reached",
    value: "1,200+",
    icon: "users" as const,
  },
  {
    label: "Awareness Initiatives",
    value: "12",
    icon: "presentation" as const,
  },
  {
    label: "Volunteers",
    value: "18",
    icon: "book" as const,
  },
  {
    label: "Community Events",
    value: "6",
    icon: "film" as const,
  },
  {
    label: "Partnerships",
    value: "5",
    icon: "users" as const,
  },
] as const;

export const heroContent = {
  headline: "You are not alone. Every emotion has a purpose.",
  subheadline:
    "Bhaavam Foundation builds mental health awareness through honest conversation, educational resources, and community-led efforts that reduce stigma and help people find the right support.",
  primaryCta: {
    label: "Get Support",
    href: "/support",
  },
  secondaryCta: {
    label: "Donate",
    href: "/donate",
  },
};

export const socialLinks = [
  {
    platform: "Instagram",
    href: instagramProfile.url,
    handle: `@${instagramProfile.handle}`,
  },
] as const;

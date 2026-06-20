import type { FeedPost } from "./types";

/** Homepage carousel - max 5 displayed */
export const carouselPosts: FeedPost[] = [
  {
    id: "news-1",
    title: "How Bhaavam Uses Education to Reduce Mental Health Stigma",
    description:
      "A look at why accessible language, honest conversation, and community education are central to our work.",
    image: "/images/posts/featured/post-1.jpeg",
    date: "2026-05-01",
    category: "News",
  },
  {
    id: "news-2",
    title: "Community Care Starts with Conversation",
    description:
      "Why community-led dialogue matters when building a culture that supports emotional wellbeing.",
    image: "/images/posts/placeholders/post-2.svg",
    date: "2026-05-15",
    category: "Community",
  },
  {
    id: "news-3",
    title: "Five Signs a Mental Health Resource Feels Genuinely Accessible",
    description:
      "A practical framework for spotting content and support pathways that people can actually use.",
    image: "/images/posts/placeholders/post-1.svg",
    date: "2026-05-22",
    category: "Guide",
  },
  {
    id: "news-4",
    title: "Why Asking for Help Is a Community Skill, Not Just a Personal One",
    description:
      "Support-seeking becomes easier when families, peers, and institutions help normalize it.",
    image: "/images/posts/placeholders/post-3.svg",
    date: "2026-05-30",
    category: "Awareness",
  },
  {
    id: "news-5",
    title: "From Content to Connection: What Bhaavam Wants to Build Next",
    description:
      "A look at how digital awareness can grow into events, partnerships, and stronger support networks.",
    image: "/images/posts/placeholders/post-4.svg",
    date: "2026-06-08",
    category: "Update",
  },
];

/** Full post archive metadata. Long article bodies are loaded only on click. */
export const allPostSummaries: FeedPost[] = [
  ...carouselPosts,
  {
    id: "blog-1",
    title: "Healing Takes Time: Embracing the Slow Process",
    description:
      "A comprehensive, deep dive into why emotional healing is spiral rather than linear, and how to retune your nervous system with patience.",
    image: "/images/posts/placeholders/post-2.svg",
    date: "2026-05-20",
    category: "Blog",
  },
  {
    id: "blog-2",
    title: "The Courage to Speak: Overcoming Stigma",
    description:
      "Breaking down the fear around discussing our mental struggles and how to start honest conversations.",
    image: "/images/posts/placeholders/post-1.svg",
    date: "2026-04-15",
    category: "Blog",
  },
  {
    id: "archive-1",
    title: "Inside Out: Every Emotion Has a Purpose",
    description:
      "How this film reminds us that sadness can be a bridge to healing and connection.",
    image: "/images/posts/placeholders/post-3.svg",
    date: "2025-04-17",
    category: "Review",
  },
  {
    id: "archive-2",
    title: "An Unquiet Mind - Book Reflection",
    description:
      "A memoir on bipolar disorder, resilience, and the path toward acceptance.",
    image: "/images/posts/placeholders/post-4.svg",
    date: "2025-04-04",
    category: "Review",
  },
  {
    id: "archive-3",
    title: "Sunlight, Candor & Conversation",
    description:
      "What mental health needs is more unashamed conversation - our founding message.",
    image: "/images/posts/placeholders/post-5.svg",
    date: "2025-04-03",
    category: "News",
  },
  {
    id: "archive-4",
    title: "Good Will Hunting - Finding Light",
    description:
      "Even in dark moments, there is good worth paying attention to. Healing takes time.",
    image: "/images/posts/placeholders/post-6.svg",
    date: "2025-04-03",
    category: "Review",
  },
];

export const CAROUSEL_MAX = 5;

export const aboutOverview = {
  intro:
    "Bhaavam Foundation is a growing mental health initiative centered on awareness, education, and compassionate connection. We create approachable conversations around emotional wellbeing so people can understand themselves and support one another with more empathy.",
  body:
    "Our work brings together mental health education, thoughtful storytelling, community participation, and resource-sharing. We want people to feel less alone, less judged, and more able to take the next step toward support.",
};

export const visionContent = {
  headline: "Our Vision",
  body:
    "We envision communities where mental health is discussed openly, support-seeking is normalized, and people can access guidance without fear, stigma, or confusion. Over time, Bhaavam aims to contribute to a culture where awareness leads to action and care leads to lasting change.",
};

export interface FounderProfile {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const founders: FounderProfile[] = [
  {
    name: "Founder Profile One",
    title: "Founding Team",
    bio:
      "This space is ready for the founder's story, leadership background, and the lived motivation behind Bhaavam's work. Replace this text and image with the real profile when available.",
    image: "/images/team/founder-placeholder-1.svg",
  },
  {
    name: "Founder Profile Two",
    title: "Founding Team",
    bio:
      "Use this card for a co-founder or early team member. The layout is built to scale cleanly as you add more people, bios, and photos later.",
    image: "/images/team/founder-placeholder-2.svg",
  },
];

export const supportContent = {
  title: "Get Support",
  intro:
    "Bhaavam does not directly provide therapy or clinical counselling. We do, however, want to help people find the right next step.",
  body:
    "If you reach out, we can help connect you with appropriate mental health professionals, organizations, or trusted resources based on what you are looking for.",
  emailSubject: "Bhaavam support request",
};

export const donateContent = {
  title: "Donate",
  intro:
    "Your support helps Bhaavam continue awareness efforts, community initiatives, and educational work around mental health.",
  options: [
    "Support awareness campaigns and educational content.",
    "Help us strengthen volunteer-led community initiatives.",
    "Enable future partnerships, events, and resource-building.",
  ],
};

export const involvementSections = [
  {
    id: "advisory",
    title: "Join the Advisory Board",
    description:
      "We are building an advisory community of people who can guide strategy, partnerships, mental health programming, governance, and long-term growth.",
    points: [
      "Offer strategic guidance and thoughtful feedback.",
      "Support partnerships, networks, and institutional credibility.",
      "Contribute expertise in mental health, education, outreach, law, fundraising, or operations.",
    ],
    ctaLabel: "Apply to Join",
    ctaHref: "/contact-us?topic=advisory",
  },
  {
    id: "volunteer",
    title: "Volunteer With Us",
    description:
      "Volunteers can support content creation, outreach, event coordination, community engagement, design, research, and operational support.",
    points: [
      "Contribute to campaigns, resources, and awareness initiatives.",
      "Help organize community-driven events and collaborations.",
      "Bring your skills in writing, research, design, social media, or people operations.",
    ],
    ctaLabel: "Apply to Volunteer",
    ctaHref: "/contact-us?topic=volunteer",
  },
] as const;

export const contactContent = {
  title: "Contact Us",
  intro:
    "Reach out with questions, partnerships, media inquiries, volunteer interest, or general messages for the Bhaavam team.",
  successMessage:
    "Thank you for reaching out. Your details are ready to send, and we will do our best to respond with care.",
};

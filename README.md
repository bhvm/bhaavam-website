# Bhaavam Foundation Website

A modern, empathetic mental health aid website for [Bhaavam Foundation](https://www.instagram.com/bhaavam_foundation) (`@bhaavam_foundation`).

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS** - calming blush, cream, and ink palette
- **Radix UI** primitives + shadcn-style components
- **Framer Motion** - gentle, reduced-motion-aware animations
- **Lucide React** icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
public/
└── images/
    ├── brand/                # Logo and brand imagery
    └── posts/
        ├── featured/         # Real post/blog cover images
        └── placeholders/     # Fallback artwork

src/
├── app/                      # Routes and global layout
├── components/
│   ├── home/                 # Homepage sections
│   ├── layout/               # Header and footer
│   ├── motion/               # Framer Motion wrappers
│   ├── resources/            # Resource-page sections
│   └── ui/                   # Buttons, cards, primitives
├── content/
│   ├── resources/            # Blog/resource data
│   ├── site/                 # Hero, nav, mission, footer copy
│   └── social/               # Instagram profile and post summaries
└── lib/
    └── utils.ts              # cn() helper
```

## Pages

- `/` - Home: hero, mission pillars, latest posts, impact stats, CTA
- `/about` - Foundation story, mission, and values
- `/resources` - Blog/resource archive plus Instagram highlights
- `/contact` - Get involved and support/contact entry point

## Content Workflow

Most content edits now live in `src/content`:

- `src/content/site/index.ts`
  Change the site name, tagline, navigation, hero copy, mission pillars, stats, and footer-linked content here.
- `src/content/resources/index.ts`
  Add or edit blog posts, featured stories, resource cards, titles, descriptions, dates, and long-form article content here.
- `src/content/social/index.ts`
  Update Instagram profile details, follower counts, post summaries, and recommendation content here.

Static images are organized for easier growth:

- `public/images/brand/`
  Brand assets like the logo.
- `public/images/posts/featured/`
  Real photos, blog covers, campaign images, and future gallery thumbnails.
- `public/images/posts/placeholders/`
  Placeholder visuals you can swap out later.

When adding a new blog or photo-backed resource:

1. Put the image in `public/images/posts/featured/`.
2. Add a new object in `src/content/resources/index.ts`.
3. Point the post's `image` field to the new file, for example `"/images/posts/featured/my-new-post.jpg"`.

## Accessibility

- Semantic HTML (`main`, `section`, `nav`, `footer`)
- Skip-to-content link
- ARIA labels on navigation and interactive controls
- `prefers-reduced-motion` respected
- WCAG-minded contrast for calm, readable pages

## Notes

- Foundation copy and recommendations are synced from the public Instagram profile **[@bhaavam_foundation](https://www.instagram.com/bhaavam_foundation/)**.
- The app currently uses local content files, which makes it simple to keep growing without introducing a CMS yet.

## License

Private - Bhaavam Foundation.

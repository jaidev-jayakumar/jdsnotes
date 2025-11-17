# Personal Portfolio Template

A minimal, elegant personal portfolio and notes website template built with Next.js 14. Features a warm editorial design with thoughtful interactions and easter eggs. Perfect for engineers, designers, and builders who want a clean, professional online presence.

## ✨ Features

- 🎨 **Warm Editorial Design**: Beige background with brown accents, inspired by high-end editorial websites
- 📝 **Notes/Blog Section**: Substack-style blog with reading time estimates
- 💼 **Work Experience Timeline**: Showcase your professional journey with company logos
- 🎓 **Education Section**: Highlight your academic background
- 🚀 **Project Showcase**: Grid layout with support for images, videos, and interactive carousels
- 🎮 **Easter Eggs**: Hidden animations and interactions (Konami code, journey animation, location favorites)
- 📊 **Analytics Ready**: Integrated with Vercel Analytics
- 🎭 **Smooth Animations**: Scroll-triggered effects and micro-interactions
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices

## 🚀 Quick Start

1. **Clone or fork this repository**

```bash
git clone <your-repo-url>
cd jdsnotes
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** and start customizing!

## 📝 Customization Guide

### 1. Update Personal Information

#### **Home Page (`/app/page.tsx`)**

Replace with your information:

```tsx
// Intro paragraph (line ~10)
<p className="text-[15px] leading-[1.7] max-w-3xl font-mono">
  Your personal intro/bio here...
</p>

// Work Experience Timeline (lines ~17-51)
<TimelineCard
  title="Your Job Title"
  company="Company Name · Full-time"
  description="What you did at this role..."
  date="Start Date - End Date"
  location="City, State/Country"
  logo="/your-company-logo.jpg"
  highlighted // Add this for current role
/>

// Education Section (lines ~54-72)
<TimelineCard
  title="Your Degree"
  company="University Name · Field of Study"
  description="What you studied or focused on..."
  date="Year - Year"
  location="City, State/Country"
  logo="/university-logo.png"
/>

// Projects (lines ~89-149)
<ProjectCard
  index={0}
  title="Your Project Name"
  description="What your project does..."
  href="https://your-project.com"
  tags={["Tag1", "Tag2"]}
  image="/project-image.png"
  techStack={["Tech1", "Tech2", "Tech3"]}
/>
```

#### **Header/Logo (`/components/AnimatedLogo.tsx`)**

Update your name and tagline:

```tsx
// Line ~20: Replace name
Jaidev Jayakumar → Your Name

// Line ~34: Replace tagline
improving healthcare by >=1% → your tagline

// Lines ~6-11: Replace journey locations
const placesLived = [
  { name: "Your City 1", emoji: "🌴", vibe: "description", x: 10 },
  { name: "Your City 2", emoji: "🎓", vibe: "description", x: 30 },
  // Add more cities...
];
```

#### **Location Badge (`/components/LocationBadge.tsx`)**

Update your current location and favorite spots:

```tsx
// Line ~12: Replace timezone
'America/Los_Angeles' → 'Your/Timezone'

// Line ~45: Replace location text
San Francisco, CA → Your City

// Lines ~48: Replace image
/golden-gate.jpg → /your-city-landmark.jpg

// Lines ~63-73: Replace favorite places
const favoritePlaces = [
  { name: "Your Favorite Spot", emoji: "☕", vibe: "why you love it" },
  // Add more places...
];
```

#### **Footer (`/components/Footer.tsx`)**

Update social media links:

```tsx
// Lines ~10-35: Replace with your URLs
LinkedIn: https://www.linkedin.com/in/your-username/
Twitter: https://x.com/your-username
GitHub: https://github.com/your-username
Substack: https://substack.com/@your-username
```

### 2. Add Your Projects

Projects are defined in `/app/page.tsx`. Here are the different types:

#### **Simple Project Card (with image)**

```tsx
<ProjectCard
  index={0}
  title="Project Name"
  description="Short description of your project"
  href="https://project-url.com"
  tags={["Category", "Tech"]}
  image="/project-screenshot.png"
  techStack={["React", "Node.js", "MongoDB"]}
/>
```

#### **Project with Video**

```tsx
<ProjectCard
  index={1}
  title="Project Name"
  description="Description..."
  video="/demo-video.mp4"
  tags={["Hardware", "IoT"]}
  techStack={["Arduino", "C++"]}
/>
```

#### **Project with Image Carousel (iPhone Frame)**

```tsx
<ProjectCard
  index={2}
  title="Mobile App"
  description="Description..."
  swiperImages="/screen1.png,/screen2.png,/screen3.png"
  tags={["iOS", "Mobile"]}
  techStack={["Swift", "SwiftUI"]}
  githubUrl="https://github.com/username/repo"
/>
```

#### **Highlighting Numbers/Metrics**

Use JSX to highlight important metrics:

```tsx
description={
  <>
    Your project description. Scaled to{' '}
    <span className="text-accent font-semibold">2k+ users</span>.
  </>
}
```

### 3. Add Notes/Blog Posts

#### **Create a New Note**

1. Create a folder: `/app/work/your-note-slug/`
2. Create `page.tsx` inside with this structure:

```tsx
import Section from "@/components/Section";
import Image from "next/image";

export default function YourNotePage() {
  return (
    <Section>
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <time className="text-[11px] font-mono text-muted uppercase tracking-wider">
            Jan 15, 2024
          </time>
          <h1 className="text-3xl md:text-4xl font-serif mt-3 mb-4">
            Your Note Title
          </h1>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src="/your-image.jpg"
            alt="Description"
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg font-mono">
          <p>Your content here...</p>
        </div>
      </article>
    </Section>
  );
}
```

3. Add the note card to `/app/work/page.tsx`:

```tsx
<NoteCard
  title="Your Note Title"
  date="Jan 15, 2024"
  excerpt="A short excerpt of your note..."
  href="/work/your-note-slug"
  readTime="5 min read"
/>
```

### 4. Add Your Images

Place all images in the `/public` folder:

- Company logos: `/public/company-logo.png`
- Project screenshots: `/public/project-name.png`
- Note images: `/public/note-image.jpg`
- Videos: `/public/demo.mp4`

**Image Requirements:**

- Logos: Transparent PNG, square, ~200x200px
- Project images: 16:9 or 4:3 ratio
- Note images: Any size, will be optimized by Next.js

### 5. Update Metadata

Edit `/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name",
  description: "Your tagline - Portfolio and Notes",
};
```

### 6. Customize Design

#### **Colors (`/tailwind.config.ts`)**

```ts
colors: {
  background: "#EEEBE7",  // Warm beige
  foreground: "#1A1A1A",  // Near black
  muted: "#666666",       // Gray
  accent: "#8B4513",      // Brown accent
  "accent-light": "#D2691E",
}
```

#### **Fonts (`/app/layout.tsx`)**

Replace with your preferred Google Fonts:

```tsx
import { Your_Font, Another_Font } from "next/font/google";

const yourFont = Your_Font({
  subsets: ["latin"],
  variable: "--font-your-font",
  // ...
});
```

Update in `tailwind.config.ts`:

```ts
fontFamily: {
  serif: ["var(--font-your-font)", "Georgia", "serif"],
  mono: ["var(--font-another-font)", "Courier New", "monospace"],
}
```

## 🎮 Easter Eggs

This template includes three fun easter eggs you can customize or remove:

1. **Journey Animation**: Click the name in header - edit `/components/AnimatedLogo.tsx` to update your journey
2. **Location Favorites**: Click location pin - edit `/components/LocationBadge.tsx` for your favorite spots

To remove an easter egg, simply remove the component from `/app/layout.tsx`.

## 📊 Analytics Setup

This template includes Vercel Analytics. To enable:

1. Deploy to Vercel
2. Enable Analytics in your Vercel project dashboard
3. That's it! The `<Analytics />` component is already integrated

To use a different analytics provider, replace the `Analytics` import in `/app/layout.tsx`.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

```bash
npm run build
npm start
```

The site is production-ready for deployment to any Node.js hosting platform.

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Libre Baskerville, IBM Plex Mono)
- **Analytics:** Vercel Analytics
- **Image Optimization:** Next.js Image

## 🎨 Design Philosophy

- **Typography-first**: Content is king
- **Minimal color palette**: Beige, black, brown
- **Generous whitespace**: Let content breathe
- **Micro-interactions**: Delightful hover states and animations
- **Mobile-first**: Responsive from the ground up

## 📁 Project Structure

```
jdsnotes/
├── app/
│   ├── layout.tsx              # Root layout, fonts, analytics
│   ├── page.tsx                # Home (work timeline + projects)
│   ├── globals.css             # Global styles & animations
│   └── work/
│       ├── page.tsx            # Notes listing
│       └── [note-slug]/
│           └── page.tsx        # Individual note pages
├── components/
│   ├── AnimatedLogo.tsx        # Logo with journey animation
│   ├── LocationBadge.tsx       # Location with favorites
│   ├── Header.tsx              # Navigation
│   ├── Footer.tsx              # Footer with social links
│   ├── TimelineCard.tsx        # Work/education cards
│   ├── ProjectCard.tsx         # Project cards
│   ├── NoteCard.tsx            # Note listing cards
│   ├── ImageSwiper.tsx         # Image carousel
│   ├── IPhoneFrame.tsx         # iPhone mockup
│   └── ...                     # Other components
├── public/                     # Static assets (images, videos)
└── tailwind.config.ts          # Tailwind configuration
```

## 🤝 Contributing

Feel free to fork this template and make it your own! If you build something cool or make improvements, I'd love to see it.

## 💡 Tips

- **Content first**: Replace all placeholder content before styling
- **Keep it simple**: Don't overcomplicate your projects section
- **Personal touch**: Customize the easter eggs to reflect your personality
- **Regular updates**: Keep your work experience and projects current
- **Write notes**: The notes section is great for sharing knowledge and building SEO

## 🐛 Need Help?

- Check existing issues in the repository
- Review Next.js 14 docs for App Router specifics
- Tailwind CSS docs for styling questions

---

**Built with ❤️ using Next.js and Tailwind CSS**

# Physical Intelligence (π)

A minimal, elegant research portfolio site built with Next.js 14, inspired by the [Physical Intelligence](https://www.physicalintelligence.company/) company website.

## Design Philosophy

This project embraces a restrained, typography-first aesthetic with:

- Warm beige background (#EEEBE7) with dark text
- Elegant serif headings (Libre Baskerville) + monospace body text (IBM Plex Mono)
- Timeline-style project listings with dots and connecting lines
- Large, generous whitespace
- Minimal color palette (beige/black/gray)
- Focus on readability and content

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Google Fonts (Libre Baskerville, IBM Plex Mono)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
jdsnotes/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── work/
│   │   └── page.tsx     # Research/work page
│   ├── about/
│   │   └── page.tsx     # About page
│   └── contact/
│       └── page.tsx     # Contact page
├── components/
│   ├── Header.tsx       # Site header/navigation
│   ├── Footer.tsx       # Site footer
│   ├── Section.tsx      # Section wrapper
│   └── ProjectCard.tsx  # Timeline-style project card
└── tailwind.config.ts   # Tailwind configuration
```

## Design System

### Typography

- **Headings:** Libre Baskerville (serif)
- **Body:** IBM Plex Mono (monospace)
- **Scales:** 15px body, 18-20px headings

### Colors

- Background: `#EEEBE7` (warm beige)
- Foreground: `#1A1A1A` (near black)
- Muted: `#666666` (gray)

### Spacing

- Sections: `py-16` to `py-24`
- Container: `max-w-4xl`

### Special Elements

- Timeline dots with vertical connecting lines
- Black borders on highlighted project cards
- Underlined links with subtle hover states

## Key Features

- ✅ Monospace typography matching Physical Intelligence website
- ✅ Timeline-style project cards with bullet dots
- ✅ Warm beige background (#EEEBE7)
- ✅ Clean, minimal navigation
- ✅ Fully responsive design
- ✅ Typography-first layout

## Customization

Edit the content in each page file to customize:

- `/app/page.tsx` - Home page content
- `/app/work/page.tsx` - Research/portfolio projects
- `/app/about/page.tsx` - About information
- `/app/contact/page.tsx` - Contact details

Update colors and typography in:

- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles

## Building for Production

```bash
npm run build
npm start
```

## License

MIT

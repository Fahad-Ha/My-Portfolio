# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Next.js 12.2, React 18, and Tailwind CSS. The site showcases Fahad Ahmad's work as a Full Stack Developer and Civil Engineer, and also hosts support/legal pages for mobile apps (Efhamni, Sarkk, Mn Almo7tal).

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Page Structure

- **Main Portfolio**: `pages/index.js` - Homepage with skills, projects, dark mode toggle, social links, and resume link
- **App Support Pages**: Multiple standalone pages for mobile apps:
  - `pages/mn-almo7tal-support.js` - Support page for Mn Almo7tal game
  - `pages/efhamni-privacy-policy.js` - Privacy policy for Efhamni app
  - `pages/efhamni-terms.js` - Terms for Efhamni app
  - `pages/sarkk-privacy-policy.js` - Privacy policy for Sarkk app
  - `pages/sarkk-terms.js` - Terms for Sarkk app

All pages follow a consistent pattern:
- Shared navigation with dark mode toggle
- Tailwind CSS for styling with dark mode support
- react-icons for UI icons (BsMoonStarsFill for dark mode, AiFillGithub/AiFillLinkedin for social)

### Styling System

- **Tailwind CSS**: Primary styling framework with dark mode class strategy (`darkMode: "class"` in tailwind.config.js)
- **Custom Font**: Burtons font loaded via @font-face in `styles/globals.css`
- **Color Scheme**: Teal/cyan gradient accents (from-cyan-500 to-teal-500), gray backgrounds for dark mode
- **Dark Mode**: State-based toggle using React useState, applied via className conditional

### Static Assets

- `public/` contains images, custom font (Burtons.otf), and favicon
- Project screenshots: web1-web6.png, clicker.png, Meme-Gen-ScrShot.png
- Avatar image: Avatar.jpg

## Key Configuration

- **Next.js Config**: `next.config.js` has React strict mode enabled
- **Deployment**: Configured for Netlify via `netlify.toml` with @netlify/plugin-nextjs
- **Path Aliases**: jsconfig.json sets up `@/` alias pointing to project root

## Code Patterns

- All pages use functional components with hooks (useState for dark mode)
- Consistent layout: nav → content sections with responsive Tailwind classes (px-10 md:px-20 lg:px-40)
- Next.js Head component for SEO meta tags on every page
- External links use target="_blank" for new tab behavior

# HaveAIDoIt.com - Marketing Site Build Brief

## What This Is
A modern marketing site for "Have AI Do It" - a practical AI guides & consulting brand. Replace the current Ghost-only site with a proper Next.js frontend. Ghost will remain for the blog/newsletter only.

## Brand
- **Name:** Have AI Do It
- **Tagline:** "Practical AI for people who'd rather skip the hype"
- **Tone:** Friendly, no-BS, approachable. NOT corporate or techy.
- **Audience:** Small business owners and non-technical people who want to use AI
- **Colors:** Use a modern palette - deep navy/dark backgrounds with electric blue/purple accents. Think: premium but approachable, not startup-bro.

## Pages to Build

### 1. Landing Page (src/app/page.tsx)
- **Hero Section:** Animated gradient background. Big headline: "Have AI Do It." Subhead: "Practical AI guides and done-for-you setup for small businesses." Two CTAs: "Read the Guides" and "Get AI Setup for Your Business"
- **Social proof strip:** "Trusted by X readers" or similar (placeholder numbers fine)
- **What We Do section:** 3 cards with icons and animations on scroll:
  1. Free Guides - "Learn to use AI tools yourself with no-BS guides"
  2. AI Setup Services - "We set up AI tools so they actually work in your business"
  3. Newsletter - "Weekly AI tips that don't require a CS degree"
- **Featured Guides grid:** 6 cards linking to the guides (use these real URLs):
  - /ai-tools-for-small-business/
  - /ai-writing-tools/
  - /ai-image-generators/
  - /make-money-with-ai/
  - /ai-photo-editing-apps/
  - /best-free-ai-tools-2026/
- **Services preview section:** Brief pitch for consulting with link to /services
- **Newsletter signup:** Email capture form (just UI for now, no backend)
- **Footer:** Links, social icons, copyright

### 2. Guides Page (src/app/guides/page.tsx)
- Grid of all guide cards with categories
- Each card has title, description, reading time, category tag
- Animated on scroll entrance
- Links to Ghost pages (external links to haveaidoit.com/slug for now)
- Guides list:
  - AI Tools for Small Business | /ai-tools-for-small-business/ | Business
  - Make Money with AI | /make-money-with-ai/ | Business  
  - AI Writing Tools | /ai-writing-tools/ | Writing
  - ChatGPT Email Guide | /chatgpt-email-writing-guide/ | Writing
  - AI Image Generators | /ai-image-generators/ | Images
  - AI Photo Editing Apps | /ai-photo-editing-apps/ | Images
  - Best Free AI Tools 2026 | /best-free-ai-tools-2026/ | Tools
  - ChatGPT vs Google | /chatgpt-vs-google-search/ | Understanding AI
  - OpenClaw Guide | /openclaw-ai-assistant-guide/ | Build

### 3. Services Page (src/app/services/page.tsx)
- Hero with headline: "AI Setup. Done For You."
- How it works: 4-step animated timeline (Free Call → I Build It → I Train Your Team → 30 Days Support)
- Pricing cards (3 tiers, animated):
  - Starter $500: One automation or chatbot + training
  - Growth $1,500: Up to 3 automations + chatbot + content workflow
  - Custom $2,500+: Full AI audit + custom implementation
- FAQ accordion
- CTA: Book a free call (email: carson@haveaidoit.com)

### 4. About Page (src/app/about/page.tsx)  
- Brief story: Carson West, finance by day, AI builder by side
- Projects built: ArborValue, GrantFound, Have AI Do It
- Link to services

## Design Requirements
- **Framer Motion animations throughout:** fade-in on scroll, staggered card entrances, smooth hover states, animated counters
- **Dark mode by default** with light mode support
- **Mobile-first responsive**
- **Modern glassmorphism elements** - subtle blur/transparency effects
- **Gradient accents** - think linear gradients on CTAs and hero backgrounds
- **Smooth scroll** between sections
- **shadcn/ui components** already installed (Button, Card, Badge)

## Tech Stack (Already Set Up)
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (installed)
- lucide-react for icons

## Layout
- Create a shared layout with:
  - Sticky nav header with logo, page links (Guides, Services, About), and "Get Started" CTA button
  - Footer with links and newsletter signup

## IMPORTANT Style Rules
- NEVER use em dashes (—). Use " - " or restructure sentences.
- Keep copy conversational, not corporate
- No "revolutionize" or "leverage" or "synergy" type words
- Dark theme: dark navy/charcoal background (#0a0a1a or similar), not pure black

## File Structure
- src/app/layout.tsx - Root layout with nav + footer
- src/app/page.tsx - Landing page
- src/app/guides/page.tsx - Guides listing
- src/app/services/page.tsx - Services/pricing
- src/app/about/page.tsx - About page
- src/components/ui/ - shadcn components (already there)
- src/components/ - Custom components (Navbar, Footer, GuideCard, PricingCard, etc.)

When completely finished, run this command to notify me:
openclaw system event --text "Done: Built HaveAIDoIt marketing site - landing, guides, services, about pages with animations" --mode now

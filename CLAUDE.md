# Alexandria - Personalized Micro-Learning SaaS

## Project Overview

A SaaS for personalized micro-learning. Users sign up, select interests (e.g., physics, robotics), and receive periodic AI-generated short materials via email (using xAI API or similar LLM). Focus on effortless daily integration to build habits without overwhelming users.

## Concept & Approach

- **Form & Delivery**: Website as core (PWA for desktop optimization to encourage reading on laptops, reducing mobile skips/churn). Daily emails with content links; avoids Chrome extension/mobile app initially for broader reach and simplicity.
- **Desktop-first**: Optimized for engagement on laptops/desktops where users are more likely to read content
- **MVP Timeline**: 1-2 weeks leveraging React/TypeScript/Supabase skills

## User Flow

1. **Landing page**: Attractive design (TailwindCSS, MagicUI animations) with hooks like "Seamlessly weave learning into your daily routine."
2. **Post-signup**: Multi-step onboarding wizard for topic selection, frequency (daily/weekly), customization (depth/format), and preview of sample content.
3. **Dashboard**: For editing prefs, viewing history, tracking progress/streaks, and on-demand access.

## Technology Stack

- React Router v7 (full-stack framework with Remix integration for routing/server actions)
- React 18
- TypeScript
- TailwindCSS v4
- Shadcn/UI for components
- MagicUI for animations
- Supabase (auth/DB/cron/emails)
- xAI API for content generation (via Python/Edge Functions)
- Vite

## Project Structure

```
app/
├── common/
│   ├── components/
│   │   └── ui/
│   └── pages/
├── features/
│   └── [feature]/
│       ├── components/
│       ├── layouts/
│       └── pages/
├── hooks/
├── lib/
└── sql/
    ├── functions/
    ├── migration/
    │   └── meta/
    ├── triggers/
    └── views/
```

## Key Features

- AI-generated micro-learning content
- Personalized topic selection and customization
- Progress tracking and streak maintenance
- Email delivery system with content links
- Multi-step onboarding wizard
- User dashboard for preferences and history

## Development Notes

- Setup via `npx create-react-router@latest alexandria` with TypeScript
- Scalable with Docker/K8s later
- Addresses challenges like content accuracy and retention via previews/feedback

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm start` - Start production server

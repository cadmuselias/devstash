# Current Feature

Dashboard UI Mock Data Structure

## Status

Completed

## Goals

- Create `src/lib/mock-data.ts` as a single source of truth for mock data for the dashboard UI.
- Reflect the exact data displayed in the screenshots (`dashboard-ui-main_1.png`, `dashboard-ui-main_2.png`, `dashboard-ui-main_items_split_View.png`, etc.).
- Structure mock items (14 total), collections (4 total), item types (7 total), and the current logged-in user (Elias M., Pro tier).
- Keep data structures clean and straightforward with TypeScript types and pure data exports (no helper methods).

## Notes

- Total saved items: 14
  - Snippets: 4
  - Prompts: 2
  - Commands: 2
  - Notes: 2
  - Files: 2
  - Images: 1
  - URLs: 1
- Pinned items: 4
- Favorite items: 4
- Active collections: 4 ("Next.js + Stripe Stack", "AI Prompt Engineering", "DevOps & CLI Toolkit", "Architecture & Docs")
- Pro Storage: 18.4 MB / 50 GB

## History

- **Initial Setup of Next.js**: Initialized Next.js project with App Router, TypeScript, Tailwind CSS v4, and ESLint via `create-next-app`. Cleaned up starter template boilerplate and default assets.
- **Dashboard UI Mock Data**: Created `src/lib/mock-data.ts` containing mock user, collections, item types, and 14 mock items matching dashboard UI screenshots.

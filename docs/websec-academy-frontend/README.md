# WebSec Academy

A hands-on web security learning platform — practical vulnerability lessons with
side-by-side vulnerable/secure code, guided labs, learning paths, and progress tracking.

This repo currently ships **Phase 1: the frontend UI** (landing page, dashboard,
lesson template) as static-data React screens. No backend, auth, or database yet —
those are the next phases (see roadmap below), and the app is structured so they
drop in without reworking the UI.

## Design system

- **White / glass theme** — surfaces use a shared `.glass` / `.glass-strong` utility
  (`src/index.css`) so every panel (nav, cards, lesson blocks) stays visually consistent.
- **Type** — Inter for UI and body text, JetBrains Mono for code, CWE tags, badges,
  and anything that reads as "technical" — ties the type system to the security/code subject matter.
- **Color** — violet/cyan brand gradient; a separate severity palette
  (`critical` / `high` / `medium` / `low` / `safe`) used consistently for vulnerability
  severity across the topic list, dashboard, and lesson pages. See `tailwind.config.js`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/
    layout/       Navbar, Footer — shared across every page
    ui/            GlassCard, Badge — small reusable primitives
    landing/       Hero, LearningPaths, Features, TopicsOverview, Community
    dashboard/     DashboardStats, CourseCard
    lesson/        LessonLayout — the standard template every lesson renders through
  data/
    topics.js      Single source of truth for the 20-topic vulnerability catalog
  pages/
    LandingPage.jsx
    Dashboard.jsx
    LessonPage.jsx
  App.jsx           Route definitions
  main.jsx          React root + router
  index.css         Design tokens & shared component classes (glass, buttons)
```

`landing-preview.html` in the repo root is a standalone, dependency-free HTML/CSS/JS
version of the landing page — useful for quickly previewing the visual design without
running the build.

## Roadmap

This platform is being built in phases, per the original project plan:

- [x] **Phase 1 — Frontend UI**: landing page, navbar, dashboard UI, course cards, lesson template
- [ ] **Phase 2 — Authentication**: register/login pages, sessions, protected routes
- [ ] **Phase 3 — Backend API**: Node.js/Express or Python FastAPI service for users, progress, lessons
- [ ] **Phase 4 — Database**: PostgreSQL schema for users, lessons, progress, streaks
- [ ] **Phase 5 — Learning content**: full lesson content for all 20 vulnerability classes
- [ ] **Phase 6 — Daily labs**: rotating small demo apps, each with 5 embedded vulnerabilities

### Suggested backend shape (Phase 3+)

- **Framework**: FastAPI (Python) or Express (Node) — either works; FastAPI gives you
  free request validation via Pydantic, which pairs well with a security-focused product.
- **Auth**: short-lived JWT access token + httpOnly refresh cookie, bcrypt/argon2 password
  hashing, rate-limited login endpoint.
- **Core tables**: `users`, `lessons`, `user_progress`, `streaks`, `daily_labs`.
- **Vulnerable labs**: each daily lab should run as its own isolated, sandboxed process/container
  — never share a database or network namespace with the main app.

## Security & ethics note

Every vulnerable code example in this project exists to teach the corresponding fix.
Lesson content always pairs the vulnerable snippet with a secure implementation and a
prevention checklist. Practice labs (Phase 6) are self-contained, isolated demo apps
meant for local/sandboxed use — not for testing against systems you don't own.

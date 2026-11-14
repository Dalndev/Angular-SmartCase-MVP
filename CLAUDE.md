# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Nx Workspace Rules

- Always run tasks through `nx`, not the underlying tools directly
- Prefix nx commands with pnpm: `pnpm nx <command>`
- Never guess CLI flags — check `--help` or nx_docs first
- For scaffolding (new apps, libs, components), invoke the `nx-generate` skill first
- For navigating/exploring the workspace, invoke the `nx-workspace` skill first

## Common Commands

```bash
# Development
pnpm nx serve smartcase       # Start dev server (http://localhost:4200)
pnpm nx storybook ui          # Start Storybook for the UI library (http://localhost:4400)

# Quality
pnpm nx lint smartcase        # Lint the app
pnpm nx lint ui               # Lint the UI library
pnpm nx test smartcase        # Run tests for the app
pnpm nx test ui               # Run tests for the UI library
pnpm nx test ui --testFile=libs/ui/src/lib/components/button/button.spec.ts  # Run a single test file

# Build
pnpm nx build smartcase       # Build the app
pnpm nx build ui              # Build the UI library

# Workspace
pnpm nx format:check          # Check formatting (Prettier)
pnpm nx format:write          # Fix formatting
pnpm nx sync                  # Sync TypeScript project references
pnpm nx run-many -t lint test build typecheck  # Run all checks
```

## Architecture Overview

This is an **Angular 21 + Nx monorepo** using pnpm, with standalone components throughout (no NgModules).

### Workspace Layout

```
apps/smartcase/   → Main Angular app
libs/ui/          → Shared presentational component library (@org/ui)
```

### Path Aliases (tsconfig.base.json)

- `~ui` → `libs/ui/src/index.ts`
- `~cases/*` → `apps/smartcase/src/app/packages/cases/*`

### App Internal Structure (`apps/smartcase/src/app/`)

The app uses a **package-based feature architecture**:

- `layouts/` — top-level layout wrappers (e.g. `MainLayout`)
- `packages/cases/` — self-contained case management feature:
  - `context/` — signal-based state via `@ngrx/signals` (`SignalStore`)
  - `services/` — business logic
  - `data/` — mock data
  - `models/` — TypeScript interfaces (`ICase`)
  - `types/` — shared types (`CaseStatus`)
  - `routes/` — feature routes (`/cases`, `/cases/:id`)
  - `pages/` — routed page components
  - `features/feat-*` — smart components (connect to state/services)
  - `ui/ui-*` — dumb/presentational components
- `shared/` — cross-feature shared pieces (sidebar, future store)

### UI Library Structure (`libs/ui/src/lib/components/<name>/`)

Each component follows this pattern:
```
button/
├── button.ts               # Standalone Angular component
├── dtypes/button.dtypes.ts # Variant types
├── styles/button.styles.ts # Tailwind styling via tailwind-variants
├── stories/                # Storybook stories
└── public_api.ts           # Barrel export
```

### Key Technology Choices

| Concern | Library |
|---|---|
| Styling | Tailwind CSS 4 via `@tailwindcss/postcss` |
| Component variants | `tailwind-variants` + `tailwind-merge` + `clsx` |
| State management | `@ngrx/signals` (signal store) |
| Unstyled primitives | `ng-primitives` |
| Icons | `@ng-icons/core` + `@ng-icons/material-icons` |
| Testing | Jest + `jest-preset-angular` |
| E2E | Cypress |
| Component docs | Storybook 10 |

### Adding a New Feature

New features go inside `apps/smartcase/src/app/packages/<feature-name>/` following the same structure as `cases/`. Register routes in `app.routes.ts`.

### Adding a UI Component to `libs/ui`

Follow the component pattern above. Export from `libs/ui/src/index.ts`. Use `tailwind-variants` for styling variants, `ng-primitives` for accessible behavior primitives.

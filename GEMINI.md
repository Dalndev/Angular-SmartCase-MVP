# smartcase-mvp

A modern, scalable Angular application built within an Nx monorepo, following domain-driven design principles and leveraging the latest Angular 21 features.

## Project Overview

- **Core Framework:** Angular 21 (Signals-based)
- **Architecture:** Nx Monorepo
- **UI Architecture:** 
  - Domain-driven "packages" within `apps/smartcase/src/app/packages/`.
  - Reusable UI component library in `libs/ui/`.
- **State Management:** `@ngrx/signals` for both global and local context.
- **Styling:** 
  - Tailwind CSS 4.
  - `tailwind-variants` for component-level style variations.
  - Material 3 inspired design tokens.
  - `ng-primitives` for accessible, unstyled UI logic.
- **Icons:** `@ng-icons/material-icons`.
- **Testing:**
  - **Unit Testing:** Jest.
  - **E2E Testing:** Cypress.
- **Development Tools:** Storybook for UI component development and documentation.

## Getting Started

### Prerequisites

- **Node.js:** >= 20.x
- **Package Manager:** `pnpm`

### Installation

```bash
pnpm install
```

### Development Commands

| Task | Command |
| :--- | :--- |
| Start Application | `npx nx serve smartcase` |
| Build Application | `npx nx build smartcase` |
| Unit Tests | `npx nx test smartcase` |
| E2E Tests | `npx nx e2e smartcase-e2e` |
| Storybook | `npx nx storybook ui` |
| Linting | `npx nx lint smartcase` |
| Nx Graph | `npx nx graph` |

## Workspace Structure

- `apps/smartcase/`: Main Angular application.
  - `src/app/packages/`: Domain-specific logic, features, and state.
- `libs/ui/`: Shared UI component library.
  - `src/lib/components/`: Reusable components (Buttons, Cards, Tags, etc.).
- `test/smartcase-e2e/`: Cypress-based E2E tests.

## Development Conventions

- **Signals:** Prefer Angular Signals and `@ngrx/signals` for state management.
- **Styles:** Use Tailwind CSS 4 utility classes. For component variants, use `tailwind-variants` in a dedicated `styles/` directory within the component folder.
- **Components:** Leverage `ng-primitives` when building complex UI components to ensure accessibility and robustness.
- **Path Aliases:**
  - `~ui`: Points to the shared UI library.
  - `~cases/*`: Points to the cases domain package within the smartcase app.
- **Nx Commands:** Always use `npx nx <target> <project>` to run tasks.

## CI/CD

The project uses GitHub Actions for continuous integration, defined in `.github/workflows/ci.yml`.

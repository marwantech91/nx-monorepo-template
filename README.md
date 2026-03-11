# Nx Monorepo Template

![Nx](https://img.shields.io/badge/Nx-19-143055?style=flat-square&logo=nx)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![React Native](https://img.shields.io/badge/React_Native-0.73-61DAFB?style=flat-square&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)

A production-ready monorepo architecture using Nx, featuring a React web app, React Native mobile app, Node.js API, and shared packages.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        nx-monorepo-template                      │
├─────────────────────────────────────────────────────────────────┤
│  apps/                                                           │
│  ├── web/          → Next.js web application                    │
│  ├── mobile/       → React Native mobile app (iOS/Android)      │
│  └── api/          → Node.js/Express backend API                │
├─────────────────────────────────────────────────────────────────┤
│  packages/                                                       │
│  ├── ui/           → Shared UI components (web + mobile)        │
│  ├── utils/        → Shared utility functions                   │
│  ├── types/        → Shared TypeScript types                    │
│  └── config/       → Shared configuration (ESLint, TS, etc.)    │
├─────────────────────────────────────────────────────────────────┤
│  docs/             → Architecture Decision Records (ADRs)       │
└─────────────────────────────────────────────────────────────────┘
```

## Why Monorepo?

| Benefit | Description |
|---------|-------------|
| **Code Sharing** | Shared UI, utils, and types across web, mobile, and API |
| **Atomic Changes** | Single PR updates all affected apps |
| **Consistent Tooling** | Same ESLint, Prettier, TypeScript config everywhere |
| **Affected Commands** | Only build/test what changed |
| **Dependency Graph** | Visualize relationships between packages |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/marwantech91/nx-monorepo-template.git
cd nx-monorepo-template

# Install dependencies
npm install

# Start all apps in development
npm run dev

# Or start individually
nx serve web      # Start web app
nx serve api      # Start API server
nx run mobile:start  # Start React Native
```

## Project Structure

### Apps

#### `apps/web` - Next.js Web Application
- Next.js 14 with App Router
- Server Components & Server Actions
- Tailwind CSS styling
- Consumes `@repo/ui` components

#### `apps/mobile` - React Native Mobile App
- React Native 0.73 with Expo
- iOS and Android support
- Shares components via `@repo/ui`
- Native module integrations

#### `apps/api` - Node.js Backend API
- Express.js with TypeScript
- RESTful API design
- JWT authentication
- Uses `@repo/types` for type safety

### Packages

#### `packages/ui` - Shared UI Components
```tsx
// Works in both web and mobile!
import { Button, Card, Input } from '@repo/ui';
```

#### `packages/utils` - Shared Utilities
```tsx
import { formatDate, validateEmail, cn } from '@repo/utils';
```

#### `packages/types` - Shared TypeScript Types
```tsx
import { User, ApiResponse, PaginatedData } from '@repo/types';
```

#### `packages/config` - Shared Configuration
- ESLint config
- TypeScript config
- Prettier config

## Nx Commands

| Command | Description |
|---------|-------------|
| `nx serve <app>` | Start development server |
| `nx build <app>` | Build for production |
| `nx test <app>` | Run unit tests |
| `nx lint <app>` | Run ESLint |
| `nx affected -t build` | Build only affected projects |
| `nx affected -t test` | Test only affected projects |
| `nx graph` | Visualize dependency graph |
| `nx reset` | Clear Nx cache |

## CI/CD Pipeline

The GitHub Actions workflow automatically:

1. **On PR**: Runs lint, type-check, and tests for affected projects
2. **On Merge**: Builds and deploys affected apps
3. **Caching**: Uses Nx Cloud for distributed caching

```yaml
# Only builds what changed
- run: npx nx affected -t build --base=origin/main
```

## Architecture Decision Records

See the `docs/` folder for architectural decisions:

- [ADR-001: Monorepo Structure](docs/adr/001-monorepo-structure.md)
- [ADR-002: Shared Component Strategy](docs/adr/002-shared-components.md)
- [ADR-003: API Design](docs/adr/003-api-design.md)
- [ADR-004: Authentication Flow](docs/adr/004-authentication.md)

## Development Workflow

### Adding a New Package

```bash
nx g @nx/js:library my-package --directory=packages/my-package
```

### Adding a New App

```bash
nx g @nx/next:app my-app --directory=apps/my-app
```

### Importing Shared Packages

All shared packages are available via `@repo/*` alias:

```tsx
import { Button } from '@repo/ui';
import { formatDate } from '@repo/utils';
import type { User } from '@repo/types';
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Web Framework | Next.js 14 |
| Mobile Framework | React Native + Expo |
| API Framework | Express.js |
| Language | TypeScript 5.0 |
| Monorepo Tool | Nx 19 |
| Styling | Tailwind CSS |
| Testing | Jest, React Testing Library |
| CI/CD | GitHub Actions |
| Package Manager | npm workspaces |

## Contributing

1. Create a feature branch
2. Make changes
3. Run `nx affected -t lint,test,build` to verify
4. Submit PR

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with [Nx](https://nx.dev) by [Marwan Saleh](https://github.com/marwantech91)

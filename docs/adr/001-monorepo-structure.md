# ADR-001: Monorepo Structure

## Status
Accepted

## Context
We need to manage multiple applications (web, mobile, API) that share code. Options considered:
1. Separate repositories with npm packages
2. Monorepo with Lerna
3. Monorepo with Nx
4. Monorepo with Turborepo

## Decision
We chose **Nx** for the following reasons:
- Superior affected commands (only build/test what changed)
- Built-in generators for React, React Native, and Node
- Computation caching (local + distributed via Nx Cloud)
- Excellent dependency graph visualization
- Strong TypeScript support
- Active community and enterprise support

## Consequences

### Positive
- Single source of truth for all code
- Atomic changes across apps
- Shared tooling configuration
- Faster CI with affected commands
- Easy code sharing via internal packages

### Negative
- Learning curve for Nx
- Larger repository size
- Need to manage internal package versions

## References
- [Nx Documentation](https://nx.dev)
- [Monorepo Explained](https://monorepo.tools)

# AGENTS.md

## Commands

- `npm run dev` - Dev server at http://localhost:5173/
- `npm run build` - Build to `dist/`
- `npm run preview` - Preview production build at http://localhost:4173/

No test, lint, or typecheck scripts defined.

## Architecture

- Single Preact app rendering `swagger-ui-react`
- Entry: `src/index.tsx` -> loads `public/swagger.json` at runtime
- The swagger.json is the API spec (not generated - manually maintained in public/)

## Notes

- Uses Preact (aliased to React) via `@preact/preset-vite`
- No CI workflows or pre-commit hooks in this repo
- `package.json` has `eslintConfig` but no script to run it
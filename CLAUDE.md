# MLDS 4.0 — Component Authoring Guide

This project uses **Storybook 10 + Vite** with the `@storybook/addon-mcp` MCP server
exposed at `http://localhost:6006/mcp` (see `.mcp.json`). When creating or editing
components, follow the workflow below.

---

## Rule 0 — Never hallucinate props or tokens

Before using any component prop or design token: **verify it exists**.

- Component props → `list-all-documentation` → `get-documentation`
- Design tokens → read `src/foundation/tokens.css`, `src/foundation/primitives.ts`,
  `src/foundation/tokens.ts`, `src/foundation/typography.ts`
- If it isn't documented, it doesn't exist. Report it to the user, don't guess.

---

## Component creation workflow

### 1. Start Storybook if it isn't running

Storybook must be running for the MCP tools to respond. Use `preview_start` with
`{name: "storybook"}` from `.claude/launch.json`. Never start it with `npm run` — the
launch config is the source of truth for the port.

### 2. Load story-writing conventions (mandatory before writing code)

Call the MCP tool **`get-storybook-story-instructions`** first, every time. Its output
is the source of truth for imports, story patterns, and testing conventions in this
repo. Do not skip this — the conventions have changed before and will change again.

### 3. Discover existing components before building

Call **`list-all-documentation`** to see what's already there. If the user's request
overlaps an existing component (Accordion, Button, Header, Page, foundation tokens,
etc.), extend it — don't fork a parallel implementation.

For anything you plan to import or reuse, call **`get-documentation`** with its `id`
to read the actual prop table and example stories before writing the import.

### 4. Build the component

- Place source in `src/<component-name>/<Component>.tsx`.
- Use CSS Modules (`Component.module.css`) — no inline `<style>` blocks, no global
  class names.
- Consume tokens via CSS variables (`var(--content-typography-content-primary)`,
  `var(--spacing-16)`, `var(--radius-md)`, `var(--font-size-body-medium)`, etc.).
  Never inline hex values, px sizes for spacing, or raw font sizes.
- Use `"Baton Turbo"` as the font family (already loaded globally by
  `src/foundation/fonts.css`).
- Support Light Mode and Dark Mode via `[data-theme]` — tokens already flip, so you
  usually get this for free by using semantic tokens (Tokens collection), not
  primitives directly.

### 5. Write stories

Alongside the component, create `Component.stories.tsx` with:

- **Meta**: `title: '<Section>/<Component>'`, `component`, `tags: ['autodocs']`,
  and any `argTypes` needed for controls.
- **Stories**: at minimum a `Default`, plus one story per meaningful variant
  (size, tone, state — as defined by the component's actual props).
- Every story must render standalone (no external providers) or be wrapped in a
  decorator.
- Use `args` for prop values so the Controls panel is populated.

### 6. Preview the result

After any change that affects how UI looks, call **`preview-stories`**. Include every
returned preview URL in the reply so the user can click through. A shared/utility file
has no stories of its own — preview its consumers' stories instead.

### 7. Run tests

After UI edits, call **`run-story-tests`** — never `npm test` or `npm run test`
directly. Use a focused run while iterating; do a broad pass before handing off if
scope is unclear. Never report completion while tests are failing.

### 8. Verify visually

For anything non-trivial, also do the browser verification loop from the standard
project workflow: `read_console_messages` for errors, `read_page` for structure,
`computer` screenshot as final evidence.

---

## Storybook layout conventions

The sidebar is organized as follows — keep it that way:

```
Foundations/
├── Primitives/     (colors, spacing, border, radius — from Primitive collection)
├── Tokens/         (semantic tokens, Light + Dark aliases)
└── Typography/     (44 tokens × 9 accessibility modes)

Design System/
└── <Component>/    (Accordion, Button, etc.)
```

New components go under **Design System**. Foundation additions
(new token category, new primitive scale) go under **Foundations**.

---

## Do NOT

- ❌ Invent props or tokens — see Rule 0.
- ❌ Use `npm test` / `npm run test` — use `run-story-tests` via MCP.
- ❌ Start dev servers with Bash — use `preview_start`.
- ❌ Hardcode colors, spacings, or font sizes — reference CSS variables.
- ❌ Write stories without calling `get-storybook-story-instructions` first.
- ❌ Skip `preview-stories` after visible changes.
- ❌ Report completion with failing tests or console errors.

---

## Quick reference

| Tool | When to call | Purpose |
|---|---|---|
| `get-storybook-story-instructions` | Before writing any story | Load current story-writing patterns |
| `list-all-documentation` | Before importing / reusing | Discover component + docs IDs |
| `get-documentation` | Before using any prop | Verify props exist, see examples |
| `get-documentation-for-story` | Investigating a specific variant | Extra docs for one story |
| `preview-stories` | After UI changes | Get shareable preview URLs |
| `run-story-tests` | After UI changes | Validate visual + interaction tests |

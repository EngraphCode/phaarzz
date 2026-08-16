# Phaarzz design system

Warm feminine colour and soft organic form.

## Principles

**Colour anchors on rose and plum, never neutral grey.** Even the light-mode
"neutrals" carry a pink cast (`--blush-00` is `#fffbfa`, not white), and dark
mode sits on deep aubergine rather than black — so the warmth survives the
theme switch instead of draining out of it.

**Shape avoids the hard rectangle.** Radii run generous, and three named shapes
carry the identity:

| Shape | Token | Use |
| --- | --- | --- |
| Petal | `--radius-petal` | Asymmetric container. Cards, media frames. |
| Arch | `--radius-arch` | A doorway. Feature imagery, avatars, section tops. |
| Blob | `--radius-blob` | Decorative background only — never interactive. |

Buttons and inputs are pill or large-radius by default.

**Type pairs a serif display against a humanist body.** The display stack is
system-resident (`Iowan Old Style`, `Palatino`, Georgia), so the identity costs
no additional font payload. Body copy stays on Atkinson, already self-hosted
and built for legibility.

## Package

`@phaarzz/ui` — a React component library. React (not Astro) because Claude
Design's agent renders components from a compiled bundle, and `.astro` files
have no runtime to compile. The Astro site consumes these as islands.

- `src/tokens.css` — the single source of truth. Everything else derives from it.
- `src/styles.css` — component styles. Imports `tokens.css`, so the whole
  library restyles from a token edit.
- `src/components/` — the components.
- `build.mjs` + `tsconfig.build.json` — produce `dist/` (ESM + CSS + types).
  Build with `npm run build` from this directory.

React and `react-dom` are external to the bundle: the consuming runtime
supplies them, and a second copy would break hooks across the boundary.

## Theme scoping

Tokens resolve at two levels. `:root` / `:root.dark` theme a whole page, which
is what the site uses. `.pz-root.light` / `.pz-root.dark` theme a *container* —
necessary because Claude Design renders components in isolation and cannot set
a class on `<html>`. A `.pz-root` with no theme class inherits whatever `:root`
resolved to, so the common case needs no opt-in.

## Contrast

Every foreground/background pairing is checked against WCAG 2.1. All 20 pairs
pass at the level appropriate to their use.

One constraint is deliberate and worth knowing: **light-mode `--secondary`
(amber) reaches only 3.19:1 on `--surface`**. It is valid for large text
(≥24px, or ≥18.66px bold) and UI accents, but must not be used for body copy.
Dark-mode amber is unconstrained at 9.28:1.

## Theming contract

Tokens are declared three times, in this order:

1. `:root` — light, the default.
2. `@media (prefers-color-scheme: dark)` scoped to `:root:not(.light)` — dark
   unless the user has explicitly chosen light.
3. `:root.dark` — dark by explicit choice.

Rule 2 is what makes system detection work with JavaScript disabled. A class
lands on `<html>` only for an explicit choice; on "Auto" neither class is set
and the media query decides. Blocks 2 and 3 hold identical values — keep them
in sync, or regenerate the previews and the mismatch will show.

## Status

First pass, built for iteration in Claude Design. Colour and shape are the
settled part of the identity; all copy is placeholder.

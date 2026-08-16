# design-sync notes — @phaarzz/ui

## Repo shape

- The package lives at `design-system/`, not the repo root. The repo root is an
  Astro site; `.design-sync/` therefore sits inside `design-system/` so that
  package-relative config paths are unambiguous. Run every converter command
  from `design-system/`.
- No workspaces. The package has no `node_modules` of its own — pass
  `--node-modules ../node_modules` (the repo root's), which is where `react`
  resolves.
- Build: `npm run build` in `design-system/` (esbuild → `dist/index.js` +
  `dist/index.css`, then `tsc` for `.d.ts`). Entry: `./dist/index.js`.

## Playwright

The container caches **chromium-1194** at `/opt/pw-browsers`
(`PLAYWRIGHT_BROWSERS_PATH` is preset). Only **playwright 1.56.0** pins that
build — 1.57 is already on 1200 and 1.62 on 1234. Installing any other version
fails the render check with `browserType.launch: Executable doesn't exist`.
Install into `.ds-sync/`, not the repo.

## Fixes this run (do not regress)

- **`cfg.provider = {"component": "Root"}` is load-bearing.** Without it,
  previews render outside `.pz-root`, and since `.pz-text` and friends inherit
  their font rather than declaring one, every leaf component computed to
  **Times New Roman**. Verified by reading `getComputedStyle(...).fontFamily`
  in a preview — the render check alone does not catch this, because the
  component still renders.
- **Both font families ship from the package.** The library declares
  `--font-body: "Atkinson"` and `--font-display: "Fraunces"`, so it must
  provide both or every consumer that isn't the Phaarzz site silently falls
  back. `src/fonts.css` is imported by `src/styles.css`; `build.mjs` needs the
  `.woff`/`.woff2` file loader for them to emit.
- **Fraunces replaced a system serif stack.** The display face was originally
  `Iowan Old Style / Palatino / Book Antiqua / Georgia` — fine on macOS, but
  Claude Design renders on Linux where none exist, so every design would have
  fallen back to generic serif. Fraunces (SIL OFL 1.1, variable, one file
  covers 100–900) is self-hosted instead.
- **`cardMode: "column"`** on Container, Field, Header, Heading, Hero,
  MediaFrame, Root, Section — their stories are wider than a grid cell and got
  cropped in the product's card view.
- **Plain links** are styled via `:where(.pz-root) a:not([class])`. The
  `:not([class])` is deliberate: a bare `.pz-root a` rule outranks
  `.pz-button--primary` and would recolour Buttons rendered as `<a>`.

## Known render warns

None. Validate exits 0 with zero warnings as of this run.

## Re-sync risks

- **Font licences.** Atkinson Hyperlegible (Braille Institute) and Fraunces are
  both SIL OFL 1.1, so self-hosting is permitted. If either is swapped, check
  the licence before shipping the file.
- **Fraunces was fetched from Google Fonts at sync time** (`v38`, latin subset
  only). The `.woff2` is committed, so a re-sync does not refetch — but if the
  subset ever needs extending beyond latin, it must be re-downloaded rather
  than regenerated from anything in this repo.
- **The Astro site and the package share tokens by duplication, not import.**
  If `src/tokens.css` changes here, the site's own stylesheet must be updated
  to match, or the two identities drift apart.
- **Playwright pin is environment-derived**, not repo-derived. A container with
  a different cached chromium build needs a different playwright version — see
  the Playwright section and re-derive rather than assuming 1.56.0.

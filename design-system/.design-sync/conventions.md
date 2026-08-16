## Building with @phaarzz/ui

### Wrap everything in `Root`

`Root` establishes the token scope, the base font and the surface colour. It is
not optional decoration: `Text`, `Input`, `Badge` and `Footer` inherit their
font rather than declaring one, so outside `Root` they render in the browser's
default serif and lose the brand entirely.

```jsx
<Root>
  <Header brand="Phaarzz" links={[{ href: '#what', label: 'What we do' }]} />
  <Hero title="Phaarzz" lede="One line on what this is." actions={<Button href="#contact">Get in touch</Button>} />
  <Footer owner="Phaarzz" />
</Root>
```

`Root` takes an optional `theme="light" | "dark"` to pin a subtree. Omit it and
the container follows the page — which follows the OS unless the user has
chosen. Never hand-write a theme class; `Root` and `ThemeToggle` own that.

### Style with tokens, not literals

There are no utility classes. The library's own components carry `pz-`
prefixed classes, but **you should not write those** — compose the components
and use CSS custom properties for your own layout glue. Every value below is
real and defined in `tokens.css`:

| Purpose | Tokens |
| --- | --- |
| Surfaces | `--surface`, `--surface-raised`, `--surface-sunken` |
| Text | `--ink`, `--ink-muted` |
| Accent | `--primary`, `--primary-hover`, `--on-primary`, `--primary-soft`, `--secondary` |
| Lines | `--border`, `--ring` |
| Radius | `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-pill`, `--radius-petal`, `--radius-arch`, `--radius-blob` |
| Space | `--space-1` … `--space-24`, `--container`, `--measure` |
| Type | `--font-display`, `--font-body`, `--text-xs` … `--text-2xl` |
| Depth | `--shadow-soft`, `--shadow-lift` |

Never hardcode a hex value or a pixel radius — the whole identity re-themes
from these, and a literal silently opts out of dark mode.

### The shape language carries the brand

Rectangles are the exception. `--radius-petal` (asymmetric) is the default
container shape, `--radius-arch` is for media and avatars, `--radius-blob` is
decorative only and must never be used on something interactive. Buttons and
inputs are pill or large-radius. Prefer `Card` and `MediaFrame` over a
hand-rolled `<div>` — they already carry the right shape.

### Two accessibility rules that are easy to break

- **Light-mode `--secondary` (amber) is 3.19:1 on `--surface`.** Valid for
  large text (≥24px, or ≥18.66px bold) and UI accents. **Never body copy.**
  Dark mode is unconstrained at 9.28:1.
- **`Field` owns id generation.** Pass the control as a function of the ids it
  hands you, so label, hint and error stay associated:

```jsx
<Field label="Email" error={err}>
  {({ id, describedBy, invalid }) => (
    <Input id={id} aria-describedby={describedBy} aria-invalid={invalid} />
  )}
</Field>
```

### Where the truth lives

Read `styles.css` and its `@import` closure (`tokens.css`, `fonts.css`,
`_ds_bundle.css`) before styling anything — the real values beat any summary
here. Per-component API contracts are in each `<Name>.d.ts`, and usage notes
in each `<Name>.prompt.md`.

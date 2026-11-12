# AGENTS.md

Guardrails for AI agents working in this repo. Every rule here points at
something real in the code. If you find a rule that no longer matches the code,
update this file instead of following it blindly.

The owner is a backend-leaning dev learning frontend. Prefer small, explained
changes over clever ones, and say _why_ a frontend change works when it isn't
obvious.

## What this app is

John Le's personal portfolio site. It has two pages: About (`/`) and Resume
(`/resume`).

- **Stack:** React 18 + TypeScript + Vite 4, Tailwind CSS 3, React Router 6.
  It's hosted on Firebase Hosting.
- **No backend.** All content is static JSON, imported directly by the
  components.
- **Layout:** Tailwind's `md` breakpoint (768px) is where mobile switches to
  desktop. Unprefixed classes apply to mobile, and `md:` classes apply to
  desktop. Desktop has a sticky sidebar next to the content. Mobile has a top bar
  with a slide-down menu.

```
src/
  index.tsx                 entry point (React StrictMode)
  App.tsx                   router: / -> About, /resume -> Resume
  components/Nav.tsx        desktop sidebar AND mobile top bar + menu (see below)
  components/About.tsx      About text is written directly in this file
  components/Resume.tsx     Experience / Skills / Education tabs
  components/ResumeItem.tsx one expandable experience entry
  components/Contact.tsx    contact icon row, rendered from icons.json
  resume.json               experience, skills, education (content)
  icons.json                contact links (iconName is a Font Awesome class)
  css/                      MD3 design token values + light/dark themes (see Styling)
```

**Import paths:** `tsconfig.json` sets `"baseUrl": "src"`, and `vite.config.ts`
uses `vite-tsconfig-paths`. That's why imports like `'components/About'` and
`'resume.json'` work without `./`. Relative imports (`'./components/Nav'`) also
work, and the repo uses both.

Icons come from a Font Awesome kit loaded by a `<script>` in `index.html`. There
is no npm package for it, so icons won't show up offline.

## Commands

| Command | What it does | Status (checked 2026-11-12) |
| --- | --- | --- |
| `npm start` | Vite dev server at http://localhost:5173 | **Works.** `/` and `/resume` load. |
| `npx tsc --noEmit` | Type check only | **Passes.** |
| `npm run build` | `tsc`, then `vite build`, writing to `dist/` (gitignored) | **Passes.** |
| `npm run serve` | `vite preview --port 3000` to serve the build | Not checked. |
| `npx eslint src` | Lint with `.eslintrc.cjs`. There's no npm script for it. | **Passes** with no output. |
| tests | None | **Can't run.** See below. |

**There are no runnable tests and no CI.** `package.json` has no `test` script,
and no test runner (Jest, Vitest, react-scripts) is installed. `src/App.test.tsx`,
`src/setupTests.ts`, `src/react-app-env.d.ts` and the `@testing-library/*` and
`@types/jest` dependencies are leftovers from Create React App. The one test
looks for "learn react", which this app doesn't contain, so it would fail even
if something could run it. Never report that tests passed. **`npm run build` is
the real safety net.** Run it after any `.ts`/`.tsx` change.

**Visual changes need a visual check.** The build doesn't catch layout bugs. The
process below has worked here:

1. Run `npm start`.
2. Drive the page with Playwright using the system Chrome:
   `chromium.launch({ channel: 'chrome' })`. **`playwright-core` is not a
   project dependency.** Install it in a scratch directory outside the repo, and
   don't add it to `package.json`.
3. Check at **390x844** (phone) and **1280x800** (desktop). On the phone size,
   open the menu, click a link, and confirm that the page changes and the menu
   closes.
4. Look at the screenshots and read the console errors. Also confirm that
   `document.documentElement.scrollWidth - window.innerWidth` is `0`. Anything
   above 0 means the page scrolls sideways on mobile.

If the Claude-in-Chrome extension is connected, you can use it instead. It
wasn't connected last time, and headless Playwright was the fallback. If you
can't check visually at all, say so and tell the owner what to look at.

## Content

- To change resume content, edit `src/resume.json`. To change contact links,
  edit `src/icons.json`. To change About text, edit `src/components/About.tsx`.
  Text-only changes don't need component edits.
- `id` in each `resume.json` experience entry is that entry's React `key`, so
  keep the ids unique. `link` is the key for `icons.json` entries, so keep those
  unique too.

## Nav rules (`src/components/Nav.tsx`)

- **The file renders two separate navs.** One is the desktop sidebar
  (`hidden md:block`). The other is the mobile top bar with a slide-down menu
  (`md:hidden`). The link list is written out twice, so **any nav link change has
  to be made in both places.**
- Nav owns the mobile menu's open/closed state (`isMenuOpen`). Mobile links call
  `setNavItemAndClose(...)` so the menu closes after you navigate. New mobile
  links must do the same, or the menu stays open on top of the new page.
- The closed menu is `max-h-0 invisible`. `max-h-0` only collapses it visually;
  `invisible` (`visibility: hidden`) is what keeps its links out of the Tab
  order and away from screen readers. `index.css` transitions `visibility`
  alongside `max-height`, so the links stay visible until the slide-up
  finishes. Don't drop either class.

## Rules from bugs actually hit here

- **Give every element made by `.map()` a stable `key`, and check the browser
  console.** `Contact.tsx` and `Resume.tsx` both shipped with React "missing key
  prop" warnings. Why: React uses keys to track list items between renders, and
  the warning shows up only in the dev console, so it's easy to miss. When the
  data has a unique value (`id`, `link`, a name), use that instead of the array
  index.
- **Anything clickable must be a real `<button>` or link, not
  `<div role="button">`.** The mobile hamburger was a `div` that keyboard users
  couldn't reach, with a tap target of about 16px. Now it's a
  `<button type="button">` with `aria-label`, `aria-expanded` and padding. Why: a
  `div` doesn't get keyboard focus or Enter/Space handling for free, and small
  targets are hard to tap on a phone.
- **Delete dead code instead of commenting it out.** A commented-out `mt-24`
  margin hack stayed in the code after it stopped doing anything. Git history
  keeps the old version if anyone needs it.

## Styling

Colors and text styles come from Material Design 3 (MD3) tokens. The values live
in CSS variables, and `tailwind.config.cjs` only points Tailwind at them.

- **Where values live:** `src/css/tokens.css` defines every value. `theme.light.css`
  and `theme.dark.css` pick the light or dark set through `prefers-color-scheme`
  (imported in `theme.css`). To change a color, change it there, not in the
  Tailwind config or a component.
- **Use the theme color names, not raw Tailwind colors.** Write `bg-primary-container`,
  `text-primary`, `text-secondary`, `bg-surface-variant`,
  `border-on-primary-container`, and so on. They switch automatically in dark
  mode. Raw colors like `bg-white` or `text-gray-900` don't. (`hover:text-white`
  on the nav links is an existing exception.) The names match the owner's
  food-journal repo on purpose.
  - Each `on-X` color is meant for content placed on top of `X`.
    `text-on-primary` belongs on `bg-primary`. On any other background it can be
    hard to read.
  - Opacity modifiers like `bg-primary/50` **don't work**, because each color is a
    plain `var(...)` string.
- **Text styles come in pairs:** `font-<role> text-<role>`, for example
  `font-headline-large text-headline-large`. Roles are display, headline, title,
  body and label, each in large, medium or small. `font-<role>` sets the font
  family (Roboto) and `text-<role>` sets only the font size.
- **Why only size:** the old CSS classes never applied the rest of the MD3 scale
  (see Known issues). The refactor kept what the site actually renders.
  `leading-<role>` and `tracking-<role>` exist if you want the token line height
  or letter spacing, but using them changes how text looks, so treat that as a
  design change.
- **The 2026-11-12 refactor was verified pixel for pixel.** 26 screenshots (light
  and dark, 1280x800 and 390x844, every page and tab, open mobile menu) matched
  before and after. A styling refactor that's supposed to look the same should
  meet the same bar: compare screenshots, not just the build.
- **Tailwind only generates classes it finds as complete strings in the source.**
  Never build a class name from pieces, like `` `text-${role}` ``.

## Deploying (only when the owner asks)

```sh
npm run build
firebase deploy --only hosting
```

- Pushing to GitHub does **not** deploy anything.
- The Firebase project and site is `john-s-website-65eca`
  (https://john-s-website-65eca.web.app).
- `firebase.json` and `.firebaserc` are **gitignored**. They exist only in the
  owner's main checkout, not in clones or worktrees, so deploys have to run from
  the main checkout.
- Firebase CLI 15.x needs **Node 20+**.
- **Auth trap (real incident, 2026-11-12):** an expired saved login made every API
  call return 401. The CLI showed misleading errors instead:
  `Assertion failed: resolving hosting target of a site with no site name or target name`
  and `Unable to ensure that firebasehosting.googleapis.com is enabled`.
  Plain `firebase login` said it was already logged in and didn't help.
  **`firebase login --reauth` fixed it.** If you see those errors, try that
  before changing any config.

## Known issues (don't "fix" these on the side)

Change these only when asked, each in its own focused change:

- `ResumeItem.tsx` still uses a `<div role="button">` for the expand toggle. It's
  the same keyboard problem the hamburger had.
- The contact icon links (`IconLink.tsx`) contain only an `<i>` icon and have no
  `aria-label`, so screen readers have no name to announce.
- The desktop headshot `<img>` in `Nav.tsx` has `className="h-full-w-full"`.
  That looks like a typo for `h-full w-full` and isn't a real class.
- The CRA leftovers listed under Commands: the test files, the
  `@testing-library/*` and `@types/jest` dependencies, `react-app-env.d.ts`, and
  the unused `eslintConfig` (`react-app`) block in `package.json`. ESLint
  actually uses `.eslintrc.cjs`.
- **The MD3 typescale tokens are partly broken.** In `src/css/tokens.css`, font
  weights are written as `400px`/`500px`, which isn't valid CSS, and the
  `font-family-style` values (`Regular`, `Medium`) aren't valid either. That's
  why `font-weight` isn't mapped in Tailwind. Fixing it, and turning on the full
  scale (weights, line heights, letter spacing), changes how the site looks, so
  it needs the owner's go-ahead.

## Working agreements

- **Don't commit, push, or deploy unless the owner asks.** The owner makes local
  commits and checks deploys themself.
- Don't add dependencies unless asked. Use scratch directories for one-off
  tooling, as with Playwright above.
- Keep changes small and match the surrounding code: function components, props
  typed with `type`/`interface`, and Tailwind classes inline.
- Formatting: a Prettier config (`.prettierrc.json`) exists in the owner's main
  checkout but is gitignored, so worktrees don't have it. It uses single quotes,
  semicolons, 2-space indents, 80 columns, no trailing commas, and
  `arrowParens: always`. Every `.ts`/`.tsx` file in `src/` follows it today.
  Six CSS/JSON files in `src/` don't. Only format files you change, and don't
  reformat `resume.json`, `icons.json` or the CSS files, because the huge diff
  would bury real changes.
- Commit messages: short and lowercase. The two most recent commits use a
  conventional prefix (`feat: fixup mobile`, `feat: mobile friendly first
  draft`). Use `feat:` / `fix:` / `docs:` to match.

# Current website and style defaults

The active site consists of a minimal homepage at `/` and the blue professional portfolio at `/portfolio`. The portfolio's existing work, projects, contact and other supporting pages live under `/portfolio/…`. New personal routes `/work`, `/projects`, `/identity`, `/thoughts`, `/blogs`, `/photography`, `/contact` and `/dreams` intentionally show only the shared header and navigation. Other unknown paths return to `/`. The earlier writing, beliefs, story, accounts, admin and community content is no longer mounted or built. Their earlier source and Firebase data have not been destroyed.

## Typography for future work

- Family: Inter when available, then `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, Roboto, sans-serif. System fallbacks avoid an external font download.
- Body: weight 400; links/emphasis: 500; paragraph line-height 1.7.
- Text: `#222222` in light mode, `#e8e8e8` in dark mode.
- Links inherit text color with a fine, muted underline.
- Paragraph spacing: 1.5rem.
- `--content-width: 44rem` (704px). `.text-column` supplies a left-aligned reading layout with 5rem vertical padding for future content.
- Future pages should fit one screen. Use the defaults without adding a scrolling feed or long homepage.

The professional portfolio keeps its blue palette and wider established layout, while using the shared font stack.

## Homepage

Desktop shows only the portrait and name. Mobile adds a conversational introduction in one readable regular font size, with only the name in the paragraph emphasized, plus a fixed four-shortcut dock (Home, Portfolio, Thoughts, Contact) and a plus button that expands a four-column page grid. The underlined name opens `/portfolio`. A small accessible theme button retains light/dark mode. Backgrounds remain `#fcfcfc` and `#040404`, matching the two existing portraits.

The homepage uses `100svh`, responsive spacing and no document scrolling. The portrait has a sharp circular crop. Mobile places the portrait near the top; shorter phones adapt to fit the intro above the dock. A local clock with seconds sits at top left, with an ordinal date centered. The supplied diptych is cropped into two optimized WebP portraits: white shirt on light, black shirt on dark. Both preload and stay mounted, so toggling does not fetch a new image. Page colors, controls, portrait opacity and layered sun/moon symbols share a 480ms transition. Reduced-motion preferences disable entrance and menu animations. The full-width menu has an SVG surface with a concave bottom-right cutout around the plus button. Text enters with a staggered fade; the menu and toggle animate with eased transforms. Touch highlights are suppressed while keyboard focus remains visible. Holding the dock for one second reveals small labels until release; release, cancellation, leaving the dock, changing routes or losing window focus clears the timer and state. Holding the plus for two seconds opens the menu and enters steering mode: the circular button grows to 115% and its symbol fades out over 550ms, returning smoothly on release. Selection starts at the current page (Home by default). Relative 16px movements steer left, right, up, down, or diagonally through the four-column grid, clamping at the edges and the incomplete final row. Reversing at an edge responds immediately. Release after moving opens the selected page; release without moving leaves the menu open. Cancellation, lost capture, Escape, or window focus loss clears steering. A normal tap still toggles the menu. Closed menus become fully hidden after their fade, with paint containment preventing leftover surfaces. The menu supports Escape, focus restoration, outside-click dismissal and inert hidden links.

## Development and deployment

The owner requests deployment after every website change. After checks pass, refresh the repository-root publication files, commit the relevant changes, push to main, and verify GitHub Pages is live.

```sh
npm ci
npm run dev
npm run lint:site
npm run test:site
npm run build
npm run build:pages-root
```

`Check website` tests the current no-scroll layout, theme, retired-route redirects and professional portfolio. The previous emulator-based platform workflow has been replaced because those pages are no longer part of the active site.

The existing GitHub Pages setup has both a repository-root publication path and an Actions build. `build:pages-root` updates generated entry points and removes only the generated HTML for retired routes. Supporting portfolio routes get their own static entry points; other URLs use the SPA fallback to return home.

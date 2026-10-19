# Current website and style defaults

The active site consists of a minimal homepage at `/` and the professional portfolio at `/portfolio`. Personal navigation includes Work, Projects, Identity, Thoughts, Blogs, Timeline, Contact, Dreams, and Login. Timeline is a scrollable life story; Contact is the private messaging page; Login manages Google sessions and administrator page editing. Other personal content pages remain minimal until published by the administrator. The former personal `/photography` route redirects to `/timeline`. Supporting portfolio pages remain under `/portfolio/…`. Other unknown paths return home. Earlier platform source and Firebase data are retained.

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

The homepage follows an editorial introduction layout: circular portrait at left, large Newsreader Italic name (self-hosted font) and smaller sans-serif subtitle beside it, with left-aligned introductory paragraphs below. The portrait and name/subtitle share a frame, aligning the visible head and name at the top, and the circle and subtitle at the bottom. The introduction describes his life and the website, with bold underlined inline links only to portfolio, timeline, and contact; a bold inline plus button opens the full page menu, ending with navbar and plus gesture instructions on desktop and mobile. Saved admin copy supports Markdown links with the same treatment. Desktop uses a 148px portrait and generous margins; mobile uses a 68px portrait (58px on narrow phones), shifts the portrait toward the left edge, and sizes the single-line name to the available text width and keeps the introduction above the fixed dock. Mobile adds a conversational introduction in one readable regular font size, with only the name in the paragraph emphasized, plus a fixed four-shortcut dock (Home, Portfolio, Thoughts, Contact) and a plus button that expands a four-column page grid. The underlined name opens `/portfolio`. A small accessible theme button retains light/dark mode. Backgrounds remain `#fcfcfc` and `#040404`, matching the two existing portraits.

The homepage uses `100svh`, responsive spacing and no document scrolling. The portrait has a sharp circular crop. Mobile places the portrait near the top; shorter phones adapt to fit the intro above the dock. A local clock with seconds sits at top left, with an ordinal date centered. The supplied diptych is cropped into two optimized WebP portraits: white shirt on light, black shirt on dark. Both preload and stay mounted, so toggling does not fetch a new image. The browser-tab favicon independently follows the browser’s preferred color scheme, using self-contained circular SVG crops of the white-shirt portrait in light mode and black-shirt portrait in dark mode, and updates when that preference changes. Page colors, controls, portrait opacity and layered sun/moon symbols share a 480ms transition. Reduced-motion preferences disable entrance and menu animations. The full-width menu has an SVG surface with a concave bottom-right cutout around the plus button. Text enters with a staggered fade; the menu and toggle animate with eased transforms. Touch highlights are suppressed while keyboard focus remains visible. Holding the dock for one second reveals small labels until release; release, cancellation, leaving the dock, changing routes or losing window focus clears the timer and state. Pressing the plus opens the menu immediately. Holding it for one second enters steering mode: the circular button grows to 140% and its symbol fades out over 550ms, returning smoothly on release. Selection starts at the current page (Home by default). Relative 16px movements steer left, right, up, down, or diagonally through the four-column grid, clamping at the edges and the incomplete final row. Reversing at an edge responds immediately. Release after moving opens the selected page; release without moving leaves the menu open. Cancellation, lost capture, Escape, or window focus loss clears steering. Selected tiles brighten toward white with a soft highlight in both themes. Navigation touches, menu expansion, dock hold activation, steering activation, selection changes, release, and keyboard actions request short vibration feedback where supported. Edge clamping does not trigger a selection pulse. Browsers without vibration support continue normally. A normal tap still toggles the menu. Closed menus become fully hidden after their fade, with paint containment preventing leftover surfaces. The menu supports Escape, focus restoration, outside-click dismissal and inert hidden links.

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

## Accounts and personal content

The eleventh menu entry is Login, after Dreams. Google sign-in persists in the browser. Login displays the signed-in email, view/admin access, and a bottom logout button. Only the verified email `ashu.61003@gmail.com` can publish the personal homepage introduction and content on Work, Projects, Identity, Thoughts, Blogs, Photography, and Dreams. Published content lives in `sitePages`; optimistic revisions prevent stale overwrites. Portfolio case studies retain their existing source content. Contact is a private Firebase DM thread for readers and an inbox for the administrator. Messages and read markers update live; bounded history can be paged. Firebase rules enforce ownership, verified administrator access, and sending limits independently of the UI.

The existing Firebase project is retained. Its display name and OAuth app name are Ashutosh Srivastava. A secondary Hosting auth domain, `ashutosh-srivastava-login.firebaseapp.com`, keeps the old project name out of the sign-in URL. It is registered on the existing OAuth client. `/privacy` provides the public account-data explanation used by OAuth branding. Runtime Firebase public config is generated by `scripts/build.mjs` using the existing Actions secret, loaded only by the lazily loaded account feature, and excluded from Git. Use GitHub Actions Pages publishing; legacy branch publishing omits that generated config.

## Life timeline

Timeline replaces Photos in the eighth menu position and uses a history icon. `/timeline` and `/timeline/` show “A life, so far.” and eleven short chapters, starting with birth on 6 October 2003. The chronology follows the supplied schools, Class 10 in 2019, Kota/Resonance, Class 12 in 2021, the JEE drop year, VIT-AP (2022–26), and Flurn in Bangalore (2026). Early school dates are approximate; dates not supplied are labelled by school period. The former personal `/photography` URL redirects here. Professional portfolio photography is preserved.

Only the timeline introduces this scrollable story; the landing shell and homepage remain fixed. A thin ruler sits left of the events. The nearest event to the centre receives full emphasis, while adjacent events fade toward the edges. First and last events can reach the same central focal point. Keyboard scrolling, small screens, light/dark mode, and reduced motion are supported. The administrator can edit the heading and individual chapters, add or remove chapters, and publish through `sitePages/timeline`; other users have view access. Conflicting edits retain the local draft. Default biography content is in `src/pages/timeline-data.js` and remains visible without a Firebase connection.

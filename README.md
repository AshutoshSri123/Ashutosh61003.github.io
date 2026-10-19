# Ashutosh Srivastava

A minimal personal homepage and the existing blue professional portfolio.

- `/` — a softly feathered portrait and name; the name opens the portfolio
- `/portfolio` — professional work, projects and contact details

Light/dark modes remain available. The homepage fits one screen without scrolling.

```sh
npm ci
npm run dev
npm run lint:site
npm run test:site
npm run build:pages-root
```

See [SITE_DESIGN.md](SITE_DESIGN.md) for the shared typography, colors, future design defaults, route structure and deployment details. Earlier personal-platform source is retained for reference but is not mounted by the active app.

Personal navigation includes Google Login at `/login`, a private DM inbox at `/contact`, and editable personal pages for the verified administrator `ashu.61003@gmail.com`. Readers have view access and can message the administrator. `/privacy` explains account and message handling.

Use `npm run test:accounts` for Firebase emulator access-rule and Google sign-in/DM tests. Java 11+ is required. Deploy Firebase rules with `npx firebase deploy --only firestore:rules,firestore:indexes --project aichatgemma`. GitHub Pages must use GitHub Actions so runtime Firebase web configuration is generated from its existing build secret rather than checked into Git. Firebase's internal project ID remains `aichatgemma`; the public auth host is `ashutosh-srivastava-login.firebaseapp.com`.

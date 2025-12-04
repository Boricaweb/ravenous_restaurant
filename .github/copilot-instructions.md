## Quick orientation — Ravenous (Create React App)

This repository is a small Create React App (Codecademy "Ravenous") front‑end.
Give priority to the browser/devserver flow (npm start) — don't try to run component files directly with node.

Key places to inspect first

- `README.md` — project bootstrapped with Create React App; standard npm scripts.
- `package.json` — use `npm start`, `npm test`, `npm run build`.
- `src/Business.js` — fetch logic and the Geoapify integration (contains a hard‑coded API key today).
- `src/BusinessList.js` — UI that should display results from `Business.js` (currently uses placeholder strings).
- `src/index.js` — app entry and top-level render.
- `public/index.html` — HTML template for development and build.

Important technical notes for an AI agent

- Runtime: Components rely on browser APIs (fetch, DOM). Use `npm start` to run locally or unit tests via `npm test`.
- Do not call `node src/Business.js` — that triggers runtime errors because fetch and the DOM are not available in Node.
- The code currently contains a hard-coded Geoapify API key in `src/Business.js`. Recommend switching to an environment variable (e.g. `REACT_APP_GEOAPIFY_API_KEY`) and updating any fetch calls accordingly.
- `src/Business.js` shows beginner-level bugs you will likely need to fix if modifying data flow: incorrect JSON parsing, scope issues (variables declared inside try blocks), and property names that don't match typical Geoapify responses. Inspect the API response shape before you map fields.
- `src/BusinessList.js` imports `Business` but displays static placeholders — the intended change is to call the fetch function, await results, and map over the results to render list items.

Testing and CI

- Tests exist (`src/App.test.js`) but they expect an `App` component not present in the repository. Either update tests to match current components or add a simple `App.js` that composes `BusinessList` to keep the test runner happy.
- Use the included testing libs (React Testing Library) — tests run with `npm test`.

Conventions and small gotchas

- This project is plain JS (no TypeScript); keep additions consistent with current style.
- Styling is basic CSS inside `src/*.css` files — prefer local file edits unless introducing a new, justified style sheet.
- Avoid committing secrets (API keys). If you need to add or change the key, move it into `.env` and ignore it.

Suggested first tasks for an AI agent

1. Run `npm start`, confirm the dev server loads `BusinessList`.
2. Inspect `src/Business.js` and fix JSON parsing and scope bugs; verify fetch works in the browser (observe network tab and sample responses).
3. Update `src/BusinessList.js` to consume `Business` (async) and render a list of restaurants; add minimal defensive checks (no results / missing fields).
4. Decide whether to update tests or add a lightweight `App.js` so `npm test` runs successfully.

If something is unclear, start with a small reproducible change (fix a single bug or add a test) and ask for feedback.

— End of file —

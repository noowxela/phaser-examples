# Agent notes — phaser-examples

This repository is a **static gallery of Phaser 2** mini-games and demos. There is no application server or bundler in the normal path; games are plain HTML + JavaScript.

## Layout

| Path | Role |
|------|------|
| `index.html` (repo root) | Redirects to `games/index.html`. |
| `games/` | Gallery hub: `index.html`, `games.js`, `coming-soon/`, `ready/`. |
| `games/index.html` | Hub UI: loads `games.js`, Handlebars template, filters by Phaser version. |
| `games/ready/<name>/` | **Published** demos (58 games). Catalog `name` is `ready/<name>` (e.g. `ready/box-jump`). |
| `games/coming-soon/<name>/` | WIP demos (63 games). `comingSoon: true` in `games.js`; gallery shows **Coming soon** unless admin mode is on. |
| `games/dummy/<name>/` | Scratch / experiment demos. Catalog `name` uses `dummy/<slug>`; **Dummy** tab; admin mode to play locally. |
| Hub **admin mode** | Menu → **Admin mode** (or `?admin=1` once) enables play links to `games/coming-soon/<name>/` for local review; preference stored in `localStorage`. |
| `games0/` | Deprecated pointer only (`games0/README.md`); sources moved to `games/coming-soon/`. |
| `plugins/` | Shared Phaser-related scripts (e.g. debug helpers) referenced from some games. |

## Running locally

- Serve the **repository root** with any static file server so paths like `games/<name>/` and `../../plugins/` resolve correctly.
- Opening `games/index.html` directly may work for individual games but can break asset or relative paths depending on the browser; prefer a local HTTP server.
- `bower_components/` is **gitignored**. Many `games/*/index.html` files load Phaser from `../../bower_components/phaser/...` and include a **CDN fallback** (e.g. Phaser 2.4.4 on cdnjs) if `window.Phaser` is missing. Agents do not need to run Bower unless you want offline Phaser from `bower_components`.

## npm

- `npm install` — installs `devDependencies` (not required to play games in a browser).
- `npm run deploy` — publishes via `gh-pages` (see `package.json`); verify paths before relying on it in automation.

## Adding or editing a listed game

1. **Folder** — `games/ready/<folder-name>/`, `games/coming-soon/<folder-name>/`, or `games/dummy/<folder-name>/` for experiments.
2. **Entry** — append or edit an object in `games/games.js`. The file header documents fields:

   - `name` — path under `games/`, e.g. `ready/box-jump` or `coming-soon/pong`.
   - `slug` — HTML id when `name` contains slashes (e.g. `ready-box-jump`).
   - `title`, `phaserVersion`, `isPlayable`, `screenshots`, `references`, `tags`, `inspirations`, `demos`, etc.

3. **Screenshots** — repo path `screenshots/<section>/<file>` (e.g. `screenshots/ready/run.jpg`). In `games/games.js` you can use bare filenames (`run.jpg`) or prefixed paths (`ready/run.jpg`); `games/index.html` adds the section prefix when missing. Images load from the same origin as the gallery (`/screenshots/` locally, `/phaser-examples/screenshots/` on GitHub Pages). Mirror the same `ready/`, `coming-soon/`, `dummy/` layout when deploying.
4. **Play / demo links** — `init()` in `games/index.html` **prepends** two URLs to each game’s `demos` array: this repo’s GitHub Pages game base (`…/games/<name>`) and the upstream `jojoee.github.io` mirror. The card’s main link uses `demos[0]` after that mutation. Additional `demos` entries in `games.js` are shifted to later indices.

Match an existing game’s `index.html` structure (script order, Phaser path, optional plugins) rather than inventing a new stack.

## Tech expectations

- **Phaser 2** (community edition / 2.x) patterns: states, `game.add`, Arcade Physics, etc. — not Phaser 3 unless a specific demo is migrated.
- Games vary in structure (`js/game.js` is common); **do not assume** a single universal layout beyond “HTML shell + scripts”.
- Prefer **minimal, localized changes**: one game folder + `games/games.js` (and assets) when adding to the gallery.

## Docs and links

- `README.md` is mainly inspiration, tutorial links, and a long wish list — not step-by-step build docs.
- Upstream lineage is noted in the **Origins** section at the bottom of `README.md`.

## Git / PRs (user preferences)

- **Do not create commits** unless the user explicitly asks.
- For GitHub PRs, the user prefers using the `gh` CLI when applicable.

When in doubt, open `games/ready/first-game/` or another small game as a reference for script includes and page structure (Phaser/plugins use `../../../` from `games/ready/<name>/`).

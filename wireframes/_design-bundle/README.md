# Design Bundle — 2026-05-14 Handoff

A hi-fi React/Babel prototype of the Tala app was produced via Claude Design on 2026-05-14. The screen-specific JSX and screenshots were distributed back into each `wireframes/<screen>/` folder. This bundle holds **everything that is not screen-specific** plus the original handoff context.

## How to view the prototype

The whole prototype is plain HTML + Babel-in-browser — no build step. Open any of these files in a browser:

- `Tala.html` — the iPhone-framed app prototype (Showroom / Price Board / Gallery / Favorites / Profile + a Tweaks panel to switch tabs and Showroom layouts)
- `Tala - Screens.html` — a pan/zoom canvas showing every screen + the design system + the story-transition keyframes side-by-side
- `Tala - Screens-print.html` — 7-page A4 landscape PDF deck (the file the user had open when handing off). Open and `Cmd+P` → Save as PDF.

The HTML files load shared components from `./components/` and per-screen JSX from the sibling `../<screen>/` folders, so they run in-place from this directory.

## What is in this folder

### `components/` — shared scaffolding

| File | What it provides |
|---|---|
| `ui.jsx` | `BottomNav`, `StatusBar`, `DynamicIsland`, `Img` (with placeholder fallback). The cross-screen chrome. |
| `data.jsx` | All mock data — products, posts, prices, tags. Drop real photos by replacing the Unsplash IDs here. |
| `app.jsx` | Root `<App />` + the inline `ProfileScreen` (not yet extracted). Owns the active-tab state and routes screens. |
| `canvas-app.jsx` | The pan/zoom canvas used by `Tala - Screens.html`. |
| `ios-frame.jsx` | The 380×822 iPhone frame component reused everywhere. |
| `tweaks-panel.jsx` | The dev-only sidebar to switch tabs and Showroom layouts in the prototype. |

### `screenshots/` — general (non-screen-specific) screenshots

`initial.png`, `canvas.png`, `print-preview.png`, `dbg-state.png`, `check-state.png` — screenshots taken by the design agent during iteration.

### `design-canvas.jsx`

The starter component for the pan/zoom canvas (used by `Tala - Screens.html`).

### `HANDOFF-README.md` and `chat-transcript.md`

- `HANDOFF-README.md` — the README that shipped inside the Claude Design bundle, with instructions for coding agents.
- `chat-transcript.md` — the full back-and-forth with the design assistant. **Read this for intent.** Final answers from the user are in the "Questions answered" block.

## Design tokens (from the print deck, page 6)

**Palette** — Base `#0E060A`, Wine 900 `#150A10`, Wine 800 `#2A1218`, Wine 600 `#4A1825`, Gold `#C9A24C`, Gold soft `#E8D5A0`, Champagne `#F0DFC0`, Cream `#FAF4EA`, Text dark `#1F0E12`, Text muted `#8A6B5E`, Up green `#5DBB87`, Down red `#E07474`.

**Type** — Bebas Neue (display, wide tracking), Cormorant Garamond italic (editorial accents, quotes), Vazirmatn (Persian body, weights 200–700).

**Direction** — Farsi RTL (`<html lang="fa" dir="rtl">`).

## Where each screen lives now

| Screen | Folder | Main file |
|---|---|---|
| Gallery | `../gallery/` | `screen-gallery.jsx` |
| Story viewer | `../gallery/` | `screen-story.jsx` |
| Showroom | `../showroom/` | `screen-showroom.jsx` (layouts: editorial / gallery / magazine) |
| Price Board | `../price-board/` | `screen-price.jsx` |
| Favorites | `../favorites/` | `screen-favorites.jsx` |
| Profile | `../profile/` | (inline in `components/app.jsx` — not yet extracted) |
| Navigation | `../navigation/` | (lives in `components/ui.jsx` as `BottomNav`) |
| Login | `../login/` | **not designed in this round** |
| Filters | `../filters/` | only inline tag chips in gallery; full sheet **not designed** |

## Next steps called out in the print deck (page 7)

1. **Imagery** — replace Unsplash IDs in `components/data.jsx` with real Tala workshop photos (editorial style, warm light, plain backgrounds).
2. **Copy** — rewrite mock copy with final brand voice (collection names, section titles, post descriptions).
3. **Filters** — design the filter sheet for Gallery (tags, price range, sort).
4. **Login** — phone-number + code flow, kept low-friction.

# Wireframes and Product Architecture

This directory contains the rough wireframes, editable design files, screen notes, open design questions, and architecture questions for the app.

The original rough design source is preserved here:

- [Original Excalidraw file](./tala.excalidraw)

A hi-fi React/Babel prototype was added on 2026-05-14 — see [`_design-bundle/README.md`](./_design-bundle/README.md) for the shared scaffolding, runnable HTML files, design tokens, and the original chat transcript. Each screen below has its own "Design Handoff" section pointing at the relevant JSX/screenshots.

## Screens

- [Price Board](./price-board/README.md)
- [Showroom](./showroom/README.md)
- [Gallery](./gallery/README.md)
- [Profile](./profile/README.md)
- [Favorites](./favorites/README.md)
- [Filters](./filters/README.md)
- [Navigation](./navigation/README.md)
- [Login](./login/README.md)

## Product Summary

Based on the notes in `tala.excalidraw` and the clarified product direction, Tala appears to be a phone-first web app for a single jewelry shop with two prominent high-level modes: a live `Price Board` for market or asset prices, and a branded `Showroom` landing page for curated shop presentation.

The `Gallery` is the main product-browsing surface. It is intentionally image-first and "Instagram-like" in browsing behavior, but not a social network. The `Showroom` is the place for shop-specific storytelling, text, brand presentation, and selected highlights; the `Gallery` should stay focused on scrolling product posts. Users can like items into `Favorites`, filter by tags or price, and move through a lightweight phone-number login flow. `Profile` is only lightly defined in the source file and currently looks like an account entry point rather than a fully designed screen.

## Design Principles

- Minimal interface with a small number of top-level destinations.
- Mobile-first, phone-web experience with an iPhone-style layout direction.
- Fast switching between `Price Board` and `Showroom`.
- Image-first product exploration in `Gallery`.
- Distinct separation between `Showroom` as the landing page and `Gallery` as the scrolling feed.
- Quick save-and-return behavior through `Favorites`.
- Lightweight login and profile complexity.
- Space for shop branding and customizable sections in `Showroom`.

## Core Architecture Questions

- What are the true top-level app modes: `Price Board`, `Showroom`, `Gallery`, or a smaller set with nested routes?
- Are `Price Board` and `Showroom` separate tabs, a segmented switch, or two views over the same shop context?
- Is `Gallery` scoped to one shop, or can users browse multiple shops or product streams?
- What entities are needed in the data model: `PriceEntry`, `ProductPost`, `Shop`, `Favorite`, `UserProfile`, and `FilterState`?
- Which screens work anonymously, and which require authentication?
- Should favorites exist locally before login, or only after authentication?
- How customizable is `Showroom`, and who manages that content?
- Which data is live, which is cached, and which is manually managed?
- What should be implemented first for MVP: `Price Board`, `Gallery`, `Favorites`, or auth/profile?

## Global Open Questions

- Navigation model between `Price Board`, `Showroom`, `Gallery`, `Favorites`, `Profile`, and `Login`
- Auth/profile model, especially how `Profile` and `Login` relate
- Product/item model for gallery posts, pricing, and metadata tags
- Favorites model, including persistence and cross-device sync
- Filtering/search model, especially tags versus price filters
- Relationship between `Showroom` as a branded landing page and `Gallery` as the main browse view
- Admin/content-management needs for `Showroom` and `Gallery`
- Whether price data is live, delayed, or manually updated

## Design Decision Log

### Decision 001: Top-Level Navigation Model

Status: Open

Question:
How should users move between `Price Board`, `Showroom`, `Gallery`, `Favorites`, `Profile`, and `Login` without making the app feel crowded?

Options:
- Option A: Bottom navigation with `Gallery`, `Favorites`, and `Profile`, plus secondary modals for `Filters` and `Login`

Decision:
TODO

Reasoning:
TODO

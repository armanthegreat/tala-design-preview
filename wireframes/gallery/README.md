# Gallery

## Purpose

The Excalidraw note describes `Gallery` as the main product-browsing screen. It is compared to Instagram's main feed in browsing behavior, but it is not intended to be a social posting experience. This is the scrolling product-post screen for a single shop, and it should stay focused on browsing products rather than introducing the shop itself.

## Current Design Notes

- The screen is labeled `Gallery screen` in the Excalidraw file.
- The note says the feed shows shop products in an Instagram-like browsing flow.
- Users can like items with a double tap, and that action adds the item to `Favorites`.
- The note also describes a full-screen or story-like image view plus a transparent expand action.
- Filtering is part of the design: tags appear at the top, and a dedicated filter button can further narrow results, including by price.
- Based on the clarified product direction, the shop-specific intro layer belongs in `Showroom`, not here.
- This screen should keep the same color/style system as the rest of the app, but the content should be product-feed-focused.

## Main UI Elements

- Screen title: `Gallery`
- Image-first product feed
- Lightweight header or top bar
- Tag chips at the top of the feed
- `Filter` entry point
- Like interaction, including double tap
- Full-screen or expand control for images
- Minimal post metadata such as product or collection naming

## User Actions

- Browse product posts
- Like an item and add it to `Favorites`
- Open images in a larger or full-screen view
- Open a story-like image viewer for a post and tap through the rest of the images in that post
- Filter by tags
- Filter by additional criteria such as price

## Open Design Questions

- What metadata is shown on each post besides the image?
- Does the full-screen view behave like a modal, story viewer, or zoomed detail page?
- Are likes available without login, or should they require authentication?

## Architecture Questions

- What data does this screen need?
- Where do gallery posts, media assets, and tags come from?
- Is filtering performed locally, remotely, or both?
- Does this screen share favorite state with `Favorites` in real time?
- What reusable components are needed for feed cards, tag chips, full-screen media, and like state?
- How much text should a post carry before it stops feeling like a visual feed?

## Related Screens

- [Showroom](../showroom/README.md)
- [Favorites](../favorites/README.md)
- [Filters](../filters/README.md)
- [Navigation](../navigation/README.md)

## Design Handoff (2026-05-14)

A hi-fi React/Babel prototype was produced via Claude Design. Source files for this screen:

- `screen-gallery.jsx` — the Instagram-style feed (header, tag chips, post cards, expand-to-story icon)
- `screen-story.jsx` — fullscreen story viewer + `StoryTransition` keyframes for the lift/expand animation
- Screenshots: `story-now.png`, `story-opened.png`, `story-viewer.png`, `story-section.png`, `story-in-prototype.png`, `01-story-test.png`, `02-story-test.png`

Shared scaffolding (UI primitives, data, iPhone frame, fonts/palette) lives in [`../_design-bundle/`](../_design-bundle/README.md). Open `../_design-bundle/Tala.html` in a browser to see this screen running.

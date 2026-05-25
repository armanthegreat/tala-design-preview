# Showroom

## Purpose

The Excalidraw note describes `Showroom` as the page reached by switching away from `Price board`. It is framed as a landing-page-style view where the shop owner can customize widgets, imagery, text, and contact information. Based on the clarified product direction, this is the main landing page for the shop and the main place for shop-specific content.

## Current Design Notes

- Several rough headers are labeled `ShowRoom` or `Show Room`, so the naming is conceptually stable even though the layout is not.
- The written note says this screen is "similar to a landing page" and should represent the shop with "cool pics", text, and contact info.
- The note also says this is separate from `Gallery`, which remains the main place users browse products.
- One sketch includes a `layout` note, which suggests the showroom composition may remain flexible or configurable.
- This is where the app should carry the shop story, brand tone, descriptive sections, and other shop-specific details that do not need to repeat inside `Gallery`.

## Main UI Elements

- Screen title: `Showroom`
- Mode switch back to `Price board`
- Hero or featured imagery
- Shop-specific text sections
- Brand or shop story content
- Customizable content blocks or widgets
- Descriptive text about the shop
- Contact information

## User Actions

- Browse a curated overview of the shop
- Read about the shop and understand its style
- Switch back to `Price board`
- Continue into deeper product browsing through `Gallery`
- Possibly open contact actions, assuming contact information is interactive

## Open Design Questions

- How much control does the shop owner have over the layout?
- Which showroom sections are fixed versus configurable?
- Is `Showroom` per shop, or is there a single global showroom experience?
- Should `Showroom` contain product previews, or stay focused on branding, context, and selected highlights?

## Architecture Questions

- What data does this screen need?
- Where do showroom media, text blocks, and contact details come from?
- Does editing showroom content require a separate admin or CMS path?
- Does this screen share data with `Gallery` or own a separate presentation model?
- What reusable components are needed for hero banners, content blocks, and contact actions?
- How much written content can this page carry while still feeling premium on a phone screen?

## Related Screens

- [Price Board](../price-board/README.md)
- [Gallery](../gallery/README.md)
- [Navigation](../navigation/README.md)
- [Profile](../profile/README.md)

## Design Handoff (2026-05-14)

A hi-fi React/Babel prototype was produced via Claude Design. Source files for this screen:

- `screen-showroom.jsx` — exports `ShowroomScreen` with three editorial layouts:
  - `layout="editorial"` — centered hero + vertical featured collections (default, dark)
  - `layout="gallery"` — asymmetric "Mosaic" image grid (dark)
  - `layout="magazine"` — cream background with Cormorant italic display
- Screenshot: `02-showroom.png`

Shared scaffolding (UI primitives, data, iPhone frame, fonts/palette) lives in [`../_design-bundle/`](../_design-bundle/README.md).

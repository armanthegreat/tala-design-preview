# Filters

## Purpose

The Excalidraw file does not contain a fully drawn filter screen, but it does clearly describe filtering behavior. The `Gallery` note says users can filter by tags at the top and add more filtering, such as price, through a `Filter` button.

## Current Design Notes

- `Filter` appears as a visible navigation/control label in the rough layout.
- The richer filter description appears in the `Gallery` note rather than on a standalone filter wireframe.
- Current best interpretation: `Filters` is a secondary view, modal, or sheet rather than a primary destination.

## Main UI Elements

- Filter title or sheet header
- Tag chips
- Price filter controls
- Apply and clear/reset actions
- Visible selected-state summary

## User Actions

- Filter content by tags
- Filter content by price
- Apply a filter set
- Clear or reset active filters

## Open Design Questions

- Is filtering a full screen, bottom sheet, side panel, or inline control set?
- Which filters are available on day one besides tags and price?
- Do filters persist across sessions or reset when the user leaves `Gallery`?
- Are the same filters shared by `Price Board`, `Favorites`, or only `Gallery`?

## Architecture Questions

- What data does this screen need?
- How is filter state represented and shared with `Gallery`?
- Is filtering executed locally, remotely, or both?
- Does this screen require authentication?
- What reusable components are needed for chips, ranges, toggles, and filter summaries?

## Related Screens

- [Gallery](../gallery/README.md)
- [Price Board](../price-board/README.md)
- [Navigation](../navigation/README.md)

## Design Handoff (2026-05-14)

**Not yet designed.** The hi-fi prototype only built the inline tag chips at the top of [`../gallery/screen-gallery.jsx`](../gallery/screen-gallery.jsx) (chips: همه، انگشتر، گردنبند، گوشواره، دستبند، …). The full filter sheet (tags + price range + sort) is called out as next-step work in `_design-bundle/Tala - Screens-print.html` (page 7, item 03 · FILTERS).

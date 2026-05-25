# Favorites

## Purpose

The Excalidraw notes describe this screen as the place where liked items are collected so users can quickly come back to them. One visible title reads `Favorite board`, and another note calls it "a generic favorite screen".

## Current Design Notes

- The rough design clearly treats favorites as its own destination rather than a hidden saved state.
- The source note says likes from other screens should add items into this collection.
- The `Gallery` description explicitly says double tapping an item adds it to favorites.
- The current sketch is generic, which suggests the saved-items behavior is defined before the detailed layout is.

## Main UI Elements

- Screen title: `Favorites` or `Favorite board`
- Saved item grid or list
- Image-first saved item cards
- Shared app navigation controls

## User Actions

- Review liked or saved items
- Return to previously liked products quickly
- Open a saved item for more detail
- Possibly remove an item from favorites, although that behavior is not explicitly drawn

## Open Design Questions

- Should this be a board, grid, list, or switchable layout?
- Are favorites organized by shop, product type, or recency?
- Do favorites require login, or can they exist locally before authentication?
- Can users save price-board content, or only gallery items?

## Architecture Questions

- What data does this screen need?
- Where does favorite state live: local storage, backend, or both?
- How does it sync with like actions in `Gallery`?
- What happens to favorites when a logged-out user later signs in?
- What reusable components are needed for saved-item cards and empty states?

## Related Screens

- [Gallery](../gallery/README.md)
- [Profile](../profile/README.md)
- [Login](../login/README.md)
- [Navigation](../navigation/README.md)

## Design Handoff (2026-05-14)

A hi-fi React/Babel prototype was produced via Claude Design. Source files for this screen:

- `screen-favorites.jsx` — exports `FavoritesScreen`: 2-column saved-items grid on warm cream.

Shared scaffolding (UI primitives, data, iPhone frame, fonts/palette) lives in [`../_design-bundle/`](../_design-bundle/README.md).

# Profile

## Purpose

`Profile` is only named in the Excalidraw navigation annotations and does not have a dedicated written screen description. Best current interpretation: it is the account entry point for identity, settings, and possibly auth state.

## Current Design Notes

- `Profile` appears as a visible navigation label in the shared layout sketch.
- No standalone `Profile` wireframe or descriptive note was found in the Excalidraw file.
- The surrounding flow suggests this screen may be where login state, account details, and saved user context live.
- This README is therefore partly inferred and should be treated as a placeholder until the screen is sketched directly.

## Main UI Elements

- Profile or account header
- Phone number or login state summary
- Entry points to favorites, preferences, or settings
- Possibly support, contact, or logout actions

## User Actions

- View current account status
- Log in or continue to login if not authenticated
- Open favorites or saved user-specific areas
- Adjust account-level settings

## Open Design Questions

- Is `Profile` mainly an auth/settings screen, or does it include richer user identity data?
- What can anonymous users see here?
- Does `Profile` own favorites access, or is favorites a separate first-class destination?
- Is there any shop-following or personalization model beyond login state?

## Architecture Questions

- What data does this screen need?
- How does `Profile` relate to `Login` and session state?
- Does this screen require authentication, or can it render logged-out and logged-in states?
- What user settings or preferences need storage?
- What reusable components are needed for account summaries, settings rows, and auth actions?

## Related Screens

- [Login](../login/README.md)
- [Favorites](../favorites/README.md)
- [Navigation](../navigation/README.md)

## Design Handoff (2026-05-14)

A hi-fi React/Babel prototype was produced via Claude Design. There is no dedicated `screen-profile.jsx`: `ProfileScreen` is defined inline in [`../_design-bundle/components/app.jsx`](../_design-bundle/components/app.jsx) — avatar with gold gradient ring, grouped settings list. Extract it into its own file when implementing.

Shared scaffolding (UI primitives, data, iPhone frame, fonts/palette) lives in [`../_design-bundle/`](../_design-bundle/README.md).

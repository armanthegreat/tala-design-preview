# Navigation

## Purpose

The Excalidraw file contains a shared navigation sketch with explicit labels for `Profile`, `Gallery`, `Favorite`, `Filter`, and a switch between `Showroom` and `Price board`. This folder documents that cross-screen shell and routing model for a phone web application that should feel app-like on iPhone.

## Current Design Notes

- The navigation annotations appear to describe the global app shell rather than a single user-facing content screen.
- `Profile`, `Gallery`, `Favorite`, and `Filter` are all called out as visible destinations or controls.
- The switch between `Showroom mode` and `Price board` is explicitly labeled, which suggests it is a central interaction pattern.
- `Login` is not labeled inside the shell sketch, but a separate login screen exists and is likely reached through `Profile`.
- The clarified product direction implies a mobile-first app shell rather than a desktop website navigation system.

## Main UI Elements

- Global navigation shell
- `Price board` / `Showroom` switch
- Entry points to `Gallery`, `Favorites`, and `Profile`
- `Filter` control
- Active-state feedback for the current route or mode
- Phone-safe top/bottom layout behavior suitable for iPhone-style presentation

## User Actions

- Switch between `Price board` and `Showroom`
- Navigate to `Gallery`
- Navigate to `Favorites`
- Navigate to `Profile`
- Open filter controls
- Reach `Login` through the account flow, assuming the current interpretation holds
- Move through the product in a way that feels like a lightweight app rather than a normal website

## Open Design Questions

- Is the main navigation a bottom nav, segmented control, top tabs, or a mixed model?
- Which screens are true peers versus secondary overlays or flows?
- Where should `Login` appear in the navigation model when the user is logged out?
- Should `Filter` be global, screen-specific, or modal-only?
- How closely should the shell mimic native iPhone app patterns versus staying obviously web?

## Architecture Questions

- What route hierarchy does the app need?
- Which state is shared globally across screens?
- How does auth gating work when a user enters `Profile`, `Favorites`, or like actions from `Gallery`?
- Does the app need separate navigation stacks for browsing versus auth flows?
- What reusable components are needed for tabs, segmented controls, icons, and route guards?
- What is needed to support an add-to-home-screen, app-like mobile web experience?

## Related Screens

- [Price Board](../price-board/README.md)
- [Showroom](../showroom/README.md)
- [Gallery](../gallery/README.md)
- [Favorites](../favorites/README.md)
- [Profile](../profile/README.md)
- [Login](../login/README.md)
- [Filters](../filters/README.md)

## Design Handoff (2026-05-14)

A hi-fi React/Babel prototype was produced via Claude Design. The navigation shell is a bottom nav (5 tabs: showroom, price, gallery, favorites, profile) plus the iPhone status bar / dynamic island / home indicator chrome. All of it lives in [`../_design-bundle/components/ui.jsx`](../_design-bundle/components/ui.jsx):

- `BottomNav({ active, onChange })` — gold-seam glass bar that adapts dark/light per screen
- `StatusBar({ dark })`, `DynamicIsland`, `Img` (with fallback) — shared chrome
- App-level routing is in [`../_design-bundle/components/app.jsx`](../_design-bundle/components/app.jsx)

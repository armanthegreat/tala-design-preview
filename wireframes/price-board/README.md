# Price Board

## Purpose

The Excalidraw note describes this screen as showing "price at the moment" for tracked assets. The examples in the note mention gold price, half coin price, and whole coin price, so this appears to be a top-level market or pricing surface.

## Current Design Notes

- Multiple rough variants are labeled `Price board`, which suggests this is a core screen still being iterated.
- The overall navigation sketch explicitly shows a switch between `Showroom` mode and `Price board`.
- The rough layouts imply a simple, glanceable screen rather than a dense analytics dashboard.
- Some variants include shared shell elements that may also appear on other screens.

## Main UI Elements

- Screen title: `Price board`
- Mode switch that leads to `Showroom`
- Repeated price cards or rows for tracked assets
- Shared navigation entry points from the broader app shell

## User Actions

- Check current asset prices
- Switch to `Showroom`
- Move into other app areas through the shared navigation shell

## Open Design Questions

- Which exact assets are included at launch?
- Are prices live, delayed, or manually updated?
- Is this screen strictly read-only, or can users drill into more detail?
- Should `Price board` eventually support alerts, history, or saved watch items?

## Architecture Questions

- What data does this screen need?
- Where does price data come from, and how often does it refresh?
- Is offline caching required?
- Does this screen require authentication, or is it public?
- What reusable components are needed for price cards, status badges, and the mode switch?

## Related Screens

- [Showroom](../showroom/README.md)
- [Gallery](../gallery/README.md)
- [Filters](../filters/README.md)
- [Navigation](../navigation/README.md)

## Design Handoff (2026-05-14)

A hi-fi React/Babel prototype was produced via Claude Design. Source files for this screen:

- `screen-price.jsx` — exports `PriceBoardScreen`: dark surface, live indicator, Persian date, calm price cards with sparklines and ±% pills. Tracked items: طلای ۱۸، طلای ۲۴، نقره، دلار، یورو.

Shared scaffolding (UI primitives, data, iPhone frame, fonts/palette) lives in [`../_design-bundle/`](../_design-bundle/README.md).

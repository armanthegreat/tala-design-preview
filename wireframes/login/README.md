# Login

## Purpose

The Excalidraw file includes a dedicated `Login` screen and a separate note that says the user enters a phone number, receives a code, enters the code, and logs in. This is the clearest explicitly described auth flow in the source material.

## Current Design Notes

- One visible title reads `Login`.
- Another label says `Login with phone number and code`.
- The supporting note describes a simple OTP-style login flow with no extra onboarding detail.
- The login screen appears to be a separate flow rather than part of the main browsing screens.

## Main UI Elements

- Screen title: `Login`
- Phone number input
- Code input
- Send-code action
- Verify or continue action

## User Actions

- Enter a phone number
- Request a verification code
- Enter the received code
- Complete login

## Open Design Questions

- Is account creation implicit in the same flow?
- Can users browse as guests before logging in?
- How should resend, timeout, and error states work?
- Does login happen only through `Profile`, or can other actions trigger it?

## Architecture Questions

- What data does this screen need?
- Which OTP or verification provider handles the login flow?
- How are sessions stored and refreshed?
- What screens should be auth-gated after login succeeds?
- What reusable components are needed for form inputs, code entry, loading states, and error handling?

## Related Screens

- [Profile](../profile/README.md)
- [Navigation](../navigation/README.md)
- [Favorites](../favorites/README.md)

## Design Handoff (2026-05-14)

**Not designed in this round.** The hi-fi prototype skipped login intentionally (the design conversation prioritized Gallery / Showroom / Price Board / Navigation). When this screen gets designed, reuse the type and color tokens from [`../_design-bundle/`](../_design-bundle/README.md) so it stays consistent with the rest of the app.

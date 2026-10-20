---
title: "Aletheia GoWalkabout — HTML page contract"
date: "2026-10-20"
status: "Source committed; live Pages, cross-browser and AI-host acceptance tests pending"
---

# GoWalkabout launcher — implementation and QA

[Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — provenance, uncertainty, correction and human decision rights.  
[Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional humour cognition and humanity, never a source of factual evidence.

## Ownership
- Repository: `KarstenEvans/aletheia`.
- Markdown engine: `aletheia-go/aletheia-gowalkabout.md`.
- Static launcher: `aletheia-go/go-walkabout.htm`.
- Public route: `https://karstenevans.github.io/aletheia/aletheia-go/go-walkabout.htm`.
- Original portable source: owner Library `aletheia-gowalkabout(4).md`, 18 September 2026. Its engine is preserved under the 20 October START wrapper; do not claim it was invented from scratch.
- Entry points: `aletheia-go/index.html`; `articles/the-ai-mirror.html`.

## Functional contract
1. Explain Aletheia, Thalia and GoWalkabout without confusing the protocols or claiming autonomous AI execution.
2. Ask only for a seed and optional previous AI output, not a mandatory questionnaire.
3. Choose ChatGPT, Claude, Gemini, Copilot, DeepSeek or Grok. Addresses are external destinations, subject to provider changes. No account or paid API is required to use the launcher.
4. START / GO WALKABOUT includes the complete markdown engine, not merely a URL or a prompt to "read this file". The receiving AI must treat the user's seed as a task and perform one bounded exploration. When no seed is provided, the Markdown asks for a harmless clearly labelled sample rather than doing nothing.
5. NEXT AI / HANDOFF includes the previous answer as unverified input and demands a distinct critical contribution; repeated agreement does not count as progress.
6. Copy the full START pack, open the selected provider, explain the user must paste and send. Browser security rules mean automatic paste into another provider is unsupported. The packet remains selectable and downloadable as .md for clipboard failures or limited-bandwidth/offline use.
7. Preserve user consent and privacy: pasted personal/proprietary content stays in browser memory until the user chooses to copy it to another provider. No external uploads from the page, no API keys, no automatic agent actions.
8. No unverified research claims; record SOURCES/FACTS, branches, objections, Wake Filter, survivors, unknowns and handoff.
9. User-facing source links and both protocols are included; original writing remains original.

## Source synchronization and tests
The HTML contains a snapshot of the full Markdown engine so a single user click can copy all instructions without fragile network-dependent fetching. When editing either file, reconcile the inline HTML snapshot deliberately; never assume changing the MD updates the HTML automatically.

- [x] Current repository files and the recovered original engine inspected.
- [x] Both files committed and GitHub connector readback verified.
- [x] Public Aletheia Go index linked to launcher.
- [ ] Independent desktop/mobile/Safari/keyboard/clipboard/popup fallback test.
- [ ] Test real AI receiver with START with seed, START without seed, HANDOFF, THALIA, and contradictory source content.
- [ ] Live Pages URL checked from an ordinary browser; automated web fetch cannot access the github.io host in this environment.
- [ ] Confirm links remain current as providers change.

## Relationship to other projects
This launcher exposes an existing portable capability, not a new autonomous agent or a duplicate replacement for the larger Grand GoWalkabout. The same engine may be used in Aletheia Learn, Writing Vibe, Improve and Aletheia Go research with their own human approval/evidence boundaries.

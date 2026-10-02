# Crazy Wall

A static event page: light corkboard, paper notes, red thread, concise copy. No build, dependencies, external fonts, or third-party requests. A 770-byte gzipped optional script aligns decorative strings to the rendered cards.

## Preview

From this directory run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. Opening `index.html` directly also works.

## Edit

- `index.html`: all event copy, metadata, and the four individually editable organizer entries. Duration and logistics appear in both the hero slip and practical details; update both.
- `styles.css`: materials, deterministic note positions, responsive layout, visible focus, and reduced-motion support.
- `assets/`: reserved for the approved proposal and optional approved portraits.

The mobile layout puts the event notice, in-page details link, PDF status, and logistics before the terminology notes. Decorative strings disappear on smaller screens. All essential content is present in HTML.

## Before publication

- The October 1 working PDF was reviewed as source material. It contains editing comments, an unfinished organizer bio, and ACM template placeholders, so it is not included in the public repository. Both proposal labels remain deliberately non-clickable. Expected path: `assets/meetup-proposal.pdf`.
- Obtain an approved public PDF before adding the download. Expected asset: `assets/meetup-proposal.pdf`; label any public draft clearly, and do not preload or embed it.
- Confirmed display affiliations: Dylan Wootton — MIT CSAIL; Vidya Setlur — Tableau Research / U Michigan; Srishti Palani and Nicole Sultanum — Tableau Research.
- Confirm proposal acceptance/status, date, time, and room; unknown logistics remain TBA.
- Public profile portraits were approved by the user and are included as locally served, lazy-loaded images. Organizer order: Nicole, Srishti, Vidya, Dylan, Huichen Will Wang. No registration, invented email, or attendance rules were added.
- GitHub Pages publishes the `main` branch from the repository root.

## Verification

Recorded local checks are summarized below.

Measured locally in headless Microsoft Edge via the existing bundled Playwright:

- 375, 768, and 1440 CSS px: no horizontal overflow or internally overflowing text; all seven terms, five organizers, and exactly two annotations present.
- JavaScript disabled at each requested width: complete content, working anchor navigation, and visible 3 px keyboard focus on all three links, including the skip link.
- CSS viewport of 720 px with 2x pixel density: 200% zoom-equivalent reflow without horizontal overflow. Native browser zoom UI was not exercised.
- Observed cumulative layout shift: 0 during a local load and one-second observation.
- Raw HTML + CSS + JS: 23,921 bytes. Gzip-compressed asset payload: 7,253 bytes, below the 250 KB target. This is measured compression of the files, not a production network-transfer measurement; Python's preview server serves them uncompressed.
- Site JavaScript: 1,788 bytes raw, 770 bytes gzipped. HTML, CSS, optional strings.js, plus five locally served, lazy-loaded portraits.
- Real PDF link: cannot be tested without the supplied/approved file. Forthcoming fallback verified.

Desktop/mobile/tablet screenshots were visually inspected. Safari, Firefox, screen-reader output, full automated WCAG audits, and production network performance were not tested. No lint/typecheck framework is configured because this is dependency-free HTML/CSS.

## Portrait sources

Approved public profile photographs, retrieved September 29, 2026. Original image files are preserved; square framing uses CSS object-fit.

- Nicole Sultanum: https://www.tableau.com/research/people/nicole-sultanum
- Srishti Palani: https://www.tableau.com/research/people/srishti-palani
- Vidya Setlur: https://www.vidyasetlur.com/
- Dylan Wootton: https://vis.csail.mit.edu/ (member photograph at /imgs/people/dwootton.jpg)

Portraits total approximately 522 KB, excluded from the initial HTML/CSS payload target. They have reserved square dimensions and lazy loading.

## String alignment fix

`strings.js` measures actual pins or paper centers and updates the decorative SVG on resize. All junctions land inside their cards at 1000, 1200, and 1440 px. Strings are hidden when JavaScript is disabled; all content and navigation remain usable. The loop annotation is attached directly to the yellow card and points left toward it on desktop and mobile.

## October 1 content update

The working proposal broadens the focus to changing practices, emerging research questions, and community support. The concise website headline is “What is changing?”; the proposal’s working title is “Outlining the Emerging Research and Praxis Map of AI-Mediated Data Work.” Added Huichen Will Wang (University of Washington) and his public portrait from https://homes.cs.washington.edu/~wwill/ (images/headshot.jpg). Prior organizer order and explicitly approved affiliations are preserved. The page remains a proposed event with TBA logistics.

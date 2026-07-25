# Muhammad Abubakar Rizwan — Portfolio

Next.js (App Router) portfolio site.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build so
`next/font/google` can fetch Space Grotesk, Inter, and JetBrains Mono —
this is normal and works out of the box on Vercel or any machine with a
regular internet connection.

## Structure

```
app/
  layout.js       — fonts + metadata
  page.js         — assembles the five sections
  globals.css     — design tokens (colors, type, spacing) as CSS variables
components/
  Header.js / .module.css     — nav + hero, with gradient glow + gradient name
  About.js  / .module.css     — build-log timeline (2016 → 2020 → 2021)
  Skills.js / .module.css     — grouped skill tags, color-coded by category
  Projects.js / .module.css   — Gallery App case
  GalleryMockup.js            — illustrative SVG preview graphic (placeholder,
                                 not a real screenshot — swap in an actual one
                                 whenever you have it)
  Contact.js / .module.css    — email + GitHub, footer
```

## Design notes

- Bold, saturated palette on a deep violet-navy base — hot pink, electric
  cyan, and amber as the three accent colors, chosen to read as "game-dev
  energy" rather than a generic dark-mode template.
- The three accents aren't just decorative — they're used to encode real
  structure: each of the three About milestones gets its own color, as do
  the three Skills categories, so the color-coding carries information
  instead of just adding noise.
- Hero has an animated gradient glow behind the name, and the name itself
  is rendered with a pink → cyan → amber gradient fill.
- The Projects card includes a hand-built SVG mockup of a gallery-app
  interface, since there's no real screenshot yet — replace `GalleryMockup`
  with an `<img>` of an actual screenshot in `Projects.js` once you have one.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (data:
  dates, tags, email, links, and the mockup's UI text).
- Fully responsive: the build-log grid, skills grid, mockup, and contact
  rows all collapse to single-column layouts under 640px / 560px.
- Respects `prefers-reduced-motion` (including the hero glow animation).

## Editing content

All copy lives directly in the component files as plain arrays/JSX —
no CMS or data file layer, since the brief is a fixed personal
portfolio. To update a role, skill, or project, edit the corresponding
array at the top of `About.js`, `Skills.js`, or `Projects.js`.

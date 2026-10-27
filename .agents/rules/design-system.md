---
trigger: always_on
---

# Portfolio Design & Anti-Cliche Rules

When modifying or extending files in this repository (`index.html`, `about.html`, `stem.html`, `academics.html`, `community.html`, `aspirations.html`, `contact.html`, `style.css`, `main.js`), strictly enforce the following design and content rules:

## Strictly Forbidden Patterns
- **NO** purple-to-blue gradients anywhere in CSS or shaders.
- **NO** gradient hero text (`background-clip: text` gradients on headlines).
- **NO** emojis in headings.
- **NO** Inter font, Space Grotesk, or Instrument Serif. Use `'Syne'`, `'Plus Jakarta Sans'`, and `'JetBrains Mono'`.
- **NO** colored left-border cards (`border-left: 4px solid ...`).
- **NO** glassmorphism cards (`backdrop-filter: blur(...)` on cards). Use solid high-contrast architectural panels (`#0c0d12` with `1px solid #262936` borders and hard offset shadows).
- **NO** low-contrast dark mode text. Body copy must use `#ffffff` or `#e2e8f0`.
- **NO** three icon boxes in a row.
- **NO** badge above the hero headline.
- **NO** Lucide icons or untouched shadcn components.
- **NO** sections fading in as you scroll (`IntersectionObserver` scroll-fade animations).
- **NO** cursor-following beams.
- **NO** hover effects that make buttons fade (`opacity` reduction). Buttons must use crisp color inversion and mechanical offset shifts.
- **NO** inconsistent spacing. Follow the strict 8px grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **NO** em dashes (`—`) in prose copy.
- **NO** generic buzzword copy or serif italics for accent words.
- **NO** grain texture overlays over gradients.

## Required Visual Architecture
- Maintain the real-time 3D WebGL GLSL topographic shader background (`#shader-canvas` in `main.js`) rendered in obsidian (`#050507`), crimson (`#ff2a4b`), and warm amber (`#ff9f1c`).
- Maintain strict mobile responsiveness (`max-width: 100vw; overflow-x: hidden`) with the portrait frame rendered first on mobile (`order-1 order-lg-2`) and the slide-out mobile navigation drawer (`#mobile-drawer`).

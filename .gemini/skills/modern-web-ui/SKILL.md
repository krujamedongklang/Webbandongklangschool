---
name: modern-web-ui
description: Guidelines and design standards for building modern, visually stunning, accessible, and responsive web user interfaces.
---

# Modern Web UI & Design System Skill

## Core Principles
1. **Rich Aesthetics & First Impressions**:
   - Avoid generic, plain colors (e.g., standard red/blue). Use curated HSL or modern color palettes with sleek dark mode support.
   - Use dynamic gradients, subtle shadows, glassmorphism, and clean borders (`border-white/10` or `border-slate-800`).
   - Use modern web fonts (e.g., Inter, Outfit, Plus Jakarta Sans, Sarabun/Prompt for Thai).

2. **Micro-Animations & Dynamic Feedback**:
   - Add hover states (`transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]`).
   - Use smooth entrance animations, skeletons for loading states, and toast notifications for user actions.

3. **Responsive & Mobile-First**:
   - Design layouts using Flexbox and Grid. Ensure seamless responsiveness across mobile, tablet, and desktop viewports.

4. **SEO & Accessibility**:
   - Include high-level semantic HTML5 tags (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).
   - Ensure proper heading hierarchy (`<h1>` unique per page, followed by `<h2>` and `<h3>`).
   - Provide `alt` text for images and `aria-label` for icon-only buttons.

# Full‑Stack Developer Portfolio (React + Vite)

A clean, animated portfolio built with **React** and **Vite**, designed for a **Django / DRF + React** full‑stack developer.

## Features

- **Single-page layout**: About, Skills, Projects, Certifications, Achievements, Contact
- **Simple animations**: scroll-reveal + subtle hero motion (respects “reduced motion”)
- **Responsive**: works well on mobile, tablet, desktop
- **Light/Dark toggle**: manual button + saved preference
- **Photo area**: circular avatar with a gradient ring

## Getting started

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Customize your content

Edit:

- `src/content.js` — your name, about text, skills, projects, links, email
- `src/App.jsx` — section layout / order
- `src/App.css` — styling and animations

### Add your profile photo

1. Put your image in `public/` (example: `public/profile.jpg`)
2. Update `src/content.js`:

```js
photo: { src: '/profile.jpg', alt: 'Your Name' }
```

If you don’t add a photo, the app uses `public/profile-placeholder.svg`.

## Light/Dark mode

The theme button is in the header.

- **Saved preference**: stored in `localStorage` as `theme` (`light` or `dark`)
- **How it works**: sets `data-theme` on the `<html>` element
- **System theme**: used only when there’s no saved preference

Theme code:

- `src/components/ThemeToggle.jsx`
- `src/index.css` (theme variables)

## Deploy

You can deploy the `dist/` folder to any static host:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

Build command:

```bash
npm run build
```

Output folder: `dist/`

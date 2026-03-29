# ArcSolis marketing site

This repository now contains a Next.js marketing website for ArcSolis built as a single page experience that mirrors the original static design.

## Tech stack

- [Next.js](https://nextjs.org/) with the `pages` router.
- React functional components and hooks for navigation, smooth scroll and FAQ interactions.
- Global CSS theme that uses ArcSolis navy and solar orange tones and avoids purple gradients.

## Local development

Install dependencies then run the development server.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

## Structure

- `pages/index.js` main page markup and interactions.
- `pages/_app.js` global app wrapper that imports `styles/globals.css`.
- `styles/globals.css` layout and theme.
- Legacy `index.html`, `styles.css` and `script.js` remain in the root for reference from the original static implementation.

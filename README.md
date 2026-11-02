# EsteticaProject

Polish landing page for Estetica Dłoni i Stóp, built with React, Vite and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create a production build in `dist/`, and `npm run preview` to preview that build.

Page sections are in `src/components/`. Edit service descriptions and external links in `src/content.js`, and shared colours and typography in `src/styles.css`. The brand symbol is in `public/estetica-symbol.svg`.

The temporary hero image is stored locally at `public/preview/studio.png` and excluded from Git. Add an approved image at that path or update the image reference in `src/components/Hero.jsx` when preparing a complete deployment.

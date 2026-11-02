# EsteticaProject

Polish landing page for Estetica Dłoni i Stóp, built with React, Vite and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create a production build in `dist/`, and `npm run preview` to preview that build.

Page sections are in `src/components/`. Edit service descriptions and external links in `src/content.js`, and shared colours and typography in `src/styles.css`. The brand symbol is in `public/estetica-symbol.svg`.

Website images are tracked in `public/images/` and copied into the production build.

## GitHub Pages

The deployment workflow is manually triggered. After merging it into the default branch, enable **GitHub Actions** in Settings → Pages, then run **Deploy to GitHub Pages** from the Actions tab and select the desired branch. Hosting from a private repository requires an eligible GitHub plan.

The workflow sets `VITE_BASE_PATH=/EsteticaProject/` for the project URL. Local development uses `/` by default. For a custom domain, set the workflow's `VITE_BASE_PATH` to `/`.

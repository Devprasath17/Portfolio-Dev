# Portfolio React App

A React + Vite portfolio website built with Tailwind CSS.

## Project Overview

This project is a single-page portfolio application using React, Vite, and Tailwind CSS. The app renders a main `Home` page from `src/pages/Home.jsx`, and is composed of reusable UI sections in `src/components`.

## Install

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Scripts

- `npm run dev` - start Vite development server
- `npm run build` - build production assets
- `npm run preview` - preview the production build

## Project Structure

```
Portfolio/
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   ├── resume.pdf
│   └── ...
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── projects.js
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   └── pages/
│       └── Home.jsx
└── dist/
```

## File Roles

- `index.html` - application shell for Vite.
- `package.json` - project metadata, dependencies, and scripts.
- `tailwind.config.js` - Tailwind CSS configuration.
- `postcss.config.js` - PostCSS configuration for Tailwind.
- `vite.config.js` - Vite build and dev server configuration.
- `public/` - static assets served as-is, including `resume.pdf`.
- `src/main.jsx` - React entry point that mounts the app.
- `src/App.jsx` - root React component.
- `src/index.css` - global styles and Tailwind imports.
- `src/pages/Home.jsx` - main page component.
- `src/components/` - reusable page sections and UI components.
- `src/data/projects.js` - project content data used by `Projects.jsx`.
- `src/hooks/useScrollAnimation.js` - custom hook for scroll-based animation effects.

## Notes

- The app is built for modern browsers using React 18 and Vite.
- Tailwind CSS powers the styling and responsive layout.

## Recommended Next Steps

- Add a `README.md` or update this file with your personal portfolio details.
- Confirm the page components are wired correctly in `Home.jsx`.
- Customize `projects.js` and assets for your content.

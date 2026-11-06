# Ei Htet Htet Tun — Portfolio (React + Vite)

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:5173/latest-portfoilo-website/

## Edit content

All text, projects, skills and links are in `src/data/portfolio.js`, so you don't need to touch any component to update them.

- **Your photo:** put `me.jpg` in `public/` and set `photo: 'me.jpg'` in `profile`.
- **New project:** add an object to `projects` and give it categories that match `projectFilters`.
- **New skill:** add it to `skills`. Find icon paths at https://devicon.dev, or use `icon: null` to show initials instead.

## Structure

```
src/
  data/portfolio.js      content
  styles/global.css      colour tokens, buttons, shared layout
  components/
    Navbar  Hero  About  Projects (ProjectCard, ProjectModal, ProjectImage)
    Skills  Experience  Contact  Footer  ScrollTop  Icon
```

## Deploy to GitHub Pages

Pushing to `main` builds and publishes the site automatically (`.github/workflows/deploy.yml`). Live at https://eihtet250.github.io/latest-portfoilo-website/. `base` in `vite.config.js` must match the repo name.

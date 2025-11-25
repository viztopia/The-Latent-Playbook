# The Latent Playbook

A content-forward Astro site documenting practical workflows & reflections for generative filmmaking research coming out of NYU Hypercinema Lab, initied by Yuguang Zhang. The site is organized into “plays” that capture tools, advice, and resources for specific production techniques.

## Tech stack

- **Astro** for static generation and content collections
- **React** (optional islands) for future interactivity
- **Tailwind CSS 4** with a custom warm dark-mode palette
- **GitHub Actions + GitHub Pages** for continuous deployment

## Getting started

Prerequisites: Node.js 22.x and npm.

```powershell
npm install
npm run dev
```

The dev server runs at <http://localhost:4321>. Press `Ctrl+C` to stop it.

## Project structure

```text
/
├── public/                # Static assets (videos live in public/assets/videos)
├── src/
│   ├── components/        # Shared UI pieces (Header, Footer, PlayCard)
│   ├── content/
│   │   ├── config.ts      # Astro content collection schema
│   │   └── plays/         # Markdown sources for each Play
│   ├── layouts/           # Base layout and Play layout
│   └── pages/             # Route definitions (index, about, plays)
├── tailwind.config.mjs    # Custom palette, fonts, and tokens
├── astro.config.mjs       # Astro configuration (React + Tailwind)
└── package.json
```

## Core scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server in watch mode |
| `npm run build` | Generate the production site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Contributing

To contribute a new play, please follow these steps:

1.  **Use the Template**: Copy the `templates/play-template.md` file to `src/content/plays/` and rename it to reflect your play's topic (e.g., `my-new-play.md`).
2.  **Add Content**: Fill out the frontmatter and write your content following the instructions in the template.
3.  **Add Media**: Place any videos or images in a new folder under `public/assets/videos/` that matches your markdown file's name (e.g., `public/assets/videos/my-new-play/`).
4.  **Submit a Pull Request**: Once your play is ready, submit a pull request.

For more details on content authoring, see the template. Media assets referenced by plays should be added under `public/assets/videos/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with Node 22, caches npm dependencies, and publishes automatically via GitHub Pages.

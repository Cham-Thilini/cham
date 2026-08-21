# Cham Madamperuma Portfolio

A premium, responsive portfolio for a senior full-stack software engineer, built with React, TypeScript and Vite for GitHub Pages hosting.

## Prerequisites

- Node.js 18+
- npm
- A GitHub account

## Installation

```bash
npm install
```

## Local development

```bash
npm run dev
```

Then open the local address shown in the terminal, typically:

```text
http://localhost:5173/
```

## Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## GitHub repository setup

1. Create a repository on GitHub, for example `cham`.
2. Push this project to the repository's `main` branch.
3. Ensure the project contains the `public/` directory for static assets and `vite.config.ts` configured for GitHub Pages.

## Enabling GitHub Pages

1. In GitHub, open the repository.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The included workflow in `.github/workflows/deploy.yml` will build and publish the app automatically.

## GitHub Actions deployment

The project includes a deployment workflow:

```yaml
.github/workflows/deploy.yml
```

This workflow:

- installs dependencies
- runs `npm run build`
- uploads the `dist/` output
- deploys it to the GitHub Pages environment

## Custom domain later

To add a custom domain such as `chammadamperuma.com` later:

1. Buy the domain from a registrar.
2. Open **Settings** → **Pages** in GitHub.
3. Add the custom domain.
4. Configure the DNS records provided by GitHub.
5. Enable **Enforce HTTPS** after DNS verification.

## Content and assets

Update portfolio details in:

- `src/data/profile.ts`

Replace placeholders such as LinkedIn, GitHub, email, CV path and photo URLs when needed.

The main static files are kept in the `public/` folder and are GitHub Pages compatible.

## Notes

This project is designed to work as a static website only. There is no backend, database or API server requirement.

# Cham Madamperuma — Portfolio

A responsive personal portfolio for Cham Madamperuma, Senior Full-Stack Software Engineer.

## Stack

- React 18
- TypeScript
- Vite
- Lucide icons
- CSS only for layout and animation
- GitHub Actions for GitHub Pages deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `cham-portfolio`.
2. Copy this project into the repository.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Push a new commit if needed. The included workflow will build and deploy the site.
7. When deployment finishes, GitHub will show the public URL.

The Vite configuration uses `base: './'`, so it works for a standard GitHub Pages project site without needing to hard-code the repository name.

## Update profile links

Open:

`src/data/profile.ts`

Replace the LinkedIn URL if needed:

```ts
linkedin: 'https://www.linkedin.com/in/YOUR-PROFILE/'
```

The GitHub profile is currently configured as:

```ts
github: 'https://github.com/Cham-Thilini'
```

## CV

The CV is included at:

`public/Cham-Madamperuma-CV.pdf`

The website's **Download CV** buttons link to this file.

## Custom domain

After the site is live:

1. Buy or configure your domain.
2. Open **Settings → Pages → Custom domain**.
3. Enter your domain.
4. Configure the DNS records requested by GitHub.
5. Enable **Enforce HTTPS** after DNS verification.

## Content source

Portfolio content was prepared from the supplied CV. No additional employer names, qualifications, awards, or performance metrics were invented.

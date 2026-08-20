import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Works for a GitHub Pages project site, e.g. https://username.github.io/repository-name/
  base: './'
})

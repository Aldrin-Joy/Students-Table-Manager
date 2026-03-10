import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If we are deploying to GitHub Pages (which sets GITHUB_ACTIONS env var or similar),
  // we might use a base path. Vercel however expects the root '/'.
  // Vercel sets an environment variable `VERCEL` to '1'.
  base: process.env.VERCEL ? '/' : '/Students-Table-Manager/',
})

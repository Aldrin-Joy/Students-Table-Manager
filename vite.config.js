import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    // If not building for Vercel, use the repository name for GitHub Pages
    base: process.env.VERCEL ? '/' : '/Students-Table-Manager/',
  }
})

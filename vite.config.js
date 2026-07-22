import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Pages the site lives at /chris-birthday/, so assets must be
// requested from that sub-path. Locally (dev + `vite preview`) it stays at /.
// The CI build sets GITHUB_PAGES=1.
const base = process.env.GITHUB_PAGES ? '/chris-birthday/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
})

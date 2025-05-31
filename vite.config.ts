import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Changed to root path for custom domain
  build: {
    outDir: 'dist',
    sourcemap: true
  }
}) 
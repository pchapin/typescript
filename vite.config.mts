import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    sourcemap: true,     // Helpful for debugging.
    target: 'esnext',    // Modern browser support.
  }
})
import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative paths for assets so that it works on any deployment path
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});

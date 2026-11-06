import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base` matches the GitHub Pages repo name so assets resolve after deploy.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});

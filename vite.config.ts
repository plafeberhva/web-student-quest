import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Frontend development server will run on port 3000
    open: true, // Automatically open browser when starting
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
}); 
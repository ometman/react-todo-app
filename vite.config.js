import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// import { dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'

// const dirname = () => typeof __dirname !== 'undefined'
//   ? __dirname
//   : dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.url, './src'),
    },
  },
  plugins: [react()],
});

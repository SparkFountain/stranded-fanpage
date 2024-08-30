import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { lingui } from '@lingui/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react({
      babel: {
        plugins: ['macros'],
      },
    }),
    lingui(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // This ensures Vite knows where to find your SCSS files
        additionalData: '@use "./src/variables" as *;', // Automatically include variables in all SCSS files
      },
    },
  },
});

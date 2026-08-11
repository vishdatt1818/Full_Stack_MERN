import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    watch: {
      usePolling: true, // Forces Vite to poll for file changes
      interval: 100,    // Checks for changes every 100ms
    },
    hmr: true,          // Ensures Hot Module Replacement is explicitly active
  },
})
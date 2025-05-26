import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    // no plugin for tailwindcss here, instead configure tailwindcss in postcss.config.js
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        content: resolve(__dirname, 'src/content.tsx'),
      },
      output: {
        entryFileNames: chunk => (chunk.name === 'content' ? 'content.js' : '[name].js'),
      },
    },
    emptyOutDir: true,
  },
})

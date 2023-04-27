import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'src',
    rollupOptions: {
      input: {
        index: 'index.html',
        lesson: 'lekcija.html'
      }
    }
  }
})

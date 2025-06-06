import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})

// - Filip Arnhold Outa — RM: 559294
// - Marcos Eduardo Hideyoshi Azuma — RM: 559883
// - Matheus Ricardo Parreira da Silva — RM: 560099
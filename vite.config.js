import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Rankingpadel/',  // Asegúrate de que esta línea esté agregada
  plugins: [react()],
  build: {
    outDir: 'dist',  // Esta línea especifica la carpeta de salida para el build
  },
})

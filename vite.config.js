import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Mypantalla/',  // <--- Ajusta esto al nombre de tu repo en GitHub
  plugins: [react()]
})
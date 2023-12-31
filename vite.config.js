import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Busqueda-Maxima-Pendiente/',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets')
    }
  }
})

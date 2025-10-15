import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      '.loca.lt',
      '.ngrok.io',
      '.ngrok-free.dev',
      '.trycloudflare.com'
    ]
  }
})

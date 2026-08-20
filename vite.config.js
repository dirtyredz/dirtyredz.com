import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on all interfaces so tunnels/other devices can reach it
    // Allow Cloudflare quick-tunnel hostnames (and any tunnel host) to hit the dev server
    allowedHosts: ['.trycloudflare.com', '.cfargotunnel.com', 'localhost'],
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3030, // Change to a different port if 5173 is not available
    host: '127.0.0.1', // Use IPv4 instead of IPv6
  },
})

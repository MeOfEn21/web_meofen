import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': '/src/assets/*',
    },
  },
  build: {
      rollupOptions: {
        input: {
          main: "./index.html",
        },
      },
    },
    server: {
      historyApiFallback: true,
    },
    compilerOptions: {
        baseUrl: "src"
    }
    
})

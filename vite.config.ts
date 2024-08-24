import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@src':           path.resolve(__dirname, 'src'),
      '@store':      path.resolve(__dirname, 'src/store'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@model':      path.resolve(__dirname, 'src/model'),
      '@service':    path.resolve(__dirname, 'src/service'),
      '@hooks':      path.resolve(__dirname, 'src/hooks'),
    }
  }
})

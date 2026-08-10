import { install } from '@remix-run/dev'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [install()],
})

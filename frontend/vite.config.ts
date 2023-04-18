import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// transform mixed ES modules (i.e., modules that include both ESM and CommonJS syntax) to be compatible with the build process
export default defineConfig({
  plugins: [react()],

  build: {
    commonjsOptions: {
     transformMixedEsModules: true,
    },
   }
})

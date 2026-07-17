import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    modulePreload: {
      polyfill: false,
      resolveDependencies: (_filename, deps) =>
        deps.filter(
          (dep) =>
            !dep.includes('vendor-lenis') &&
            !dep.includes('vendor-motion') &&
            !dep.includes('BelowFold'),
        ),
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (
            id.includes('react-dom') ||
            id.includes('react/jsx-runtime') ||
            id.includes('react/jsx-dev-runtime') ||
            /\/react\//.test(id)
          ) {
            return 'vendor-react'
          }
          if (id.includes('framer-motion') || id.includes('motion-dom')) {
            return 'vendor-motion'
          }
          if (id.includes('lucide-react')) return 'vendor-icons'
          if (id.includes('@studio-freight/lenis')) return 'vendor-lenis'
          if (id.includes('react-helmet')) return 'vendor-seo'
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
  },
})

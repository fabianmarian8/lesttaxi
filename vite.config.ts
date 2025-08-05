import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Optimized code splitting for mobile performance
        manualChunks: (id) => {
          // Core React chunks
          if (id.includes('react') || id.includes('react-dom')) return 'react-core';
          if (id.includes('react-router')) return 'router';
          
          // UI library chunks
          if (id.includes('@radix-ui') || id.includes('lucide-react')) return 'ui-lib';
          if (id.includes('react-hook-form') || id.includes('zod')) return 'forms';
          
          // Feature chunks (lazy loaded)
          if (id.includes('ExchangeRateWidget') || id.includes('FloatingWhatsApp') || id.includes('FrankoPizzaBanner')) return 'features';
          
          // Utility chunks
          if (id.includes('clsx') || id.includes('tailwind-merge') || id.includes('class-variance-authority')) return 'utils';
          
          // Node modules vendor chunk
          if (id.includes('node_modules')) return 'vendor';
        },
        // Add hash to filenames for cache busting
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          // Separate CSS and image chunks for better caching
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name].[hash][extname]';
          }
          // Optimize image asset handling
          if (assetInfo.name?.match(/\.(avif|webp|jpg|jpeg|png|svg)$/)) {
            return 'assets/images/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        }
      }
    },
    // Enable compression and optimization
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false,
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
    // Optimize assets - reduce inline limit for better caching
    assetsInlineLimit: 2048,
    // Preload optimizations
    modulePreload: {
      polyfill: false
    },
    // Image optimization settings
    target: 'esnext',
    manifest: true
  },
  base: './',
}));

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
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false
      },
      output: {
        // Better code splitting for performance
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          'ui-core': ['@radix-ui/react-dialog', '@radix-ui/react-toast'],
          'ui-icons': ['lucide-react'],
          'ui-forms': ['@radix-ui/react-collapsible', '@radix-ui/react-accordion'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          analytics: ['@/hooks/useAnalytics'],
          widgets: ['@/components/HolidayStatusWidget', '@/components/ExchangeRateWidget'],
          charts: ['recharts'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
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
  base: '/',
}));

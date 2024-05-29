export default defineConfig({
  plugins: [react()],
  server: {
      host: '0.0.0.0',
      port: parseInt(process.env.VITE_PORT, 10) || 5173,
      proxy: {
          '/auth': {
              target: 'http://localhost:4008',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/auth/, '/auth'),
          },
          '/api': {
              target: 'http://localhost:4008',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '/api'),
          },
      },
  },
  build: {
      outDir: 'dist',
  },
});

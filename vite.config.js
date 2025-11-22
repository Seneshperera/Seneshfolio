import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // CRITICAL FIX: Set the base path to your repository name
  base: "/",

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    loader: 'jsx'
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.jsx"),
    },
  },
}));

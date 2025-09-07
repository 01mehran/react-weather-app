import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// tailwind;
import tailwindcss from "@tailwindcss/vite";
// alias;
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@fonts": path.resolve(__dirname, "./src//assets/fonts"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
    },
  },
  server: {
    port: 3004,
  },
});

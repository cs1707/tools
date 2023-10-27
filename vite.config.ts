import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   injectRegister: "auto",
    //   workbox: {
    //     maximumFileSizeToCacheInBytes: 5000000,
    //   },
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react"],
          "react-dom": ["react-dom"],
          prettier: ["prettier"],
          "monaco-editor": ["monaco-editor"],
          quicktype: ["quicktype-core"],
        },
      },
    },
  },
});

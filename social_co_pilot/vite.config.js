import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.langflow.astra.datastax.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/astra": {
        target:
          "https://aee005aa-3612-4488-a85e-9c72a09569bf-us-east-2.apps.astra.datastax.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/astra/, ""),
      },
    },
  },
});

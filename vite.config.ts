import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": "/src/components",
      "@/hooks": "/src/scripts/hooks",
      "@/backend": "/src/scripts/backend",
      "@/utils": "/src/scripts/utils",
      "@/types": "/src/types",
      "@/ui": "/src/components/ui",
      "@/assets": "/src/assets",
      "@/pages": "/src/pages",
      "@/store": "/src/store",
    },
  },
});

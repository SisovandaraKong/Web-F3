import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      // Whether to polyfill specific nodejs globals and modules
      // defaults to true
      globals: {
        process: true,
        global: true,
        Buffer: true,
      },
      // Whether to polyfill nodejs: protocol imports
      // defaults to 'empty'
      protocolImports: true,
    }),
  ],
});

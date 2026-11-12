import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import books from "./vite-books-plugin.js";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Loopback only: the dev server exposes source files and the /__books
    // write endpoint, so it must not be reachable from the network.
    host: "localhost",
    port: 8080,
  },
  plugins: [react(), books()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});

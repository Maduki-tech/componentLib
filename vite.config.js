//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "my-library",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});

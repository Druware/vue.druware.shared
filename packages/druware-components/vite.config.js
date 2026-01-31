import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  build: {
    outDir: "es",
    minify: false,
    rollupOptions: {
      external: ["vue"],
      //input: ["index.ts"],
      output: {
        globals: {
          vue: "Vue",
        },
        dir: "dist",
      },
    },
    lib: {
      entry: "./index.js",
      name: "druware-components",
      fileName: "druware-components",
      formats: ["es", "umd", "cjs"],
    },
  },
  plugins: [vue()],
});
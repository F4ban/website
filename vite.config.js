import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
});

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";
import { createVitePlugins } from "./src/vite/index";
import { configThemePlugin } from "./src/vite/plugin/theme";

const pathResolve = (dir: string): any => {
  return resolve(__dirname, ".", dir);
};

const alias: Record<string, string> = {
  "/@/": pathResolve("src") + "/",
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias,
  },
  css: configThemePlugin(),
});

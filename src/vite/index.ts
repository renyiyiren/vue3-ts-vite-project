import vue from "@vitejs/plugin-vue";

export function createVitePlugins() {
  const vitePlugins: any = [
    // have to
    vue(),
  ];

  return vitePlugins;
}

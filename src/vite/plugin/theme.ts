export function configThemePlugin(): any {
  const plugin = {
    preprocessorOptions: {
      less: {
        additionalData: '@import "/@/design/index.less";',
        javascriptEnabled: true,
      },
    },
  };
  return plugin;
}

// css: {
//   preprocessorOptions: {
//     less: {
//       additionalData: '@import "/@/design/index.less";',
//       modifyVars: '@import "/@/design/var/global.less";',
//       javascriptEnabled: true,
//     },
//   },
// },

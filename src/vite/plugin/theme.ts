export function configThemePlugin(): any {
  const plugin = {
    preprocessorOptions: {
      less: {
        // 引入less变量
        additionalData: '@import "/@/design/var/index.less";',
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

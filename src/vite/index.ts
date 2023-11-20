import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite"; // 按需组件自动导入
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export function createVitePlugins() {
  const vitePlugins: any = [
    vue(),
    // vueJsx(),
    Components({
      dts: true, //生成components.d.ts 全局定义文件
      resolvers: [
        AntDesignVueResolver({
          //对使用到的全局ant design vue组件进行类型导入
          importStyle: false, // 不动态引入css,这个不强求
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/], //包含的文件类型
    }),
  ];

  return vitePlugins;
}

/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;

  // ComponentCustomProperties设计用于声明全局属性类型
  import { ComponentCustomProperties } from "@vue/runtime-core";
  declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      useThemeConfigStore: any; // 这里填类型
    }
  }
  export default component;
}

// declare module "*.svg" {
//   const src: string;
//   export default src;
// }

import { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./routes";

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.children || []);
  });
getRouteNames(basicRoutes);

const router = createRouter({
  // hash 模式
  history: createWebHashHistory(),
  routes: basicRoutes, // `routes: routes` 的缩写
});

export function setUpdateRouter(app: App<Element>) {
  return app.use(router);
}

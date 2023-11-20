import { AppRouteRecordRaw } from "../types";

const routeModuleList: any[] = [];
// 引入路由数据
const modules: any = import.meta.glob("./modules/**/*.ts", {
  eager: true,
});

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoute = [...routeModuleList];

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/sys/login/Login.vue"),
  meta: {
    title: "登录页",
  },
};

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  // 根目录设置路由重定向
  redirect: "/login",
  meta: {
    title: "Root",
  },
};

export const HomeRoute: AppRouteRecordRaw = {
  path: "/home",
  name: "Home",
  component: () => import("/@/views/sys/home/Home.vue"),
  meta: {
    title: "主页",
  },
};

export const basicRoutes = [LoginRoute, HomeRoute, RootRoute];

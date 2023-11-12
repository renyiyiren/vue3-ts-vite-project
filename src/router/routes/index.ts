export const LoginRoute: any = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/sys/login/Login.vue"),
};

export const RootRoute: any = {
  path: "/",
  name: "Root",
  // 根目录设置路由重定向
  redirect: "/login",
};

export const HomeRoute: any = {
  path: "/home",
  name: "Home",
  component: () => import("/@/views/sys/home/Home.vue"),
};

export const basicRoutes = [LoginRoute, HomeRoute, RootRoute];

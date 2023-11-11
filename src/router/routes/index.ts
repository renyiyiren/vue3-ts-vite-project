export const LoginRoute: any = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/sys/login/Login.vue"),
};

export const HomeRoute: any = {
  path: "/",
  name: "Home",
  component: () => import("/@/views/sys/home/Home.vue"),
};

export const basicRoutes = [LoginRoute, HomeRoute];

import { AppRouteModule } from "../../types";

// test
const destions: AppRouteModule = {
  path: "/destions",
  name: "Destions",
  component: () => import("/@/layouts/default/index.vue"),
  meta: {
    title: "简历布局",
  },
  children: [
    {
      path: "info",
      name: "DestionsInfo",
      component: () => import("/@/views/sys/destions/Destions.vue"),
      meta: {
        title: "简历页面",
      },
    },
  ],
};

export default destions;

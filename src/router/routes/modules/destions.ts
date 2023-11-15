// test
const destions: any = {
  path: "/destions",
  name: "Destions",
  component: () => import("/@/layouts/default/index.vue"),
  children: [
    {
      path: "info",
      name: "DestionsInfo",
      component: () => import("/@/views/sys/destions/Destions.vue"),
    },
  ],
};

export default destions;

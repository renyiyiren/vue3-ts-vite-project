import { defineStore } from "pinia";
import { asyncRoute } from "/@/router/routes";
import { router } from "/@/router";

export const usePermissionStore = defineStore({
  id: "app-permission",
  state: () => ({
    permCodeList: [],
    frontMenuList: [],
  }),
  getters: {},
  actions: {
    async buildRoutesAction() {
      let routes: any = [];
      //   const roleList = [];
      asyncRoute.forEach((route) => {
        router.addRoute(route);
      });
      return routes;
    },
  },
});

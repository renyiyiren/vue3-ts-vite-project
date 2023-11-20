import { defineStore } from "pinia";
import { router } from "/@/router";

export const useUserStore = defineStore({
  id: "app-user",
  state: (): any => ({
    userInfo: null,
    token: undefined,
    // roleList: [],
  }),
  getters: {
    getUserInfo() {},
  },
  actions: {
    async afterLoginAction() {
      // if (this.getToken) return null;
      // 判断用户权限
      //   const userInfo = await this.getUserInfo();
    },
    async routePush() {
      router.push("/destions/info");
    },
  },
});

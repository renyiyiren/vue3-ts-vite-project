import { defineStore } from "pinia";
import { store } from "/@/store";

export const useThemeConfig = defineStore({
  id: "app-theme-config",
  state: (): any => ({
    themeInfo: {
      token: {
        colorPrimary: "#00b96b",
        primaryColor: "#52c41a", // 全局主色
        errorColor: "#f05b5b", // 错误色
      },
    },
  }),
  getters: {
    getThemeConfig() {
      return this.themeInfo;
    },
  },
  actions: {
    changeThemeConfig(color) {
      this.toke.colorPrimary = color;
    },
  },
});

export function useThemeConfigWithOut() {
  return useThemeConfig(store);
}

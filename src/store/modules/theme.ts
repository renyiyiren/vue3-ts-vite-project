import { defineStore } from "pinia";
import { store } from "/@/store";
import { theme } from "ant-design-vue";

type ThemeName = "light" | "dark";
export const useThemeConfig = defineStore({
  id: "app-theme-config",
  state: (): any => {
    return {
      // 主题名称
      themeConfig: {
        algorithm: theme.defaultAlgorithm,
      },
      themeName: "light",
    };
  },
  getters: {
    getThemeConfig() {
      document.documentElement.setAttribute("data-theme", this.themeName);
      return this.themeConfig;
    },
  },
  actions: {
    changeThemeConfig(checked: boolean): void {
      document.documentElement.setAttribute(
        "data-theme",
        checked ? "light" : "dark"
      );
      this.themeConfig.algorithm = checked
        ? theme.defaultAlgorithm
        : theme.darkAlgorithm;
    },
  },
});

export function useThemeConfigWithOut() {
  return useThemeConfig(store);
}

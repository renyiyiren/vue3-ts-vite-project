<template>
  <div class="basic-menu">
    <a-flex horizontal flex="1" justify="space-between">
      <div class="basic-menu-left">
        <a-flex horizontal>
          <div class="basic-menu-left__logo">
            <img :src="logBasic" alt="logo" />
          </div>
          <div class="basic-menu-left__title">
            <div>Base</div>
          </div>
        </a-flex>
      </div>
      <div class="basic-menu-right">
        <a-flex horizontal>
          <div class="basic-menu-right__switch mg-lr-15">
            <a-switch @click="switchFn" v-model:checked="themeSwitchState">
              <template #checkedChildren>
                <img :src="sun" />
              </template>
              <template #unCheckedChildren>
                <img :src="moon" />
              </template>
            </a-switch>
          </div>
          <div class="basic-lang mg-lr-15">
            <a-button>中文</a-button>
          </div>
        </a-flex>
      </div>
    </a-flex>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import moon from "/@/assets/svg/moon.svg";
import sun from "/@/assets/svg/sun.svg";
import logBasic from "/@/assets/svg/logo-basic.svg";
import { useThemeConfig } from "/@/store/modules/theme";
const useThemeConfigStore = useThemeConfig();

const themeSwitchState = ref(true);
const switchFn = (checked: boolean): void => {
  useThemeConfigStore.changeThemeConfig(checked);
};
</script>
<style scoped lang="less">
@basicmenu: ~"@{namespace}-menu";
@switch: ~"@{namespace}-menu-right__switch";
@menuleft: ~"@{namespace}-menu-left";
@logo: ~"@{namespace}-menu-left__logo";
@title: ~"@{namespace}-menu-left__title";

.@{basicmenu} {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background: transparent;
  line-height: 60px;
  z-index: 3;
}

.@{menuleft}{
  margin-top: 10px;
  .@{logo} {
  width: 70px;
  height: 60px;
  margin-left: 80px;
  text-align: center;
  line-height: 60px;
  img {
    width: 100%;
    height: 100%;
  }

}
.@{title}{
    font-size: 24px;
    font-weight: 700;
    color:white ;
  }

}
</style>

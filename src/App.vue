<script setup lang="ts"></script>

<template>
  <a-config-provider :theme="useThemeConfigStore.getThemeConfig">
    <router-view></router-view>
  </a-config-provider>
</template>
<script lang="ts" setup>
import "/@/design/index.less";
import { useThemeConfig } from "/@/store/modules/theme";
const useThemeConfigStore = useThemeConfig();
</script>

<style lang="less" scoped></style>

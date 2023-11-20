<script setup lang="ts"></script>

<template>
  <a-config-provider :theme="themeUser">
    <button @click="changFn">change</button>
    <router-view></router-view>
  </a-config-provider>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
let themeUser: data = reactive({
  token: {
    colorPrimary: "#00b96b",
  },
});

const changFn = () => {
  themeUser.token.colorPrimary = "red";
};
</script>

<style lang="less" scoped></style>

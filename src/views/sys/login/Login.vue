<template>
  <div class="basic-app-layout">
    <div class="left"></div>
    <div class="right">
      <div class="login-form">
        <div class="logo"></div>
        <div class="user-form">
          <p>用户登录</p>
          <a-row class="mg-tb-15">
            <a-col :span="18" :push="3">
              <a-input
                class="col col-8"
                addonBefore="账号："
                placeholder="请输入账号"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="18" :push="3">
              <a-input
                class="col col-8"
                addonBefore="密码："
                placeholder="请输入密码"
              />
            </a-col>
          </a-row>
        </div>
        <a-button type="primary">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
$login-box: "#{$namespace}-app-layout";

.#{$login-box} {
  display: flex;
  width: 100%;
  height: 100vh;

  .left {
    width: 50%;
    height: 100%;
    background-color: #7fd6fc;
  }
  .right {
    position: relative;
    height: 100%;
    width: 50%;
    .login-form {
      position: absolute;
      height: 30%;
      width: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #ddd;
      text-align: center;
      .logo {
        width: 80%;
        height: 40px;
        background-color: #7fc4e2;
        margin: 30px auto 10px;
      }
      .user-form {
        text-align: center;
        margin: 10px;
      }
    }
  }
}
</style>

<template>
  <Menu></Menu>
  <div class="basic-login">
    <div class="basic-login-left">
      <div class="basic-login-left__content">
        <img :src="logBasic" alt="logo" />
      </div>
    </div>
    <div class="basic-login-right">
      <div class="login-form">
        <a-form>
          <div class="user-form">
            <p>用户登录</p>
            <a-row>
              <a-col :span="18" :push="3">
                <a-form-item v-bind="validateInfos.username">
                  <a-input
                    class="col col-8"
                    addonBefore="账号："
                    placeholder="请输入账号"
                    v-model:value="user.username"
                  />
                </a-form-item>
              </a-col>
            </a-row>
            <a-row>
              <a-col :span="18" :push="3">
                <a-form-item v-bind="validateInfos.password">
                  <a-input
                    class="col col-8"
                    addonBefore="密码："
                    placeholder="请输入密码"
                    v-model:value="user.password"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <a-form-item>
            <a-button
              value="large"
              type="primary"
              html-type="submit"
              @click.prevent="onSubmit"
            >
              登录</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Form } from "ant-design-vue";
// import MenuVue from "/@/components/menu.vue";
import logBasic from "/@/assets/svg/logo-basic.svg";

const useForm = Form.useForm;

const user = reactive({
  username: "",
  password: "",
});

const { validate, validateInfos } = useForm(
  user,
  reactive({
    username: [
      {
        required: true,
        message: "请输入用户名！",
      },
    ],
    password: [
      {
        required: true,
        message: "请输入密码！",
      },
    ],
  })
);

const onSubmit = () => {
  validate()
    .then(() => {})
    .catch((err) => {
      console.log("error", err);
    });
};
</script>
<style scoped lang="less">
@login-box: ~"@{namespace}-login";
@left: ~"@{namespace}-login-left";
@leftcontent: ~"@{namespace}-login-left__content";
@right: ~"@{namespace}-login-right";

.@{login-box} {
  display: flex;
  width: 100%;
  height: 100vh;

  .@{left} {
    width: 50%;
    height: 100%;
    background-color: var(--primaryColor);
    opacity: 0.8;
  }

  .@{leftcontent}{
    position: relative;
    height: 100%;
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 500px;
      transform:  translate(-50%, -50%);
    }
  }
  .@{right} {
    position: relative;
    height: 100%;
    width: 50%;
    .login-form {
      position: absolute;
      height: 30%;
      width: 55%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid #ddd;
      border-radius: 5%;
      text-align: center;

      .user-form {
        text-align: center;
        margin: 50px;
      }
    }
  }
}
</style>

import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { setUpdateRouter } from "./router";
import { setupStore } from "./store";
// import "ant-design-vue/dist/reset.css"; // 静态自定义样式

const app = createApp(App);

setUpdateRouter(app);
setupStore(app);
app.use(Antd);

app.mount("#app");

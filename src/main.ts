import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { setUpdateRouter } from "./router";
import "ant-design-vue/dist/reset.css";
const app = createApp(App);
const pinia = createPinia();

setUpdateRouter(app);
app.use(Antd);
app.use(pinia);
app.mount("#app");

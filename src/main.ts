import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { setUpdateRouter } from "./router";
import "ant-design-vue/dist/reset.css";
import { setupStore } from "./store";
const app = createApp(App);

setUpdateRouter(app);
setupStore(app);
app.use(Antd);

app.mount("#app");

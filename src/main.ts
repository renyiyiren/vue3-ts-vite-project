import "/@/design/index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { setUpdateRouter } from "./router";

const app = createApp(App);
const pinia = createPinia();

setUpdateRouter(app);
app.use(pinia);
app.mount("#app");

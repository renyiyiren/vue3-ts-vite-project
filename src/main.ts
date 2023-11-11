import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { setUpdateRouter } from "./router";

const app = createApp(App);
const pinia = createPinia();

setUpdateRouter(app);
app.use(pinia);
app.mount("#app");

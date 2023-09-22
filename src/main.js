import { createApp, VueElement } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import $bus from "./utils/Events";
import router from "./routes";

const app = createApp(App);

app.use(router);

app.config.globalProperties.$bus = $bus;

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";

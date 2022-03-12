import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { saveStore } from "./store/index";
import "normalize.css";
import "./assets/css/index.less";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(store);
saveStore();
app.use(router);
app.use(ElementPlus);
app.mount("#app");

import { createApp } from "vue";
import "normalize.css"; // normalize.css 样式格式化
import "element-plus/dist/index.css";

import App from "./App.vue";
import "@/assets/style/index.scss";
import router from "@/router/index.ts";
import pinia from "@/store";
import initRouter from "@/utils/permission.ts";

const app = createApp(App);

//解决动态路由刷新后页面丢失的问题
const boot = async () => {
  app.use(pinia);
  await initRouter();
  app.use(router).mount("#app");
};

boot().then(() => {
  console.log("boot success");
});

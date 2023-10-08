import { createApp } from "vue";
import "normalize.css"; // normalize.css 样式格式化
import "element-plus/dist/index.css";

import App from "./App.vue";
import "@/assets/style/index.scss";
import "@/assets/style/style.css";
import router from "@/router/index.ts";

createApp(App).use(router).mount("#app");

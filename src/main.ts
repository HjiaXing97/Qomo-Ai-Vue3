import { createApp } from "vue";
import "normalize.css"; // normalize.css 样式格式化
import "element-plus/dist/index.css";

import App from "./App.vue";
import "@/assets/style/index.scss";
import router from "@/router/index.ts";
import pinia from "@/store";

createApp(App).use(pinia).use(router).mount("#app");

import { createRouter, createWebHashHistory } from "vue-router";

import routes from "@/router/route_config.ts";

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

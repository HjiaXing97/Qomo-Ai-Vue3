import { createRouter, createWebHashHistory } from "vue-router";

import routes from "@/router/route_config.ts";

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  console.log(to, from);
  console.log();
  next();
});

export default router;

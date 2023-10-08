import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () => import("@/page/main/main.vue"),
    name: "main"
  },
  {
    path: "/login",
    component: () => import("@/page/login/login.vue"),
    name: "login"
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/page/NotFound/NotFound.vue")
  }
];

export default routes;

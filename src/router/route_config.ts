import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () => import("@/page/main/main.vue"),
    name: "main",
    children: []
  },
  {
    path: "/login",
    component: () => import("@/page/login/login.vue"),
    name: "login"
  },
  {
    path: "/custom/lowCode",
    component: () => import("@/views/lowCode/index.vue"),
    name: "lowCode"
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/page/NotFound/NotFound.vue")
  }
];

export default routes;

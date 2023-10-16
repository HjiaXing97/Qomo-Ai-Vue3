import router from "@/router";

/**
 * @description: 动态添加路由
 * @param routes
 */
function addRoutes(routes: any[]) {
  routes.forEach((v: any) => {
    if (Array.isArray(v.children) && v.children.length > 0) {
      v.children.forEach((v2: any) => {
        // 添加子级路由
        router.addRoute("main", {
          path: v2.url,
          component: () => import("@/views/online/online.vue")
        });
      });
    } else {
      router.addRoute("main", {
        path: v.url,
        component: () => import("@/views/online/online.vue")
      });
    }
  });
}

export default addRoutes;

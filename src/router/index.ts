import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LocalCache from "@/utils/cache";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    component: () =>
      import(/* webpackChunkName: "main" */ "@/views/main/main.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/login.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/not-found/not-found.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = LocalCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }
});

export default router;

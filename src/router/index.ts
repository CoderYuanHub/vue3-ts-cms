import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LocalCache from "@/utils/cache";
import { firstMenu } from "@/utils/map-menus";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
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
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = LocalCache.getCache("token");
    if (!token) {
      return "/login";
    }
  }

  if (to.path === "/main") {
    return firstMenu.url;
  }
});

// router.onError((error) => {
//   console.log(error);
// });

export default router;

import { RouteRecordRaw } from "vue-router";
export function mapMenusToRoutes(userMenus: Array<any>): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  // 1.加载所有默认的routes
  const allRoutes: RouteRecordRaw[] = [];
  // 查找目录下所有的文件
  const routeFile = require.context("../router/main", true, /\.ts$/);
  routeFile.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]).default;
    allRoutes.push(route);
  });
  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: Array<any>) => {
    menus.forEach((menu) => {
      if (menu.type !== 2) {
        _recurseGetRoute(menu.children);
      } else {
        const route = allRoutes.find((item) => item.path === menu.url);
        if (route) {
          routes.push(route);
        }
      }
    });
  };
  _recurseGetRoute(userMenus);
  return routes;
}

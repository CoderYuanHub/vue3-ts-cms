import { RouteRecordRaw } from "vue-router";
import { IBreadcrumb } from "@/base-ui/breadcrumb/types";
let firstMenu: any = null;
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
        if (!firstMenu) {
          firstMenu = menu;
        }
      }
    });
  };
  _recurseGetRoute(userMenus);
  return routes;
}

// 根据当前路由获取路由信息
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadCrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath);
      if (findMenu) {
        breadCrumbs?.push({ name: menu.name, url: menu.url });
        breadCrumbs?.push({ name: findMenu.name, url: findMenu.url });
        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

// 根据当前路由信息获取面包屑信息
export function pathMapToBreadcrumb(
  userMenus: any[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapToMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

export { firstMenu };

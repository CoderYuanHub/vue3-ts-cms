// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const menu = () => import("@/views/main/system/menu/menu.vue");
export default {
  path: "/main/system/menu",
  name: "menu",
  component: menu,
  children: []
};

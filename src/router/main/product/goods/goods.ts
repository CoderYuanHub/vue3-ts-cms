// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const goods = () => import("@/views/main/product/goods/goods.vue");
export default {
  path: "/main/product/goods",
  name: "goods",
  component: goods,
  children: []
};

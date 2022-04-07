// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const list = () => import("@/views/main/story/list/list.vue");
export default {
  path: "/main/story/list",
  name: "list",
  component: list,
  children: []
};

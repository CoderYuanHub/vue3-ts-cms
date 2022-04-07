// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const role = () => import("@/views/main/system/role/role.vue");
export default {
  path: "/main/system/role",
  name: "role",
  component: role,
  children: []
};

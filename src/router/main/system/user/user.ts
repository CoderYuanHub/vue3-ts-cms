// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const user = () => import("@/views/main/system/user/user.vue");
export default {
  path: "/main/system/user",
  name: "user",
  component: user,
  children: []
};

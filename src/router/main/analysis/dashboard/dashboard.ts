// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const dashboard = () => import("@/views/main/analysis/dashboard/dashboard.vue");
export default {
  path: "/main/analysis/dashboard",
  name: "dashboard",
  component: dashboard,
  children: []
};

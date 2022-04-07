// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const overview = () => import("@/views/main/analysis/overview/overview.vue");
export default {
  path: "/main/analysis/overview",
  name: "overview",
  component: overview,
  children: []
};

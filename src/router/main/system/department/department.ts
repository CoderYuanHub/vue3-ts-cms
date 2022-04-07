// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const department = () =>
  import("@/views/main/system/department/department.vue");
export default {
  path: "/main/system/department",
  name: "department",
  component: department,
  children: []
};

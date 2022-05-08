export const contentTableConfig = {
  propsList: [
    // { prop: "id", label: "id" },
    { prop: "name", label: "菜单名称" },
    { prop: "url", label: "菜单路由" },
    { prop: "icon", label: "菜单图标" },
    { prop: "permission", label: "按钮权限" },
    { prop: "createAt", label: "创建时间", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", slotName: "updateAt" }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  childrenProps: {
    rowKey: "id",
    treeProps: {
      children: "children"
    }
  },
  showFooter: false
};

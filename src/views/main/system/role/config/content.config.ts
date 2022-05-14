export const contentTableConfig = {
  propsList: [
    { prop: "name", label: "名称" },
    { prop: "intro", label: "角色" },
    { prop: "createAt", label: "创建时间", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", slotName: "updateAt" },
    { prop: "action", label: "操作", slotName: "action" }
  ],
  showIndexColumn: true,
  showSelectColumn: true
};

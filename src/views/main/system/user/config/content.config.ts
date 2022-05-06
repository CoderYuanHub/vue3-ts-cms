export const contentTableConfig = {
  propsList: [
    { prop: "id", label: "id" },
    { prop: "name", label: "用户名" },
    { prop: "realname", label: "真实姓名" },
    { prop: "cellphone", label: "电话号码" },
    { prop: "createAt", label: "创建时间", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", slotName: "updateAt" },
    { prop: "enable", label: "状态", slotName: "enable" },
    { prop: "action", label: "操作", slotName: "action" }
  ],
  showIndexColumn: true,
  showSelectColumn: true
};

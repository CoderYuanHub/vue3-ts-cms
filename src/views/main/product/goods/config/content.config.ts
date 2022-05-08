export const contentTableConfig = {
  propsList: [
    { prop: "name", label: "商品名称" },
    { prop: "desc", label: "商品描述" },
    { prop: "oldPrice", label: "原价格" },
    { prop: "newPrice", label: "新价格" },
    { prop: "imgUrl", label: "商品照片", slotName: "img" },
    { prop: "address", label: "地址" },
    { prop: "createAt", label: "创建时间", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", slotName: "updateAt" },
    { prop: "status", label: "状态", slotName: "status" }
  ],
  showIndexColumn: true,
  showSelectColumn: true
};

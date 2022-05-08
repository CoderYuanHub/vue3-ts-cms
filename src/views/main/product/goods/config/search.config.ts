import { IFormItem, IForm } from "@/base-ui/form";

const formItems: IFormItem[] = [
  {
    filed: "name",
    type: "input",
    label: "商品名称",
    placeholder: "请输入商品名称"
  },
  {
    filed: "address",
    type: "input",
    label: "地址",
    placeholder: "请输入地址"
  }
];

const labelWidth = "120px";
const formConfig: IForm = {
  labelWidth,
  formItems
};

export { formConfig };

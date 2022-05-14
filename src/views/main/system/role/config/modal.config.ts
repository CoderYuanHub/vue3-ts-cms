import { IForm } from "@/base-ui/form";

export const modalConfig: IForm = {
  formItems: [
    {
      filed: "name",
      type: "input",
      label: "名称",
      placeholder: "请输入用户名"
    },
    {
      filed: "intro",
      type: "input",
      label: "角色",
      placeholder: "请输入角色"
    }
  ],
  colLayout: {
    sm: 24
  }
};

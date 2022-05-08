import { IFormItem, IForm } from "@/base-ui/form";

const formItems: IFormItem[] = [
  {
    filed: "id",
    type: "input",
    label: "id",
    placeholder: "请输入id"
  },
  {
    filed: "name",
    type: "input",
    label: "用户名",
    placeholder: "请输入用户名"
  },
  {
    filed: "realname",
    type: "input",
    label: "真实姓名",
    placeholder: "请输入真实姓名"
  },
  {
    filed: "cellphone",
    type: "input",
    label: "电话号码",
    placeholder: "请输入电话号码"
  },
  {
    filed: "enable",
    type: "select",
    label: "状态",
    placeholder: "请选择状态",
    options: [
      {
        label: "启动",
        value: "1"
      },
      {
        label: "禁止",
        value: "0"
      }
    ]
  }
  // {
  //   filed: "createdtime",
  //   type: "datepicker",
  //   label: "创建时间",
  //   placeholder: "请选择创建时间范围",
  //   otherOptions: {
  //     startPlaceholder: "开始时间",
  //     endPlaceholder: "结束时间",
  //     type: "daterange",
  //     valueFormat: "yyyy-MM-dd HH:mm:ss",
  //     defaultValue: ["2019-01-01 00:00:00", "2019-12-31 23:59:59"]
  //   }
  // }
];

const labelWidth = "120px";
const formConfig: IForm = {
  labelWidth,
  formItems
};

export { formConfig };

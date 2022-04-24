import { IFormItem, IForm } from "@/base-ui/form";

const formItems: IFormItem[] = [
  {
    type: "input",
    label: "用户名",
    placeholder: "请输入用户名"
  },
  {
    type: "input",
    label: "密码",
    placeholder: "请输入密码"
  },
  {
    type: "select",
    label: "喜欢的运动",
    placeholder: "请选择喜欢的运动",
    options: [
      {
        label: "篮球",
        value: "basketball"
      },
      {
        label: "足球",
        value: "football"
      },
      {
        label: "羽毛球",
        value: "badminton"
      }
    ]
  },
  {
    type: "datepicker",
    label: "创建时间",
    placeholder: "请选择创建时间范围",
    otherOptions: {
      startPlaceholder: "开始时间",
      endPlaceholder: "结束时间",
      type: "daterange",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      defaultValue: ["2019-01-01 00:00:00", "2019-12-31 23:59:59"]
    }
  }
];

const labelWidth = "120px";
const formConfig: IForm = {
  labelWidth,
  formItems
};

export { formConfig };

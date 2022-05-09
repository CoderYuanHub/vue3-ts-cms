type IFormType = "input" | "password" | "select" | "datepicker";
export interface IFormItem {
  filed: string;
  label: string;
  type: IFormType;
  rules?: any[];
  placeholder?: any;
  // 针对select类型的配置
  options?: any[];
  otherOptions?: any;
  isHidden?: boolean;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
}

export interface IFormItem {
  filed: string;
  label: string;
  type: string;
  rules?: any[];
  placeholder?: any;
  // 针对select类型的配置
  options?: any[];
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string;
  itemStyle?: any;
  colLayout?: any;
}

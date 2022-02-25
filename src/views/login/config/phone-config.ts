// 编写好规则
export const rules = {
  phonenumber: [
    {
      required: true,
      message: "手机号码必填~",
      trigger: "blur"
    },
    {
      pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
      message: "手机号码格式错误~",
      trigger: "blur"
    }
  ],
  verification: [
    {
      required: true,
      message: "验证码必填~",
      trigger: "blur"
    }
  ]
};

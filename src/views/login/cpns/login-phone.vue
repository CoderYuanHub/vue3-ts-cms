<template>
  <div class="login-phone">
    <el-form ref="loginPhoneRef" :rules="rules" :model="form">
      <el-form-item label="手机号" prop="phonenumber">
        <el-input v-model="form.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verification">
        <div class="get-code">
          <el-input v-model="form.verification" type="password"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/phone-config";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;

export default defineComponent({
  setup() {
    const form = reactive({
      phonenumber: "",
      verification: ""
    });
    const loginPhoneRef = ref<FormInstance>();
    const onSubmit = () => {
      loginPhoneRef.value?.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
          return false;
        }
      });
      console.log("登陆");
    };
    return {
      form,
      rules,
      loginPhoneRef,
      onSubmit
    };
  }
});
</script>

<style lang="less" scoped>
.login-phone {
  width: 100%;
  .get-code {
    width: 100%;
    display: flex;
    flex: 1;
  }
}
</style>

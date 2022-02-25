<template>
  <div class="login-account">
    <el-form ref="accountFormRef" :rules="rules" :model="form">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;
export default defineComponent({
  setup() {
    const form = reactive({
      username: "",
      password: ""
    });
    const accountFormRef = ref<FormInstance>();
    const onSubmit = () => {
      accountFormRef.value?.validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!");
          return false;
        }
      });
    };
    return {
      form,
      rules,
      accountFormRef,
      onSubmit
    };
  }
});
</script>

<style lang="less" scoped></style>

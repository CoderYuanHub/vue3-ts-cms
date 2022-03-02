<template>
  <div class="login-account">
    <el-form ref="accountFormRef" :rules="rules" :model="form">
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/account-config";
import localCase from "@/utils/cache";
import type { ElForm } from "element-plus";
type FormInstance = InstanceType<typeof ElForm>;

export default defineComponent({
  setup() {
    // 创建动态属性
    const form = reactive({
      name: localCase.getCache("name") ?? "coderwhy",
      password: localCase.getCache("password") ?? "123456"
    });
    // 创建ref实例
    const accountFormRef = ref<FormInstance>();
    // 创建store
    const store = useStore();
    // 登陆校验
    const onSubmit = (isKeepPassword: boolean) => {
      accountFormRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCase.setCache("name", form.name);
            localCase.setCache("password", form.password);
          } else {
            localCase.deleteCache("name");
            localCase.deleteCache("password");
          }
          store.dispatch("login/accountLoginAction", { ...form });
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

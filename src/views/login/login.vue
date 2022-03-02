<template>
  <div class="login">
    <div class="box">
      <h2>后台管理系统</h2>
      <el-tabs
        v-model="activeName"
        stretch
        class="tabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="账号登录" name="account">
          <div class="login-in">
            <login-account ref="accountRef"></login-account>
          </div>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <login-phone ref="phoneRef"></login-phone>
        </el-tab-pane>
      </el-tabs>
      <div class="login-in__footer">
        <el-checkbox v-model="isKeepPassword" label="记住密码"></el-checkbox>
        <el-link :underline="false" type="info">忘记密码</el-link>
      </div>
      <div class="login-in__btn">
        <el-button
          type="primary"
          style="width: 100%; margin-top: 20px"
          @click="onSubmit()"
          >立即登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./cpns/login-account.vue";
import LoginPhone from "./cpns/login-phone.vue";

export default defineComponent({
  name: "login",
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeName = ref<string>("account");
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const isKeepPassword = ref<boolean>(false);
    const handleClick = (tab: string, event: Event) => {
      console.log("点击事件", tab, event);
    };

    const onSubmit = () => {
      if (activeName.value === "account") {
        accountRef.value?.onSubmit(isKeepPassword.value);
      } else {
        phoneRef.value?.onSubmit();
      }
    };
    return {
      activeName,
      isKeepPassword,
      accountRef,
      phoneRef,
      handleClick,
      onSubmit
    };
  }
});
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background: url("../../assets/img/login-bg.svg");
  display: flex;
  justify-content: center;
  align-items: center;
  .login-in {
    width: 100%;
  }
  .login-in__footer {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
  }
  .login-in__btn {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
  }
  .box {
    width: 400px;
    height: 340px;
    border: 1px solid #ccc;
    border-radius: 10px;
    transform: translateY(-20%);
    box-shadow: 2px 2px 10px 0 #cccc;
    .tabs {
      width: calc(100% - 40px);
      margin: 0 20px;
    }
    .tabs > .el-tabs__content {
      padding: 32px;
      background-color: #f4f5f7;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }
  }
}
</style>

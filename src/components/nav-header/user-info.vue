<template>
  <div class="user-info">
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{ userInfo.name }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="info">个人信息</el-dropdown-item>
          <el-dropdown-item command="serect">密码修改</el-dropdown-item>
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { useStore } from "@/store";
export default defineComponent({
  components: {
    ArrowDown
  },
  setup() {
    const store = useStore();
    const userInfo = computed(() => store.state.login.userInfo);
    const handleCommand = (command: string) => {
      switch (command) {
        case "logout":
          store.commit("login/logout");
          break;
        default:
          break;
      }
    };
    return {
      userInfo,
      handleCommand
    };
  }
});
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>

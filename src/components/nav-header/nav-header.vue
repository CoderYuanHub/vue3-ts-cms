<template>
  <div class="nav-header">
    <el-icon class="fold-menu">
      <component :is="cpn" @click="handleFoldClick"></component>
    </el-icon>
    <div class="content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import UserInfo from "./user-info.vue";

export default defineComponent({
  name: "nav-header",
  components: {
    Expand,
    Fold,
    UserInfo
  },
  emits: ["isCollapse"],
  setup(props, { emit }) {
    // 基本数据
    const isFold = ref<boolean>(false);
    // 计算属性
    const cpn = computed(() => {
      return isFold.value ? "expand" : "fold";
    });
    // 方法
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("isCollapse", isFold.value);
    };

    return {
      isFold,
      cpn,
      handleFoldClick
    };
  }
});
</script>
<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

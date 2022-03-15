<template>
  <div class="menu">
    <!-- <div @click="handleCollapse">折叠</div> -->
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#0c2135"
      class="el-menu-vertical-demo"
      default-active="2"
      :collapse="isCollapse"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu
        v-for="(item, index) in userMenus"
        :key="item.id"
        :index="index + ''"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(itemC, index) in item.children"
          :key="itemC.id + index"
          :index="itemC.id + ''"
          >{{ itemC.name }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { Location } from "@element-plus/icons-vue";
export default defineComponent({
  name: "nav-menu",
  components: {
    Location
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
      userMenus
    };
  }
});
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
}
::v-deep .el-submenu__title {
  background-color: #001529 !important;
}
</style>

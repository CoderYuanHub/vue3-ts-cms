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
      :default-active="defaultValue"
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
          <el-icon>
            <component :is="handleIcon(item.name)"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(itemC, indexC) in item.children"
          @click="handleClick(itemC)"
          :key="itemC.id + indexC"
          :index="itemC.id + ''"
          >{{ itemC.name }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";
import {
  DataAnalysis,
  Tools,
  ShoppingCart,
  ChatDotRound
} from "@element-plus/icons-vue";

import { pathMapToMenu } from "@/utils/map-menus";
export default defineComponent({
  name: "nav-menu",
  components: {
    DataAnalysis,
    Tools,
    ShoppingCart,
    ChatDotRound
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const userMenus = computed(() => store.state.login.userMenus);
    const menu = pathMapToMenu(userMenus.value, route.path);
    const defaultValue = ref(menu.id + "");
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClick = (item: any) => {
      router.push({
        path: item.url ?? "/not-found"
      });
    };
    const handleIcon = (name: string) => {
      switch (name) {
        case "系统总览":
          return "DataAnalysis";
        case "系统管理":
          return "Tools";
        case "商品中心":
          return "ShoppingCart";
        default:
          return "ChatDotRound";
      }
    };
    return {
      defaultValue,
      handleOpen,
      handleClose,
      handleIcon,
      handleClick,
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
:v-deep(.el-submenu__title) {
  background-color: #001529 !important;
}
</style>

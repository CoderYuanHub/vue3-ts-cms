<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '65px' : '200px'">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @is-collapse="handleCollapse"></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import NavHeader from "@/components/nav-header/nav-header.vue";
import NavMenu from "@/components/nav-menu/nav-menu.vue";
export default defineComponent({
  name: "main-in",
  components: {
    NavHeader,
    NavMenu
  },
  setup() {
    let isCollapse = ref<boolean>(false);
    const handleCollapse = (value: boolean) => {
      isCollapse.value = value;
    };
    return {
      isCollapse,
      handleCollapse
    };
  }
});
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;

  /deep/ .el-menu--collapse,
  /deep/ .el-menu-vertical-demo {
    border-width: 0;
  }

  .main-content {
    height: 100%;
    .el-header {
      height: 48px !important;
    }

    .el-main {
      color: #333;
      text-align: center;
      background-color: #f0f2f5;
    }

    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>

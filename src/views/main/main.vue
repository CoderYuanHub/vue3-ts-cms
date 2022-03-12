<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header></nav-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavHeader from "@/components/nav-header/nav-header.vue";
import NavMenu from "@/components/nav-menu/nav-menu.vue";
export default defineComponent({
  name: "main-in",
  components: {
    NavHeader,
    NavMenu
  }
});
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;

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

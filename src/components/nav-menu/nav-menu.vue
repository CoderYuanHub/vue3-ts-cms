<template>
  <div class="menu">
    <div @click="handleCollapse">折叠</div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
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
import { computed, defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { Location } from "@element-plus/icons-vue";
export default defineComponent({
  name: "nav-menu",
  components: {
    Location
  },
  setup() {
    const isCollapse = ref<boolean>(false);
    const store = useStore();
    const userMenus = computed(() => store.state.login.userMenus);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      handleCollapse,
      userMenus
    };
  }
});
</script>

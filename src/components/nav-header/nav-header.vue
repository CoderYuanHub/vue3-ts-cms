<template>
  <div class="nav-header">
    <el-icon class="fold-menu">
      <component :is="cpn" @click="handleFoldClick"></component>
    </el-icon>
    <div class="content">
      <y-y-bread-crumb :breadcrumbs="breadcrumbs"></y-y-bread-crumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import { Expand, Fold } from "@element-plus/icons-vue";
import UserInfo from "./user-info.vue";
import YYBreadCrumb, { IBreadcrumb } from "@/base-ui/breadcrumb/index";
import { pathMapToBreadcrumb } from "@/utils/map-menus";

export default defineComponent({
  name: "nav-header",
  components: {
    Expand,
    Fold,
    UserInfo,
    YYBreadCrumb
  },
  emits: ["isCollapse"],
  setup(props, { emit }) {
    // 基本数据
    const isFold = ref<boolean>(false);
    const route = useRoute();
    const store = useStore();
    const breadcrumbs: ComputedRef<IBreadcrumb[]> = computed(() => {
      return pathMapToBreadcrumb(store.state.login.userMenus, route.path);
    });

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
      breadcrumbs,
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

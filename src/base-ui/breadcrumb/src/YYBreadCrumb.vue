<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadcrumbs"
      :key="index"
      :to="item.url"
    >
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IBreadcrumb } from "../types";
export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup(props: any) {
    console.log(props);
    return {};
  }
});
</script>

<style scoped></style>

<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column
      v-for="(item, index) in propsList"
      :key="item?.prop + index"
      v-bind="item"
    >
      <template #default="scope">
        <slot :name="item.slotName" :value="scope.row">{{
          scope.row[item.prop]
        }}</slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "yy-table",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    propsList: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>

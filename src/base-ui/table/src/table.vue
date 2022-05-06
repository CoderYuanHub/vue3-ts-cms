<template>
  <slot name="header"></slot>
  <el-table
    :data="tableData"
    @select="handleSelectionChange"
    style="width: 100%"
  >
    <el-table-column
      v-if="showSelectColumn"
      type="selection"
      width="50"
      align="center"
    ></el-table-column>
    <el-table-column
      v-if="showIndexColumn"
      type="index"
      width="80"
      align="center"
      label="序号"
    ></el-table-column>
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
  <div class="footer">
    <slot name="footer"></slot>
  </div>
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
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ["select"],
  setup(props, { emit }) {
    const handleSelectionChange = (val: any) => {
      emit("select", val);
    };
    return {
      handleSelectionChange
    };
  }
});
</script>

<style scoped></style>

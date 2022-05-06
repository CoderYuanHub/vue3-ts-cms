<template>
  <yy-table
    v-bind="contentTableConfig"
    :tableData="tableData"
    @select="handleSelectionChange"
  >
    <template #enable="scope">
      <el-button plain :type="scope.value.enable ? 'primary' : 'danger'">
        {{ scope.value.enable ? "启用" : "禁用" }}
      </el-button>
    </template>
    <template #createAt="scope">
      {{ $filter.formatTime(scope.value.createAt) }}
    </template>
    <template #action="scope">
      <el-button
        plain
        type="text"
        size="small"
        @click="handleEditAction(scope.value)"
      >
        编辑
      </el-button>
      <el-button
        plain
        type="text"
        size="small"
        @click="handleDelAction(scope.value)"
      >
        删除
      </el-button>
    </template>
    <template #footer>
      <div class="footer">
        <div></div>
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </template>
  </yy-table>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import YyTable from "@/base-ui/table";
import { useStore } from "@/store";
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    YyTable
  },
  setup(props) {
    const store = useStore();
    const total = computed(() => store.state.system.userCount);
    const pageSize = ref(10);
    const currentPage = ref(0);
    store.dispatch("system/getPageListAction", {
      pageName: props.pageName,
      queryParams: {
        offset: 1,
        size: 10
      }
    });
    const tableData = computed(() =>
      store.getters["system/pageListData"](props.pageName)
    );
    const handleSelectionChange = (val: any) => {
      console.log("勾选框的值", val);
    };
    const handleEditAction = (value: any) => {
      console.log("点击编辑操作", value);
    };
    const handleDelAction = (value: any) => {
      console.log("点击删除操作", value);
    };
    const handleSizeChange = (val: any) => {
      console.log("每页显示条数", val);
    };
    const handleCurrentChange = (val: any) => {
      console.log("当前页码", val);
    };
    return {
      total,
      pageSize,
      currentPage,
      tableData,
      handleSelectionChange,
      handleEditAction,
      handleDelAction,
      handleSizeChange,
      handleCurrentChange
    };
  }
});
</script>

<style scoped></style>

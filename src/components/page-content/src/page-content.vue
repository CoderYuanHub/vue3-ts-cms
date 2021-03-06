<template>
  <yy-table
    v-bind="contentTableConfig"
    :tableData="tableData"
    @select="handleSelectionChange"
  >
    <template #header>
      <div class="header">
        <el-button @click="handleAddClick" v-if="isCreate" type="primary"
          >新建用户</el-button
        >
      </div>
    </template>
    <template #enable="scope">
      <el-button plain :type="scope.value.enable ? 'primary' : 'danger'">
        {{ scope.value.enable ? "启用" : "禁用" }}
      </el-button>
    </template>
    <template #createAt="scope">
      {{ $filter.formatTime(scope.value.createAt) }}
    </template>
    <template #updateAt="scope">
      {{ $filter.formatTime(scope.value.createAt) }}
    </template>
    <template #action="scope">
      <el-button
        plain
        v-if="isUpdate"
        type="text"
        size="small"
        @click="handleEditAction(scope.value)"
      >
        编辑
      </el-button>
      <el-button
        plain
        v-if="isDelete"
        type="text"
        size="small"
        @click="handleDelAction(scope.value)"
      >
        删除
      </el-button>
    </template>

    <!-- 在page-content中动态插入剩余的插槽 -->
    <template
      v-for="item in otherSlots"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :value="scope.value"></slot>
      </template>
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
import { usePermission } from "@/hooks/use-permission";
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
  emits: ["add:list", "edit:list"],
  setup(props, { emit }) {
    const store = useStore();
    const total = computed(() =>
      store.getters["system/pageCountData"](props.pageName)
    );
    // 获取操作权限
    const isCreate = usePermission(props.pageName, "create");
    const isUpdate = usePermission(props.pageName, "update");
    const isDelete = usePermission(props.pageName, "delete");
    const isQuery = usePermission(props.pageName, "query");

    const pageSize = ref(10);
    let currentPage = ref(1);
    const getTableList = (queryParams: any = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryParams: {
          offset: 1,
          size: 10,
          ...queryParams
        }
      });
    };
    getTableList();
    const tableData = computed(() =>
      store.getters["system/pageListData"](props.pageName)
    );
    const otherSlots: any[] = props.contentTableConfig.propsList.filter(
      (item: any) => {
        if (item.slotName === "enable") return false;
        if (item.slotName === "createAt") return false;
        if (item.slotName === "updateAt") return false;
        if (item.slotName === "action") return false;
        return true;
      }
    );
    const handleSelectionChange = (val: any) => {
      console.log("勾选框的值", val);
    };
    const handleEditAction = (value: any) => {
      emit("edit:list", value);
    };
    const handleDelAction = (value: any) => {
      store.dispatch("system/deletePageListAction", {
        pageName: props.pageName,
        id: value.id
      });
    };
    const handleSizeChange = (val: any) => {
      getTableList({ offset: currentPage.value, size: val });
    };
    const handleCurrentChange = (val: any) => {
      currentPage.value = val;
      getTableList({ offset: val });
    };

    const handleAddClick = () => {
      emit("add:list");
    };
    return {
      total,
      pageSize,
      currentPage,
      tableData,
      otherSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      getTableList,
      handleSelectionChange,
      handleEditAction,
      handleDelAction,
      handleSizeChange,
      handleCurrentChange,
      handleAddClick
    };
  }
});
</script>

<style scoped>
.header {
  text-align: right;
}
.footer {
  display: flex;
  justify-content: space-between;
}
</style>

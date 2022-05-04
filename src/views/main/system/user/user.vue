<template>
  <div class="user">
    <div class="from">
      <page-search :formConfig="formConfig"></page-search>
    </div>
    <div class="content">
      <yy-table :tableData="tableData" :propsList="propsList">
        <template #enable="scope">
          <el-button>{{ scope.value.enable ? "启动" : "禁用" }}</el-button>
        </template>
        <template #createAt="scope">{{ scope.value.createAt }}</template>
      </yy-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import PageSearch from "@/base-ui/page-search";
import { formConfig } from "./config/search.config";
import { useStore } from "@/store";
import YyTable from "@/base-ui/table";

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    YyTable
  },
  setup() {
    const store = useStore();
    store.dispatch("system/getPageListAction", {
      url: "/users/list",
      queryParams: {
        offset: 1,
        size: 10
      }
    });
    const tableData = computed(() => store.state.system.userList);
    const propsList = [
      { prop: "id", label: "id" },
      { prop: "name", label: "用户名" },
      { prop: "realname", label: "真实姓名" },
      { prop: "cellphone", label: "电话号码" },
      { prop: "createAt", label: "创建时间", slotName: "createAt" },
      { prop: "updateAt", label: "更新时间", slotName: "updateAt" },
      { prop: "enable", label: "状态", slotName: "enable" }
    ];
    return {
      formConfig,
      propsList,
      tableData
    };
  }
});
</script>

<style scoped>
.from {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.content {
  padding: 20px;
  background-color: #fff;
}
</style>

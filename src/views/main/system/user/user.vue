<template>
  <div class="user">
    <div class="from">
      <page-search
        :formConfig="formConfig"
        @form-search="handleSearch"
        @form-reset="handleReset"
      ></page-search>
    </div>
    <div class="content">
      <page-content
        ref="pageContentRef"
        :pageName="pageName"
        :contentTableConfig="contentTableConfig"
        v-on:add:list="handleModleList"
        v-on:edit:list="handleModleList"
      ></page-content>
    </div>
    <page-modal
      ref="pageModalRef"
      :pageName="pageName"
      :defaultValue="defaultValue"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

import PageSearch from "@/base-ui/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";
export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const pageName = "users";
    const [pageContentRef, handleSearch, handleReset] = usePageSearch();
    const callback = () => {
      // TODO: handle callback
      const passwordItem = modalConfig.formItems.find(
        (item) => item.filed === "password"
      );
      passwordItem!.isHidden = true;
    };
    // 动态添加部门和角色列表
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.filed === "departmentId";
      });
      departmentItem!.options = store.state.entrieDepartment.map((item) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      const roleItem = modalConfig.formItems.find((item) => {
        return item.filed === "roleId";
      });
      roleItem!.options = store.state.entrieRole.map((item) => {
        return {
          label: item.name,
          value: item.id
        };
      });
      return modalConfig;
    });

    // 3.调用hook获取公共变量和函数
    const [defaultValue, pageModalRef, handleModleList] =
      usePageModal(callback);
    return {
      pageModalRef,
      defaultValue,
      pageName,
      formConfig,
      pageContentRef,
      handleSearch,
      handleReset,
      contentTableConfig,
      modalConfigRef,
      handleModleList
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
.footer {
  display: flex;
  justify-content: space-between;
}
</style>

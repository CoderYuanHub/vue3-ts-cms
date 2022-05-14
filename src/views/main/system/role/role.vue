<template>
  <div class="role">
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
      :otherInfo="otherInfo"
      :defaultValue="defaultValue"
      :modalConfig="modalConfig"
    >
      <el-tree
        ref="treeRef"
        :data="treeData"
        node-key="id"
        :props="{
          children: 'children',
          label: 'name'
        }"
        @check="handleCheck"
        show-checkbox
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from "vue";

import { useStore } from "@/store";

import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { contentTableConfig } from "./config/content.config";
import { modalConfig } from "./config/modal.config";

import { usePageSearch } from "@/hooks/use-page-search";
import { usePageModal } from "@/hooks/use-page-modal";

import { getMenuLeafKeys } from "@/utils/map-menus";
import { ElTree } from "element-plus";

export default defineComponent({
  name: "role",
  components: {
    PageContent,
    PageModal
  },
  setup() {
    const pageName = "role";
    const store = useStore();
    const treeData = computed(() => store.state.entrieMenu);
    const otherInfo = ref({});
    const treeRef = ref<InstanceType<typeof ElTree>>();
    const [pageContentRef, handleSearch, handleReset] = usePageSearch();
    // 3.调用hook获取公共变量和函数
    const [defaultValue, pageModalRef, handleModleList] = usePageModal(
      (item) => {
        const keysIds = getMenuLeafKeys(item.menuList);
        nextTick(() => {
          treeRef.value?.setCheckedKeys(keysIds, false);
        });
      }
    );

    const handleCheck = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = {
        menuList
      };
    };
    return {
      pageName,
      treeData,
      otherInfo,
      treeRef,
      contentTableConfig,
      pageContentRef,
      handleSearch,
      defaultValue,
      pageModalRef,
      handleModleList,
      handleReset,
      modalConfig,
      handleCheck
    };
  }
});
</script>

<style scoped></style>

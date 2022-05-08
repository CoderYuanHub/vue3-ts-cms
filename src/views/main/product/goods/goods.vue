<template>
  <div class="goods">
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
      >
        <template #img="scope">
          <el-image
            style="width: 60px; height: 60px"
            :src="scope.value.imgUrl"
            preview-teleported
            :preview-src-list="[scope.value.imgUrl]"
          >
          </el-image>
        </template>
      </page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PageSearch from "@/base-ui/page-search";
import PageContent from "@/components/page-content";
import { formConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

import { usePageSearch } from "@/hooks/use-page-search";

export default defineComponent({
  name: "goods",
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    const pageName = "goods";
    const [pageContentRef, handleSearch, handleReset] = usePageSearch();
    return {
      pageName,
      formConfig,
      pageContentRef,
      handleSearch,
      handleReset,
      contentTableConfig
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

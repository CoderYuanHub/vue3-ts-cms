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
      ></page-content>
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
  name: "user",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const pageName = "users";
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

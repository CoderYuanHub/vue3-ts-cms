<template>
  <div class="user">
    <div class="from">
      <page-search :formConfig="formConfig"></page-search>
    </div>
    <div class="content">
      <page-content
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

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const pageName = "users";
    return {
      pageName,
      formConfig,
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

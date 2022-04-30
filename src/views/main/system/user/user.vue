<template>
  <div class="user">
    <div class="from">
      <page-search :formConfig="formConfig"></page-search>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageSearch from "@/base-ui/page-search";
import { formConfig } from "./config/search.config";

export default defineComponent({
  name: "user",
  components: {
    PageSearch
  },
  setup() {
    return {
      formConfig
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
</style>

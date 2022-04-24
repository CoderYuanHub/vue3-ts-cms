<template>
  <div class="user">
    <h2>用户管理界面</h2>
    <div class="from">
      <yy-form v-bind="formConfig"></yy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import YyForm from "@/base-ui/form";
import { formConfig } from "./config/search.config";

export default defineComponent({
  name: "user",
  components: {
    YyForm
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

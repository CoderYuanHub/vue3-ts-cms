<template>
  <div class="user">
    <h2>用户管理界面</h2>
    <div class="from">
      <yy-form v-bind="formConfig" v-model="formData"></yy-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import YyForm from "@/base-ui/form";
import { formConfig } from "./config/search.config";

export default defineComponent({
  name: "user",
  components: {
    YyForm
  },
  setup() {
    const formData = ref({
      username: "",
      password: "",
      sport: "",
      createdtime: ""
    });
    return {
      formConfig,
      formData
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

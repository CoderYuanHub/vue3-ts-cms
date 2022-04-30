<template>
  <div class="page-search">
    <yy-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h2>高级搜索</h2>
      </template>
      <template #footer>
        <div style="text-align: right">
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">重置</el-button>
        </div>
      </template>
    </yy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import YyForm from "@/base-ui/form";
export default defineComponent({
  components: {
    YyForm
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = ref({
      username: "",
      password: "",
      sport: "",
      createdtime: ""
    });
    return {
      formData
    };
  }
});
</script>

<style scoped></style>

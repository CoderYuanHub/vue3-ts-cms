<template>
  <div class="page-search">
    <yy-form v-bind="formConfig" v-model="formData">
      <template #header>
        <h2>高级搜索</h2>
      </template>
      <template #footer>
        <div style="text-align: right">
          <el-button type="primary" @click="handleSearch">搜索</el-button>
          <el-button type="primary" @click="handleReset">重置</el-button>
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
  emits: ["formSearch", "formReset"],
  setup(props, { emit }) {
    // 1.优化动态绑定字段
    const formItems = props.formConfig?.formConfig ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.key] = "";
    }
    const formData = ref(formOriginData);
    const handleSearch = () => {
      emit("formSearch", formData.value);
    };
    const handleReset = () => {
      formData.value = {};
      emit("formReset");
    };
    return {
      formData,
      handleSearch,
      handleReset
    };
  }
});
</script>

<style scoped></style>

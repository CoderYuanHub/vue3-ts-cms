<template>
  <div class="dialog">
    <el-dialog
      v-model="centerDialogVisible"
      title="新建用户"
      destroy-on-close
      width="30%"
      center
    >
      <yy-form v-model="formData" v-bind="modalConfig"></yy-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">取消</el-button>
          <el-button type="primary" @click="handleAdd">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "@/store";
import YyForm from "@/base-ui/form";
export default defineComponent({
  components: {
    YyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultValue: {
      type: Object,
      default: () => ({})
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const centerDialogVisible = ref(false);
    const formData: any = ref<any>({});
    watch(
      () => props.defaultValue,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.filed}`] = newValue[`${item.filed}`];
        }
      }
    );
    const store = useStore();
    const handleCancel = () => {
      centerDialogVisible.value = false;
    };
    const handleAdd = () => {
      centerDialogVisible.value = false;
      if (Object.keys(props.defaultValue).length) {
        // 编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
          id: props.defaultValue.id
        });
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        });
      }
    };
    return {
      formData,
      centerDialogVisible,
      handleCancel,
      handleAdd
    };
  }
});
</script>

<style scoped></style>

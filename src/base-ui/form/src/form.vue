<template>
  <div class="yy-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
              :rules="item.rules"
              class="form-item"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[item.filed]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :model-value="modelValue[item.filed]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                  :placeholder="item.placeholder"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  :model-value="modelValue[item.filed]"
                  @update:modelValue="handleValueChange($event, item.filed)"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFormItem } from "../types";
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 30px" })
    },
    colLayout: {
      type: Object,
      default: () => ({ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 })
    }
  },
  emit: ["update:modelValue"],
  setup(props, { emit }) {
    const handleValueChange = (value: any, filed: string) => {
      console.log(value, filed);
      emit("update:modelValue", { ...props.modelValue, [filed]: value });
    };
    // const formData = ref({ ...props.modelValue });
    // watch(
    //   formData,
    //   (newValue) => {
    //     emit("update:modelValue", newValue);
    //   },
    //   {
    //     deep: true
    //   }
    // );
    return {
      // formData,
      handleValueChange
    };
  }
});
</script>

<style scoped lang="less">
.yy-form {
  padding-top: 22px;
}
</style>

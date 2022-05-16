<template>
  <div ref="EchartsRef" :style="{ width, height }" class="base-echarts"></div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";
import useEchart from "@/hooks/use-echart";
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue";
const EchartsRef = ref<HTMLElement>();
// props
const Props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: echarts.EChartsOption;
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);
onMounted(() => {
  const { setOptions } = useEchart(EchartsRef.value!);
  console.log(Props.options);
  watchEffect(() => {
    setOptions(Props.options);
  });
});
</script>

<style scoped lang="less">
.base-echarts {
  height: 100%;
}
</style>

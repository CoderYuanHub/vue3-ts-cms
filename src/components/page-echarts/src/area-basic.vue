<template>
  <base-echarts :options="options" :style="{ width, height }"></base-echarts>
</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from "vue";
import * as echarts from "echarts";
import BaseEcharts from "@/base-ui/echarts";
import { IDataType } from "../types";
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    baseData: IDataType[];
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);
const options = computed(
  () =>
    ({
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: props.baseData.map((item) => item.name)
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: props.baseData.map((item) => item.value),
          type: "line",
          areaStyle: {}
        }
      ]
    } as echarts.EChartsOption)
);
</script>

<style scoped></style>

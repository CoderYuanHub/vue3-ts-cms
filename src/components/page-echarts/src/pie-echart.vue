<template>
  <base-echarts :options="options" :style="{ width, height }"></base-echarts>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue";
import * as echarts from "echarts";
import BaseEcharts from "@/base-ui/echarts";
import { IDataType } from "../types";
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    pieData: IDataType[];
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);
const options = computed(
  () =>
    ({
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "left"
      },
      series: [
        {
          name: "分类数据",
          type: "pie",
          radius: "50%",
          data: props.pieData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    } as echarts.EChartOption)
);
</script>

<style scoped></style>

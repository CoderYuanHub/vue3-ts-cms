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
    roseData: IDataType[];
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);
const options: echarts.EChartsOption = computed(
  () =>
    ({
      title: {
        text: "分类商品数量",
        subtext: "纯属虚构",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        left: "center",
        top: "bottom",
        data: props.roseData.map((item) => item.name)
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: {
        name: "商品分类",
        type: "pie",
        radius: [20, 100],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: props.roseData
      }
    } as echarts.EChartOption)
);
</script>

<style scoped></style>

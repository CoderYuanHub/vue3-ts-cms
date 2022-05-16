<template>
  <base-echarts :options="options" :style="{ width, height }"></base-echarts>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, computed } from "vue";
import * as echarts from "echarts";
import BaseEcharts from "@/base-ui/echarts";
import { IDataType } from "../types";
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    mapData: IDataType[];
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);

const options = computed(
  () =>
    ({
      tooltip: {
        show: true,
        formatter: function (params: any) {
          if (params.data) return params.name + "：" + params.data["value"];
        }
      },
      visualMap: {
        type: "continuous",
        text: ["", ""],
        showLabel: true,
        left: "50",
        min: 0,
        max: 100,
        inRange: {
          color: ["#edfbfb", "#b7d6f3", "#40a9ed", "#3598c1", "#215096"]
        },
        splitNumber: 0
      },
      series: [
        {
          name: "MAP",
          type: "map",
          mapType: "china",
          selectedMode: "false", //是否允许选中多个区域
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: props.mapData
        }
      ]
    } as echarts.EChartsOption)
);
</script>

<style scoped></style>

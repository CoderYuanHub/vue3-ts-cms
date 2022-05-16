<template>
  <base-echarts
    ref="baseRef"
    :options="options"
    :style="{ width, height }"
  ></base-echarts>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed, ref } from "vue";
import * as echarts from "echarts";
import BaseEcharts from "@/base-ui/echarts";
import { IDataType } from "../types";
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    barData: IDataType[];
  }>(),
  {
    width: "100%",
    height: "360px"
  }
);
const baseRef = ref<InstanceType<typeof BaseEcharts>>();
console.log("baseRef", baseRef);
// let yMax = 500;
// let dataShadow = [];
// for (let i = 0; i < props.barData.length; i++) {
//   dataShadow.push(yMax);
// }
const options = computed(
  () =>
    ({
      xAxis: {
        data: props.barData.map((item) => item.name),
        axisLabel: {
          inside: true,
          color: "#fff"
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#999"
        }
      },
      dataZoom: [
        {
          type: "inside"
        }
      ],
      series: [
        {
          type: "bar",
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#2378f7" },
                { offset: 0.7, color: "#2378f7" },
                { offset: 1, color: "#83bff6" }
              ])
            }
          },
          data: props.barData.map((item) => item.value)
        }
      ]
    } as echarts.EChartsOption)
);
</script>

<style scoped></style>

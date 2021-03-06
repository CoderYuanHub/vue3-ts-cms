import * as echarts from "echarts";

import ChinaMapData from "@/base-ui/echarts/data/china.json";

echarts.registerMap("china", ChinaMapData);

export default function (el: HTMLElement): any {
  const echartInstance = echarts.init(el);
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };
  window.addEventListener("resize", () => {
    echartInstance.resize();
  });
  return {
    echartInstance,
    setOptions
  };
}

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>分类商品数量(饼图)</span>
            </div>
          </template>
          <pie-echart :pieData="pieData"></pie-echart>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>不同城市商品销量</span>
            </div>
          </template>
          <map-echart :mapData="mapData"></map-echart>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>不同城市商品销量(玫瑰图)</span>
            </div>
          </template>
          <pie-rose-echart :roseData="roseData"></pie-rose-echart>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-bottom">
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>分类商品的销量</span>
            </div>
          </template>
          <area-basic :baseData="baseData"></area-basic>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>分类商品的收藏</span>
            </div>
          </template>
          <bar-echart :barData="barData"></bar-echart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "@/store";
import {
  PieEchart,
  PieRoseEchart,
  AreaBasic,
  BarEchart,
  MapEchart
} from "@/components/page-echarts";
const store = useStore();
store.dispatch("dashboard/getDashboardDataAction");
const pieData = computed(() =>
  store.state.dashboard.categoryGoodsCount.map((item) => {
    return {
      name: item.name,
      value: item.goodsCount
    };
  })
);

const mapData = computed(() =>
  store.state.dashboard.addressGoodsSale.map((item) => {
    return {
      name: item.address,
      value: item.count
    };
  })
);
const roseData = computed(() =>
  store.state.dashboard.categoryGoodsFavor.map((item) => {
    return {
      name: item.name,
      value: item.goodsFavor
    };
  })
);

const barData = computed(() =>
  store.state.dashboard.categoryGoodsSale.map((item) => {
    return {
      name: item.name,
      value: item.goodsCount
    };
  })
);
const baseData = computed(() =>
  store.state.dashboard.categoryGoodsSale.map((item) => {
    return {
      name: item.name,
      value: item.goodsCount
    };
  })
);
</script>

<style scoped lang="less">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  height: 360px;
  width: 100%;
}
.content-bottom {
  margin-top: 20px;
}
</style>

import { Module } from "vuex";
import { IDashboardState } from "./type";
import { IRootState } from "@/store/type";
import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard";
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state: {
    categoryGoodsCount: [],
    categoryGoodsSale: [],
    categoryGoodsFavor: [],
    addressGoodsSale: []
  },
  mutations: {
    setCategoryGoodsCount(state: IDashboardState, payload: any) {
      state.categoryGoodsCount = payload;
    },
    setCategoryGoodsSale(state: IDashboardState, payload: any) {
      state.categoryGoodsSale = payload;
    },
    setCategoryGoodsFavor(state: IDashboardState, payload: any) {
      state.categoryGoodsFavor = payload;
    },
    setAddressGoodsSale(state: IDashboardState, payload: any) {
      state.addressGoodsSale = payload;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount();
      commit("setCategoryGoodsCount", categoryCountResult.data);
      const categorySaleResult = await getCategoryGoodsSale();
      commit("setCategoryGoodsSale", categorySaleResult.data);
      const categoryFavorResult = await getCategoryGoodsFavor();
      commit("setCategoryGoodsFavor", categoryFavorResult.data);
      const addressSaleResult = await getAddressGoodsSale();
      commit("setAddressGoodsSale", addressSaleResult.data);
    }
  }
};

export default dashboardModule;

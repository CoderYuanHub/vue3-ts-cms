import { Module } from "vuex";
import { IRootState } from "@/store/type";
import { ISystemState } from "./type";
import { getPageListData } from "@/service/main/system/system";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      goodsList: [],
      goodsCount: 0
    };
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.userList;
          case "role":
            return state.userList;
          case "goods":
            return state.goodsList;
        }
      };
    },
    pageCountData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.userCount;
          case "role":
            return state.userCount;
          case "goods":
            return state.goodsCount;
        }
      };
    }
  },
  mutations: {
    changeUserList(state, payload: any[]) {
      state.userList = payload;
    },
    changeUserCount(state, payload: number) {
      state.userCount = payload;
    },
    changeGoodsList(state, payload: any[]) {
      state.goodsList = payload;
    },
    changeGoodsCount(state, payload: number) {
      state.goodsCount = payload;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      let pageUrl = "";
      let data: any = [];
      switch (payload.pageName) {
        case "users":
          pageUrl = "/users/list";
          data = await getPageListData(pageUrl, payload.queryParams);
          commit("changeUserList", data.data.list);
          commit("changeUserCount", data.data.totalCount);
          break;
        case "role":
          pageUrl = "/role/list";
          data = await getPageListData(pageUrl, payload.queryParams);
          break;
        case "goods":
          pageUrl = "/goods/list";
          data = await getPageListData(pageUrl, payload.queryParams);
          commit("changeGoodsList", data.data.list);
          commit("changeGoodsCount", data.data.totalCount);
          break;
        default:
          break;
      }
      // 1.发送页面请求
      // const data = await getPageListData(pageUrl, payload.queryParams);
      // 2.更新store数据
      commit("changeUserList", data.data.list);
      commit("changeUserCount", data.data.totalCount);
    }
  }
};

export default systemModule;

import { Module } from "vuex";
import { IRootState } from "@/store/type";
import { ISystemState } from "./type";
import { getPageListData, deletePageData } from "@/service/main/system/system";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
          case "menu":
            return state.menuList;
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
          case "menu":
            return state.menuCount;
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
    },
    changeMenuList(state, payload: any[]) {
      state.menuList = payload;
    },
    changeMenuCount(state, payload: number) {
      state.menuCount = payload;
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
        case "menu":
          pageUrl = "/menu/list";
          data = await getPageListData(pageUrl, payload.queryParams);
          commit("changeMenuList", data.data.list);
          commit("changeMenuCount", data.data?.totalCount || 0);
          break;
        default:
          break;
      }
    },
    async deletePageListAction({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await deletePageData(pageUrl);
      dispatch("getPageListAction", { pageName });
    }
  }
};

export default systemModule;

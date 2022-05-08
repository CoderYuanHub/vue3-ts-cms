import { Module } from "vuex";
import { IRootState } from "@/store/type";
import { ISystemState } from "./type";
import { getPageListData } from "@/service/main/system/system";
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
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
        }
      };
    },
    pafeCountData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case "users":
            return state.userCount;
          case "role":
            return state.userCount;
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
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      let pageUrl = "";
      switch (payload.pageName) {
        case "users":
          pageUrl = "/users/list";
          break;
        case "role":
          pageUrl = "/role/list";
          break;
        default:
          break;
      }
      // 1.发送页面请求
      const data = await getPageListData(pageUrl, payload.queryParams);
      // 2.更新store数据
      commit("changeUserList", data.data.list);
      commit("changeUserCount", data.data.totalCount);
    }
  }
};

export default systemModule;

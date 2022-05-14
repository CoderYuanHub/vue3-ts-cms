import { getPageListData } from "@/service/main/system/system";
import { createStore, Store, useStore as useVuexStore } from "vuex";
import login from "./login/login";
import system from "./main/system/system";
import { IRootState, IStoreType } from "./type";

const store = createStore<IRootState>({
  state() {
    return {
      name: "",
      entrieDepartment: [],
      entrieRole: [],
      entrieMenu: []
    };
  },
  mutations: {
    changeEntrieDepartment(state, payload) {
      state.entrieDepartment = payload;
    },
    changeEntureRole(state, payload) {
      state.entrieRole = payload;
    },
    changeEntireMenu(state, payload) {
      state.entrieMenu = payload;
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      });
      const { list: departmentList } = departmentResult.data;
      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      });
      const { list: roleList } = roleResult.data;
      const menuResult = await getPageListData("/menu/list", {});
      const { list: menuList } = menuResult.data;

      // 2.设置部门和角色数据
      commit("changeEntrieDepartment", departmentList);
      commit("changeEntureRole", roleList);

      // 3.设置菜单数据
      commit("changeEntireMenu", menuList);
    }
  },
  modules: {
    login,
    system
  }
});
// 封装一个useStore，用于返回所有的store类型
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

// 保证刷新vuex不被清空，做一个状态保留
export function saveStore(): void {
  store.dispatch("login/saveStore");
  // store.dispatch("getInitialDataAction");
}

export default store;

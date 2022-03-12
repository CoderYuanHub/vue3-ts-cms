import { createStore, Store, useStore as useVuexStore } from "vuex";
import login from "./login/login";
import { IRootState, IStoreType } from "./type";

const store = createStore<IRootState>({
  state() {
    return {
      name: ""
    };
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
});
// 封装一个useStore，用于返回所有的store类型
export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

// 保证刷新vuex不被清空，做一个状态保留
export function saveStore(): void {
  store.dispatch("login/saveStore");
}

export default store;

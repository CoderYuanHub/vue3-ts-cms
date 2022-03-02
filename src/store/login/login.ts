import { Module } from "vuex";
import { IRootState } from "../type";
import { ILoginState } from "./type";
import { IAccount } from "@/service/login/type";
import { accountLogin, requestUserInfoById } from "@/service/login/login";
import LocalCache from "@/utils/cache";

// Module 接收两种泛型，一个是当前状态接口类型，一个是根接口类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  // 用于改变当前状态（state）数据
  mutations: {
    // 更改token状态
    changeToken(state, token: string): void {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any): void {
      state.userInfo = userInfo;
    }
  },
  // 用于外部调用操作vuex
  actions: {
    // 登陆
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登陆逻辑
      const loginResult = await accountLogin(payload);
      const { id, token } = loginResult.data;

      commit("changeToken", token);
      LocalCache.setCache("token", token);

      // 2.请求用户信息
      const userinfo = await requestUserInfoById(id);
      console.log(userinfo);
      commit("changeUserInfo", 222);
    }
  }
};

export default loginModule;

import { Module } from "vuex";
import { IRootState } from "../type";
import { ILoginState } from "./type";
import { IAccount } from "@/service/login/type";
import {
  accountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login";
import router from "@/router";
import LocalCache from "@/utils/cache";
import { mapMenusToPermissions, mapMenusToRoutes } from "@/utils/map-menus";

// Module 接收两种泛型，一个是当前状态接口类型，一个是根接口类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permission: []
    };
  },
  getters: {},
  // 用于改变当前状态（state）数据
  mutations: {
    // 更改token状态
    changeToken(state, token: string): void {
      state.token = token;
    },
    // 更改用户信息
    changeUserInfo(state, userInfo: any): void {
      state.userInfo = userInfo;
    },
    // 更改菜单信息
    changeMenu(state, menu: Array<any>): void {
      state.userMenus = menu;
      const routes = mapMenusToRoutes(menu);
      routes.forEach((route) => {
        router.addRoute("main", route);
      });
      // 获取用户菜单权限
      const permission = mapMenusToPermissions(menu);
      state.permission = permission;
    },
    // 退出登录
    logout(state): void {
      state.token = "";
      state.userInfo = {};
      state.userMenus = [];
      LocalCache.clearCache();
      router.push("/login");
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
      const userInfo = await requestUserInfoById(id);
      LocalCache.setCache("userInfo", userInfo.data);
      commit("changeUserInfo", userInfo.data);

      // 3.请求用户菜单
      const userMenus = await requestUserMenusByRoleId(userInfo.data.role.id);
      LocalCache.setCache("userMenus", userMenus.data);
      commit("changeMenu", userMenus.data);

      // 跳转到首页
      router.push("/");
    },
    // 保存vuex状态数据,防止刷新丢失
    saveStore({ commit }) {
      const token = LocalCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = LocalCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = LocalCache.getCache("userMenus");
      if (userMenus) {
        commit("changeMenu", userMenus);
      }
    }
  }
};

export default loginModule;

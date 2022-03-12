import request from "../index";
import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // 用法: /users/1
  UserMenus = "/role/" // 用法: role/1/menu
}
// 获取登陆账号token
export function accountLogin(account: IAccount): any {
  return request.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

// 查询用户信息
export function requestUserInfoById(id: number): any {
  return request.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  });
}

// 获取用户菜单
export function requestUserMenusByRoleId(id: number): any {
  return request.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  });
}

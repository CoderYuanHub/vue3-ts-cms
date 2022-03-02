import request from "../index";

import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/" // 用法: /users/1
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
    url: LoginAPI.LoginUserInfo + id
  });
}

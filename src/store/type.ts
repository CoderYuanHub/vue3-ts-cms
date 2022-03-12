import { ILoginState } from "./login/type";

// 根数据类型
export interface IRootState {
  name: string;
}
// 模块数据合集
export interface IRootWithModule {
  login: ILoginState;
}

// 跟数据类型和各个模块数据的合集
export type IStoreType = IRootState & IRootWithModule;

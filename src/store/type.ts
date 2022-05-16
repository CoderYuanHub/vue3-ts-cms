import { ILoginState } from "./login/type";
import { ISystemState } from "./main/system/type";
import { IDashboardState } from "./main/analysis/type";

// 根数据类型
export interface IRootState {
  name: string;
  entrieDepartment: any[];
  entrieRole: any[];
  entrieMenu: any[];
}
// 模块数据合集
export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  dashboard: IDashboardState;
}

// 跟数据类型和各个模块数据的合集
export type IStoreType = IRootState & IRootWithModule;

import type { AxiosRequestConfig, AxiosResponse } from "axios";
export interface HYRequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  // 请求错误拦截
  requestInterceptorCatch?: (error: any) => any;
  // 相应拦截
  responseInterceptor?: (config: T) => T;
  // 响应错误拦截
  responseInterceptorCatch?: (error: any) => any;
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>;
  showLoading?: boolean;
}

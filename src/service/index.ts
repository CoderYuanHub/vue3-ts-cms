import HYRequest from "./request";
import { BASE_URL, BASE_TIMEOUT } from "./request/config";
import localCase from "@/utils/cache";
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token请求
      const token = localCase.getCache("token");
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`;
        config.headers = {
          Authorization: `Bearer ${token}`
        };
      }
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log("请求错误拦截");
      return error;
    },
    responseInterceptor: (config) => {
      console.log("响应拦截");
      return config;
    },
    responseInterceptorCatch: (error) => {
      console.log("响应错误拦截");
      return error;
    }
  }
});
export default hyRequest;

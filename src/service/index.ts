import HYRequest from "./request";
import { BASE_URL, BASE_TIMEOUT } from "./request/config";
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: BASE_TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("请求拦截");
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

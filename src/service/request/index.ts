import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";
import { ElLoading } from "element-plus";
// import type { ILoadingInstance } from "element-plus";

const DEAFULT_LOADING = true;

class HYRequest {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors;
  showLoading: boolean;
  loading?: any;
  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    this.interceptors = config?.interceptors;
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 添加所有实例都有的拦截器
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0, 0, 0, 0.5)"
          });
        }
        console.log("所有实例请求拦截器", config);
        return config;
      },
      (error) => {
        console.error("所有请求失败拦截器");
        return error;
      }
    );
    // 响应拦截器
    this.instance.interceptors.response.use(
      (config) => {
        console.log("所有实例响应拦截器");
        this.loading?.close();

        return config;
      },
      (error) => {
        this.loading?.close();
        console.error("所有响应失败拦截器");
        return error;
      }
    );
  }
  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 当个请求config处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2.判断是否需要显示loadding
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }
      //
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // 2.将showLoadig设置为true，这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING;
          console.log(res);
          resolve(res);
        })
        .catch((error) => {
          this.showLoading = DEAFULT_LOADING;
          reject(error);
          return error;
        });
    });
  }
}

export default HYRequest;

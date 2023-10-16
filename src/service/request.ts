import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";
import { removeToken } from "@/utils/auth";

class JxRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // 请求拦截器
    this.instance.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return err;
      }
    );
    //相应拦截器
    this.instance.interceptors.response.use(
      res => {
        return res.data;
      },
      err => {
        const { response } = err;
        const { data } = response;

        const { code, message } = data;

        if (code === 401) {
          removeToken();
          router.push("/login");
          ElMessage.error(message);
        }

        throw new Error(message);
      }
    );
  }

  request<T = any>(config: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  get<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: "POST" });
  }
}
export default JxRequest;

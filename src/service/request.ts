import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class JxRequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return err;
      }
    );
    this.instance.interceptors.response.use(
      res => {
        return res.data;
      },
      err => {
        return err;
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

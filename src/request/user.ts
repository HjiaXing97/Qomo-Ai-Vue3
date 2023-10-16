import jxRequest from "@/service/index";

/**
 * @description 获取验证码接口
 * @param {number} dataNow 当前时间戳
 * @param {object} data 接口参数
 */
export function getSysRandomImage(dataNow: number, data: any) {
  return jxRequest.get({
    url: `/sys/randomImage/${dataNow}`,
    params: data
  });
}

/**
 * @description 登录接口
 * @param {object} data 接口参数 用户名 密码等
 */
export function getSysLogin(data: any) {
  return jxRequest.post({
    url: "/sys/login",
    data
  });
}

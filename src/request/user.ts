import jxRequest from "@/service/index";

export function getSysRandomImage(dataNow: number, data: any) {
  return jxRequest.get({
    url: `/sys/randomImage/${dataNow}`,
    params: data
  });
}

export function getSysLogin(data: any) {
  return jxRequest.post({
    url: "/sys/login",
    data
  });
}

import jxRequest from "@/service/index";

export function getLeftMenu(query: any) {
  return jxRequest.get({
    url: "/sys/permission/getHomeMenu",
    params: query
  });
}

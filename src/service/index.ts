import JxRequest from "./request";
import { BASE_URL, TIME_OUT } from "./config";
import { getToken } from "@/utils/auth.ts";

const jxRequest = new JxRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL,
  headers: {
    "X-Access-Token": getToken()
  }
});

export default jxRequest;

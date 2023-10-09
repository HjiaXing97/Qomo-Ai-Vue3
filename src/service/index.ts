import JxRequest from "./request";
import { BASE_URL, TIME_OUT } from "./config";

const jxRequest = new JxRequest({
  timeout: TIME_OUT,
  baseURL: BASE_URL
});

export default jxRequest;

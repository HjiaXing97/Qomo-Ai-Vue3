import { defineStore } from "pinia";
import { getSysLogin, getSysRandomImage } from "@/request/user.ts";
import { ElMessage } from "element-plus";
import { setToken } from "@/utils/auth.ts";

const useUserInfoStore = defineStore("userInfo", {
  state: () => ({
    userInfo: {},
    token: "",
    dataNow: Date.now(),
    randomImageUrl: ""
  }),
  actions: {
    async useGetLogin(data: any) {
      data.checkKey = this.dataNow;
      const { result, code, message } = await getSysLogin(data);
      if (code === 412) {
        await this.getRandomImage();
        ElMessage.error({
          message
        });

        return;
      }
      this.token = result?.token;
      setToken(this.token);
      this.userInfo = result?.userInfo;
    },

    async getRandomImage() {
      this.dataNow = Date.now();
      const res = await getSysRandomImage(this.dataNow, { _t: Date.now() });
      this.randomImageUrl = res.result;
    }
  },
  persist: true
});

export default useUserInfoStore;

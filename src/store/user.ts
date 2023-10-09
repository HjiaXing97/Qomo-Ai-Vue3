import { defineStore } from "pinia";
import { getSysLogin, getSysRandomImage } from "@/request/user.ts";

const useUserInfoStore = defineStore("userInfo", {
  state: () => ({
    userInfo: {},
    token: "",
    dataNow: Date.now(),
    randomImageUrl: ""
  }),
  actions: {
    async useGetLogin(data: any) {
      console.log(this.dataNow);
      data.checkKey = this.dataNow;
      const res = await getSysLogin(data);
      if (res.code === 421 && res.message === "验证码错误") {
        await this.getRandomImage();
      }
      console.log(res);
    },
    async getRandomImage() {
      this.dataNow = Date.now();
      const res = await getSysRandomImage(this.dataNow, { _t: Date.now() });
      this.randomImageUrl = res.result;
    }
  }
});

export default useUserInfoStore;

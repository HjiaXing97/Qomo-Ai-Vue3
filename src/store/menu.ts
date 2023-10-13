import { defineStore } from "pinia";
import { getLeftMenu } from "@/request/menu";
import getDataNow from "@/utils/getDataNow";

const useMenuStore = defineStore("menu", {
  state: () => ({
    leftMenu: []
  }),
  actions: {
    async useGetLeftMenu() {
      const query = {
        _t: getDataNow(),
        type: 1
      };
      const { result } = await getLeftMenu(query);
      this.leftMenu = result;
    }
  }
});

export default useMenuStore;

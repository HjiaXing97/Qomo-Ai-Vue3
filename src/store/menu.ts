import { defineStore } from "pinia";
import { getLeftMenu } from "@/request/menu";
import getDataNow from "@/utils/getDataNow";
import addRoutes from "@/utils/addRoutes.ts";

interface IMenuStore {
  leftMenu: any[];
}

const useMenuStore = defineStore("menu", {
  state: (): IMenuStore => ({
    leftMenu: []
  }),
  actions: {
    /**
     * @description: 获取左侧菜单
     */
    async useGetLeftMenu() {
      const query = {
        _t: getDataNow(),
        type: 1
      };
      const { result } = await getLeftMenu(query);
      this.leftMenu = result;
      // 动态添加路由
      addRoutes(result);
    }
  }
});

export default useMenuStore;

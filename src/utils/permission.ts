import useMenuStore from "@/store/menu";

const initRouter = async () => {
  const store = useMenuStore();
  await store.useGetLeftMenu();
};

export default initRouter;

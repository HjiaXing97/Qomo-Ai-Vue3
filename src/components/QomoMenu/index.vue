<script lang="ts" setup>
import useMenuStore from "@/store/menu.ts";
import { onMounted, toRef } from "vue";
const store = useMenuStore();

const menu = toRef(store, "leftMenu");

onMounted(async () => {
  await store.useGetLeftMenu();
  console.log(menu.value);
});
</script>

<template>
  <div class="qomo-menu">
    <div v-for="item in menu" class="menu-item">
      <div class="menu-icon"></div>
      <div class="menu-name">{{ item.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  .menu-icon {
    width: 20px;
    height: 20px;
    background-color: #ccc;
    margin-right: 10px;
  }
  .menu-name {
    font-size: 14px;
  }
}
</style>

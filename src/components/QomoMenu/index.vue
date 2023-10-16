<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onMounted, toRef } from "vue";

import useMenuStore from "@/store/menu.ts";

const store = useMenuStore();
const router = useRouter();

const menu = toRef(store, "leftMenu");

onMounted(async () => {
  await store.useGetLeftMenu();
});

/**
 * @description 判断是否存在子级路由
 */
const isSubMenu = (item: any): boolean => {
  return Array.isArray(item.children) && item.children.length > 0;
};

/**
 * @description 获取子级路由的index
 * @param index
 * @param childIndex
 */
const getChildIndex = (index: number, childIndex: number) => {
  return `${index + 1}-${childIndex}`;
};

/**
 * @description 获取路由
 */
const getItemRoute = (item: any) => {
  router.push(item.url);
  console.log(item.url);
};
</script>

<template>
  <el-menu default-active="1">
    <template v-for="(item, index) in menu" :key="item.id">
      <el-sub-menu v-if="isSubMenu(item)" :index="(index + 1).toString()">
        <template v-slot:title>
          {{ item.name }}
        </template>
        <el-menu-item
          v-for="(childItem, childIndex) in item.children"
          :index="getChildIndex(index, childIndex)"
          @click="getItemRoute(childItem)"
        >
          {{ childItem.name }}
        </el-menu-item>
      </el-sub-menu>
      <template v-else>
        <el-menu-item
          :index="(index + 1).toString()"
          @click="getItemRoute(item)"
        >
          {{ item.name }}
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<style lang="scss" scoped></style>

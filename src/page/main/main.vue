<script lang="ts" setup>
import QomoHeader from "@/components/QomoHeader/index.vue";
import QomoMenu from "@/components/QomoMenu/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header> <QomoHeader /></el-header>
      <el-container>
        <el-aside width="240px">
          <QomoMenu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .el-header {
    padding: 0;
  }
  > .el-container {
    width: 100%;
    height: 100%;
  }
  .el-main {
    background-color: #f5f7fa;
  }
}
</style>

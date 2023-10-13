<script lang="ts" setup>
import QomoHeader from "@/components/QomoHeader/index.vue";
import QomoMenu from "@/components/QomoMenu/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header> <QomoHeader /></el-header>
      <el-container>
        <el-aside width="200px">
          <QomoMenu />
        </el-aside>
        <el-main></el-main>
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
}
</style>

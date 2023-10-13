<template>
  <header class="qomo-header">
    <div class="logo-main"></div>
  </header>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.qomo-header {
  width: 100%;
  opacity: 1;
  background: #2474ff;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  .logo-main {
    background: url("../../assets/image/logo-main.png") no-repeat;
    background-size: 100% 100%;
    width: 160px;
    height: 34px;
  }
}
</style>

<script lang="ts" setup>
import QomoLogin from "@/components/QomoLogin/index.vue";
</script>

<template>
  <div class="login">
    <div class="login_left">
      <div class="big_title">QomoAI平台层</div>
      <div class="Secondary_title">
        多消息协议适配 , 可视化规则引擎，AI机器学习
      </div>
      <div class="left_bg"></div>
    </div>
    <div class="login_right">
      <QomoLogin />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: url("../../assets/image/login-bg.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
}
.login_left {
  padding-left: 360px;
  padding-top: 265px;
  .big_title {
    height: 40px;
    font-size: 40px;
    font-weight: 500;
    color: #212121;
    line-height: 40px;
  }
  .Secondary_title {
    height: 18px;
    font-size: 20px;
    font-weight: 400;
    color: #666666;
    line-height: 18px;
    margin-top: 20px;
  }
  .left_bg {
    width: 630px;
    height: 440px;
    opacity: 1;
    background: url("../../assets/image/login-left.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 32px;
  }
}
.login_right {
  padding-right: 260px;
  padding-top: 265px;
}
</style>

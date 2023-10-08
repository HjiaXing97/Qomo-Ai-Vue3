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
  padding-left: 288px;
  padding-top: 212px;
  .big_title {
    height: 32px;
    font-size: 32px;
    font-weight: 500;
    color: #212121;
    line-height: 32px;
  }
  .Secondary_title {
    height: 14px;
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    line-height: 14px;
    margin-top: 16px;
  }
  .left_bg {
    width: 504px;
    height: 352px;
    opacity: 1;
    background: url("../../assets/image/login-left.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 26px;
  }
}
.login_right {
  padding-right: 208px;
  padding-top: 212px;
}
</style>

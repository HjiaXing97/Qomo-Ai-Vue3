<script lang="ts" setup>
import { IUserForm } from "./types";
import { ref } from "vue";

const form = ref<IUserForm>({ username: "", password: "" });
</script>

<template>
  <div class="qomo_login">
    <div class="title">欢迎登录QomoAI平台</div>
    <div class="login-form">
      <el-form :model="form">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.qomo_login {
  width: 416px;
  height: 440px;
  background: #ffffff;
  box-shadow: 0 3px 24px 0 rgba(232, 237, 247, 1);
  border-radius: 3px 3px 3px 3px;
  opacity: 1;
  padding: 56px 56px 71px 56px;
  ::v-deep(.el-input__wrapper) {
    background: #f2f4f9;
  }
  ::v-deep(.el-input__inner) {
    height: 35px;
  }
}
.title {
  height: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #212121;
  line-height: 16px;
  text-align: center;
}
.login-form {
  margin-top: 32px;
}
</style>

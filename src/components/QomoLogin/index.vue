<script lang="ts" setup>
import { IUserForm } from "./types";
import { onMounted, ref, toRef } from "vue";
import useUserInfoStore from "@/store/user";
import { useRouter } from "vue-router";

const store = useUserInfoStore();
const captcha = toRef(store, "randomImageUrl");
const dataNow = ref(0);
const router = useRouter();

const getRandomImage = async () => {
  await store.getRandomImage();
};

const getSysLogin = async () => {
  const param = { ...form.value };
  await store.useGetLogin({ ...param });
  await router.push("/main");
};

onMounted(() => {
  dataNow.value = Date.now();
  getRandomImage();
});

const form = ref<IUserForm>({
  username: "admin",
  password: "123456",
  captcha: ""
});
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
        <el-form-item class="captcha-item" prop="captcha">
          <el-input
            v-model="form.captcha"
            placeholder="请输入验证码"
          ></el-input>
          <div class="captcha" @click="getRandomImage">
            <img :src="captcha" alt="" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="getSysLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.qomo_login {
  width: 520px;
  height: 550px;
  background: #ffffff;
  box-shadow: 0 4px 30px 0 #e8edf7;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  padding: 70px 70px 89px 70px;
  box-sizing: border-box;
  ::v-deep(.el-input__wrapper) {
    background: #f2f4f9;
  }
  ::v-deep(.el-input__inner) {
    height: 44px;
  }
  .captcha-item {
    ::v-deep(.el-form-item__content) {
      display: flex;
      justify-content: space-between !important;
      align-items: center;
      flex-wrap: nowrap;
      .el-input {
        width: 70%;
      }
    }
  }
}
.title {
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #212121;
  line-height: 20px;
  text-align: center;
}
.login-form {
  margin-top: 40px;
}
.login-btn {
  width: 100%;
  height: 44px;
  font-size: 18px;
  font-weight: 500;
}

.captcha {
  width: 100px;
  height: 44px;
  background: #eff4ff;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  cursor: pointer;
}
</style>

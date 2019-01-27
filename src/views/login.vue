<template>
  <div id="loginBody">
    <div class="mainbody">
      <h3 align="center">登录</h3>
      <input id="account" type="text" placeholder="请输入账户" v-model="accountText">
      <br>
      <input
        id="password"
        type="password"
        align="center"
        placeholder="请输入密码"
        v-model="passwordText"
      >
      <br>
      <button id="login" v-on:click="login()">登录</button>
      <br>
      <div style="width: 100%;text-align: center;margin-top: 16px">
        <a href="/signup" style="font-size: 16px;color: yellow;">即刻注册</a>
      </div>
    </div>
    <a href="/">
      <img src="../assets/img/hzl_logo.png" style="width: 8%;position: fixed;top:20px;left: 6%">
    </a>
  </div>
</template>

<script>
import { LOGIN } from "@/store/type/actions";
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      accountText: "",
      passwordText: ""
    };
  },
  computed: {
    ...mapState({
      errors: state => state.user.isLoginError
    })
  },
  methods: {
    login: async function() {
      await this.$store.dispatch(LOGIN, {
        email: this.accountText,
        password: this.passwordText
      });
      if (this.errors) {
        //fail to login
        this.$message({
          message: "用户名或密码错误",
          type: "error"
        });
        this.passwordText = "";
      } else {
        //success
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>

<style scoped>
#loginBody {
  width: 100%;
  min-height: 600px;
  background: #222;
  background-image: url("../assets/img/loginBackground.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  min-width: 1080px;
  padding-top: 10%;
}

.mainbody {
  margin-left: 31%;
  width: 34%;
  height: 309px;
  position: relative;
  padding: 35px 30px;
  color: black;
  border-radius: 4px;
  background: black;
  box-shadow: 1px 1px 4px #fff;
  opacity: 0.7;
}

input[type="text"] {
  width: 76%;
  margin-left: 11%;
  height: 28px;
  border-radius: 5px;
  font-size: 14px;
  padding: 7px;
  margin-top: 20px;
}

input[type="password"] {
  width: 76%;
  margin-left: 11%;
  height: 28px;
  min-height: 20px;
  border-radius: 5px;
  font-size: 14px;
  padding: 7px;
  margin-top: 30px;
}

button {
  width: 79%;
  height: 38px;
  border-radius: 15px;
  font-size: 20px;
  margin-left: 11%;
  margin-top: 8%;
  background-color: transparent;
  border-color: white;
  color: white;
}

button:disabled {
  background-color: lightgrey;
}

h3 {
  font-size: 21px;
  color: white;
  float: top;
  margin-bottom: 20px;
  margin-top: 16px;
}
</style>

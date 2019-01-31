<template>
  <div class="container">
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">注册</h3>
        <input id="nickname" type="text" style="margin-top: 20px;" align="center" placeholder="请输入昵称，长度在2到15个字符之间" v-model="nickname"><br>
        <input id="password" type="password" style="margin-top: 20px;" align="center" placeholder="请输入密码，长度在6到20个字符之间" v-model="password"><br>
        <input id="passwordConfirm" type="password" style="margin-top: 20px;" align="center" placeholder="确认密码" v-model="passwordConfirm"><br>
        <input id="email" type="text" style="margin-top: 20px" placeholder="请输入邮箱地址" v-model="email">
        <input id="identifyCode" type="text" style="margin-top: 20px;width: 40%" placeholder="请输入验证码" v-model="identifyCode">
        <button id="sendEmail" v-on:click="sendEmail()">获取验证码</button><br>
        <button id="signup" class="bigButton" v-on:click="register()">注册</button><br>
        <div style="width: 100%;text-align: center;margin-top: 20px">
          <a href="/login" style="font-size: 16px;color: yellow;">已有账号，立即登录</a>
        </div>

      </div>

    </div>
    <a href="/"><img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/hzl_logo.png" style="width: 8%;position: fixed;top:20px;left: 6%"></a>
  </div>
</template>

<script>
import { REGISTER } from "@/store/type/actions";
import { REGISTER_IDENTIFY } from "@/store/type/actions";
import { mapState } from "vuex";

export default {
  name: "signup",
  data() {
    return {
      nickname: "",
      password: "",
      passwordConfirm: "",
      email: "",
      identifyCode: ""
    };
  },
  computed: {
    ...mapState({
      registerResult: state => state.user.registerResult,
      identifyCodeHasSend: state => state.user.identifyCodeHasSend,
      token: state => state.user.token
    })
  },
  mounted: function() {
    let that = this;
    $("#nickname").change(function() {
      console.log(that.nickname);
      if (that.nickname.length < 2) {
        alert("用户名长度过短");
        $("#signup").attr("disabled", true);
        this.focus();
      } else if (that.nickname.length > 15) {
        alert("用户名长度过长");
        $("#signup").attr("disabled", true);
        this.focus();
      } else {
        $("#signup").attr("disabled", false);
      }
    });
    $("#password").change(function() {
      console.log(that.password);
      if (that.password.length < 6) {
        alert("密码长度过短");
        $("#signup").attr("disabled", true);
        this.focus();
      } else if (that.password.length > 20) {
        alert("密码长度过长");
        $("#signup").attr("disabled", true);
        this.focus();
      } else {
        $("#signup").attr("disabled", false);
      }
    });
    $("#passwordConfirm").change(function() {
      if (that.passwordConfirm != that.password) {
        alert("密码前后不一致");
        $("#signup").attr("disabled", true);
        this.focus();
      } else {
        $("#signup").attr("disabled", false);
      }
    });
  },

  methods: {
    register: async function() {
      await this.$store.dispatch(REGISTER, {
        email: this.email,
        nickname: this.nickname,
        password: this.password,
        identifyCode: this.identifyCode,
        token: this.token
      });
      console.log(this.registerResult);
      if (this.registerResult.code === 1) {
        this.$message({
          message: "注册成功",
          type: "success"
        });
        this.$router.push({ name: "login" });
      } else {
        //fail to login
        this.$message({
          message: this.registerResult.msg,
          type: "error"
        });
      }
    },

    sendEmail: async function() {
      await this.$store.dispatch(REGISTER_IDENTIFY, {
        user_email: this.email
      });
      console.log("SIGN UP: " + this.identifyCodeHasSend);
      if (this.identifyCodeHasSend === 0) {
        this.$message({
          message: "发送失败，请检查邮箱正确性",
          type: "error"
        });
      } else {
        //success
        $("#sendEmail").attr("disabled", true);
        let time = 60;
        let myScroll = setInterval(() => {
          time--;
          if (time >= 0) {
            $("#sendEmail").html(time + "s后可重发送");
          } else {
            $("#sendEmail").html("发送验证码");
            $("#sendEmail").attr("disabled", false); //倒计时结束能够重新点击发送的按钮
            clearTimeout(myScroll); //清除定时器
            time = 60; //设置循环重新开始条件
          }
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  background: #222;
  background-image: url("http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/loginBackground.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0;
}

.mainbox {
  -webkit-box-align: center;
  align-items: center;
  padding-top: 100px;
}

.mainbody {
  width: 36%;
  height: 525px;
  position: relative;
  margin: auto;
  padding: 35px 30px;
  color: black;
  border-radius: 4px;
  background: black;
  box-shadow: 1px 1px 4px #fff;
  opacity: 0.6;
}

input[type="text"] {
  width: 78%;
  margin-left: 11%;
  height: 28px;
  min-height: 20px;
  border-radius: 5px;
  font-size: 14px;
  padding: 7px;
}

input[type="password"] {
  width: 78%;
  margin-left: 11%;
  height: 28px;
  min-height: 20px;
  border-radius: 5px;
  font-size: 14px;
  padding: 7px;
}

button {
  vertical-align: 10%;
  width: 30%;
  height: 35px;
  border-radius: 15px;
  font-size: 14px;
  margin-left: 5%;
  background-color: transparent;
  border-color: white;
  color: white;
}

.bigButton {
  width: 78%;
  height: 35px;
  border-radius: 15px;
  font-size: 20px;
  margin-left: 11%;
  margin-top: 8%;
  background-color: transparent;
  border-color: white;
  color: white;
}
</style>

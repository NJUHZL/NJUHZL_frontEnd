<template>
  <div class="container">
    <div class="mainbox">
      <div class="mainbody">
        <h3 style="color: white;float: top;" align="center">注册</h3>
        <input id="nickname" type="text" style="margin-top: 20px;" align="center" placeholder="请输入昵称，长度在2到15个字符之间"><br>
        <input id="password" type="password" style="margin-top: 20px;" align="center" placeholder="请输入密码，长度在6到20个字符之间"><br>
        <input id="passwordConfirm" type="password" style="margin-top: 20px;" align="center" placeholder="确认密码"><br>
        <input id="email" type="text" style="margin-top: 20px" placeholder="请输入邮箱地址">
        <button id="signup" class="bigButton" v-on:click="signup()">注册</button><br>
        <div style="width: 100%;text-align: center;margin-top: 20px">
          <a href="/login" style="font-size: 16px;color: yellow;">已有账号，立即登录</a>
        </div>

      </div>

    </div>
    <a href="/"><img src="../assets/img/hzl_logo.png" style="width: 8%;position: fixed;top:20px;left: 6%"></a>
  </div>
</template>

<script>
export default {
  name: "signup",
  mounted: function() {
    $("#account").change(function() {
      if ($("#account").val().length < 2) {
        alert("用户名长度过短");
        $("#signup").attr("disabled", true);
        this.focus();
      } else if ($("#account").val().length > 15) {
        alert("用户名长度过长");
        $("#signup").attr("disabled", true);
        this.focus();
      } else {
        $("#signup").attr("disabled", false);
      }
    });
    $("#password").change(function() {
      if ($("#password").val().length < 6) {
        alert("密码长度过短");
        $("#signup").attr("disabled", true);
        this.focus();
      } else if ($("#password").val().length > 20) {
        alert("密码长度过长");
        $("#signup").attr("disabled", true);
        this.focus();
      } else {
        $("#signup").attr("disabled", false);
      }
    });
    $("#passwordConfirm").change(function() {
      if ($("#passwordConfirm").val() != $("#password").val()) {
        alert("密码前后不一致");
        $("#signup").attr("disabled", true);
        this.focus();
      } else {
        $("#signup").attr("disabled", false);
      }
    });
  },

  methods: {
    signup: function() {
      var ac = $("#account").val();
      var pw = $("#password").val();
      var phone = $("#phone").val();
      var email = $("#email").val();
      this.$axios
        .post("user/signup", {
          account: ac,
          password: pw,
          phone: phone,
          email: email
        })
        .then(res => {
          var data = res.data;
          if (data.result == 1) {
            alert("注册成功!");
            this.$router.replace("/login");
          } else if (data.result == 2) {
            alert("用户名重复，请另取");
            $("account").focus();
          } else {
            alert("请重试");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendEmail: function() {
      var email = $("#email").val();
      this.$axios
        .post("http://localhost:8000/api/auth/signup/sendEmail", {
          email: email
        })
        .then(res => {
          var data = res.data;
          if (data.result == 1) {
            $("#sendEmail").attr("disabled", true);
            var time = 60;
            var myScroll = setInterval(() => {
              time--;
              if (time >= 0) {
                $("#sendEmail").html(time + "s后重发送");
              } else {
                $("#sendEmail").html("发送验证码");
                $("#sendEmail").attr("disabled", false); //倒计时结束能够重新点击发送的按钮
                clearTimeout(myScroll); //清除定时器
                time = 60; //设置循环重新开始条件
              }
            }, 1000);
          } else if (data.result == 2) {
            alert("邮箱地址有误");
          } else {
            alert("发送失败");
          }
        });
    },
    sendMessage: function() {
      var phone = $("#phone").val();
      this.$axios
        .post("http://localhost:8000/api/auth/signup/sendMessage", {
          phone: phone
        })
        .then(res => {
          var data = res.data;
          if (data.result == 1) {
            $("#sendMessage").attr("disabled", true);
            var time = 60;
            var myScroll = setInterval(() => {
              time--;
              if (time >= 0) {
                $("#sendMessage").html(time + "s后重发送");
              } else {
                $("#sendMessage").html("发送验证码");
                $("#sendMessage").attr("disabled", false); //倒计时结束能够重新点击发送的按钮
                clearTimeout(myScroll); //清除定时器
                time = 60; //设置循环重新开始条件
              }
            }, 1000);
          } else if (data.result == 2) {
            alert("手机号码有误");
          } else {
            alert("发送失败");
          }
        });
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  background: #222;
  background-image: url("../assets/img/loginBackground.jpg");
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
  height: 425px;
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

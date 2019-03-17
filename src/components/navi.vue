<template>
  <div class="whole" id="nav" style="width:100%;float: top">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="transparent"
      text-color="#fff"
      active-text-color="lightskyblue"
      style="padding-left: 10%;padding-right: 10%;border: none"
      id="navBody"
    >
      <el-menu-item index="1" style="padding-bottom: 2px">
        <a href="/">
          <img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/hzl_logo.png" style="width: 58px">
        </a>
      </el-menu-item>
      <el-menu-item id="evaluate" index="3">
        <a href="/">首页</a>
      </el-menu-item>
      <el-menu-item id="guide" index="4">
        <a href="/news">新闻</a>
      </el-menu-item>
      <el-menu-item index="5" disabled>
        <a href="/courses">课程</a>
      </el-menu-item>
      <el-menu-item index="6" style="float: right">
        <a href="/login" id="login">登录</a>
        /
        <a href="/signup" id="signup">注册</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  name: "navi",
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {
    if (localStorage.njuhzl_state === "online") {
      let that = this;
      $("#login").text("切换账号");
      $("#signup").attr("href", "#");
      $("#signup").text("退出登录");
      $("#signup").on("click", function() {
        console.log("logout");
        localStorage.removeItem("njuhzl_state");
        localStorage.removeItem("njuhzl_root");
        that.reload();
      });
    }
  }
};
</script>

<style scoped>
.whole {
  z-index: 10;
  background-color: #1a1818;
}
a {
  text-decoration: none;
}
.el-menu-item a {
  color: white;
}
</style>

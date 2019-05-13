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
        <router-link to="/">
          <a>首页</a>
        </router-link>
      </el-menu-item>
      <el-menu-item id="guide" index="4">
        <router-link to="/news">
          <a>新闻</a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="5" disabled>
        <router-link to="/courses">
          <a>课程</a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="7" style="float: right" v-if="online">
        <router-link to="/login">
          <a>切换账号</a>
        </router-link>
        /
        <router-link to="/">
          <a @click="logout">退出登录</a>
        </router-link>
      </el-menu-item>
      <el-menu-item index="6" style="float: right" v-else>
        <router-link to="/login">
          <a>登录</a>
        </router-link>
        /
        <router-link to="/signup">
          <a>注册</a>
        </router-link>
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
      activeIndex: "1",
        online:false
    };
  },
  created() {
      console.log(localStorage.njuhzl_state);
    if (localStorage.njuhzl_state === "online") {
        this.online=true;
        console.log(this.online===true);
    }else{
        this.online=false;
    }
  },
    methods:{
        logout(){
            console.log("logout");
            localStorage.removeItem("njuhzl_state");
            localStorage.removeItem("njuhzl_root");
            this.online=false;
            this.reload();
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

<template>
  <div class="whole" id="nav" style="width:100%;float: top">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="transparent"
      text-color="#fff"
      active-text-color="lightskyblue"
      style="padding-left: 10%;padding-right: 10%;border: none"
      id="navBody"
    >
      <el-menu-item index="1" style="padding-bottom: 2px">
        <a href="/">
          <img src="../assets/img/hzl_logo.png" style="width: 58px">
        </a>
      </el-menu-item>
      <el-menu-item id="evaluate" index="3">
        <a href="/">首页</a>
      </el-menu-item>
      <el-menu-item id="guide" index="4">
        <a href="/news">新闻</a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="/courses">课程</a>
      </el-menu-item>
      <el-menu-item index="6" style="float: right" id="login">
        <a href="/login">登录</a>
        /
        <a href="/signup">注册</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navi",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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

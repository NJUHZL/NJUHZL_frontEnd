<template>
    <div class="navi">
        <img class="logo" :src="logoURL">
        <el-menu default-active="1">
            <el-menu-item index="sshc">
                <div class="menu-item">
                    <div>视频分类1</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
            <el-menu-item index="kshxw">
                <div class="menu-item">
                    <div>视频分类2</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
            <el-menu-item index="yjzx">
                <div class="menu-item">
                    <div>视频分类3</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
            <el-menu-item index="zlbg">
                <div class="menu-item">
                    <div>视频分类4</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "leftNaviOfCourses",
  data() {
    return {
      logoURL: require("../assets/img/realistic.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.navi {
  width: 250px;
  height: 200px;
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  .logo {
    width: 200px;
  }
  .menu-item {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .number {
    }
  }
}
</style>

<template>
  <div class="main">
    <div class="navi">
      <el-menu default-active="1">
        <el-menu-item index="1">
          <div class="menu-item">
            <div>事实核查</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
        <el-menu-item index="2">
          <div class="menu-item">
            <div>可视化新闻</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
        <el-menu-item index="3">
          <div class="menu-item">
            <div>研究中心</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
        <el-menu-item index="4">
          <div class="menu-item">
            <div>每周质量报告</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="items">
      <news-item header="南京大学软件学院迎新晚会"></news-item>
      <news-item header="南京大学软件学院迎新晚会"></news-item>
      <news-item header="南京大学软件学院迎新晚会"></news-item>
      <news-item header="南京大学软件学院迎新晚会"></news-item>
    </div>
  </div>
</template>

<script>
import NewsItem from "./components/newsItem";

export default {
  name: "News",
  components: { NewsItem }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  padding: 30px 50px 0;
  .navi {
    width: 250px;
    margin-left: 80px;
    .menu-item {
      display: flex;
      justify-content: space-between;
      .number {
      }
    }
  }
  .items {
    margin-right: 200px;
  }
}
</style>

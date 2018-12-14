<template>
  <div class="main">
    <div class="navi">
      <img class="logo" :src="logoURL">
      <el-menu default-active="1" @select="fetchOneClassOfPassageList">
        <el-menu-item index="sshc">
          <div class="menu-item">
            <div>事实核查</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
        <el-menu-item index="kshxw">
          <div class="menu-item">
            <div>可视化新闻</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
        <el-menu-item index="yjzx">
          <div class="menu-item">
            <div>研究中心</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
        <el-menu-item index="zlbg">
          <div class="menu-item">
            <div>每周质量报告</div>
            <div class="number">1</div>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="items">
      <news-item></news-item>
      <news-item></news-item>
      <news-item></news-item>
      <news-item></news-item>
      <news-item
        v-for="(item, index) in oneClassOfPassageList"
        v-bind:key="index"
        :title="item.title"
        :newsSource="item.newsSource"
        :newsClass="item.newsClass"
        :contentShort="item.contentShort"
      ></news-item>
    </div>
  </div>
</template>

<script>
import NewsItem from "./components/newsItem";
import { mapState } from "vuex";
import {
  FETCH_ONE_CLASS_OF_PASSAGE_LIST,
  SET_CURRENT_CLASS
} from "@/store/type/actions.js";

export default {
  name: "News",
  components: { NewsItem },
  data() {
    return {
      logoURL: require("../../assets/img/realistic.png")
    };
  },
  computed: {
    ...mapState({
      currentClass: state => state.passage.currentClass,
      oneClassOfPassageList: state => state.passage.oneClassOfPassageList
    })
  },
  methods: {
    fetchOneClassOfPassageList(key) {
      this.$store.dispatch(FETCH_ONE_CLASS_OF_PASSAGE_LIST, key);
      this.$store.dispatch(SET_CURRENT_CLASS, key);
    }
  },
  async mounted() {
    await this.$store.dispatch(FETCH_ONE_CLASS_OF_PASSAGE_LIST, "sshc");
    await this.$store.dispatch(SET_CURRENT_CLASS, "sshc");
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
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
  .items {
    margin-right: 300px;
  }
}
</style>

<template>
  <div class="navi">
    <img class="logo" :src="logoURL">
    <el-menu default-active="1" @select="fetchOneClassOfPassageList">
      <el-menu-item index="事实核查">
        <div class="menu-item">
          <div>事实核查</div>
          <div class="number">1</div>
        </div>
      </el-menu-item>
      <el-menu-item index="可视化新闻">
        <div class="menu-item">
          <div>可视化新闻</div>
          <div class="number">1</div>
        </div>
      </el-menu-item>
      <el-menu-item index="研究中心">
        <div class="menu-item">
          <div>研究中心</div>
          <div class="number">1</div>
        </div>
      </el-menu-item>
      <el-menu-item index="质量报告">
        <div class="menu-item">
          <div>每周质量报告</div>
          <div class="number">1</div>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  FETCH_ONE_CLASS_OF_PASSAGE_LIST,
  SET_CURRENT_CLASS
} from "@/store/type/actions.js";
export default {
  name: "LeftNavi",
  data() {
    return {
      logoURL: require("../assets/img/realistic.png")
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
      this.$router.push("/news");
    }
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

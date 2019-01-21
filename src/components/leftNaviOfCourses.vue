<template>
    <div class="navi">
        <img class="logo" :src="logoURL">
        <el-menu default-active="1"  @select="fetchOneClassOfCourseList">
            <el-menu-item index="种类1">
                <div class="menu-item">
                    <div>视频分类1</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
            <el-menu-item index="种类2">
                <div class="menu-item">
                    <div>视频分类2</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
            <el-menu-item index="种类3">
                <div class="menu-item">
                    <div>视频分类3</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
            <el-menu-item index="种类4">
                <div class="menu-item">
                    <div>视频分类4</div>
                    <div class="number">1</div>
                </div>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from "vuex";
import {
  FETCH_ONE_CLASS_OF_COURSE_LIST,
  SET_CURRENT_CLASS_OF_COURSE
} from "@/store/type/actions.js";
export default {
  name: "leftNaviOfCourses",
  data() {
    return {
      logoURL: require("../assets/img/realistic.png")
    };
  },
  computed: {
    ...mapState({
      currentClass: state => state.course.currentClass,
      oneClassOfPassageList: state => state.course.oneClassOfCourseList
    })
  },
  methods: {
    fetchOneClassOfCourseList(key) {
      this.$store.dispatch(FETCH_ONE_CLASS_OF_COURSE_LIST, key);
      this.$store.dispatch(SET_CURRENT_CLASS_OF_COURSE, key);
      this.$router.push("/courses");
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

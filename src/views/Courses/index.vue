<template>
    <div class="main">
        <div class="navi">
            <leftNaviOfCourses></leftNaviOfCourses>
        </div>
        <div class="courseList">
            <courseItem
                    v-for="(item, index) in oneClassOfCourseList"
                    v-bind:key="index"
                    :pictureURL="item.pictureURL"
                    :videoUrl="item.videoUrl"
                    :title="item.title"
                    :courseSource="item.courseSource"
                    :courseClass="item.courseClass"
                    :postTime="item.postTime"
                    :content="item.content"
                    :keywords="item.keywords"
                    :likeCount="item.likeCount"
                    :collectCount="item.collectCount"
                    :commentCount="item.commentCount"
            ></courseItem>
        </div>

        <div id="cover">
            <h2>点击黑色背景退出播放</h2>
        </div>
        <div id="video">
            <video style="width: 100%;" controls>
                <source :src="currentVideo" type="video/mp4">
                <source :src="currentVideo" type="video/ogg">
                <source :src="currentVideo" type="video/webm">
            </video>
        </div>
    </div>
</template>

<script>
import courseItem from "./components/courseItem";
import leftNaviOfCourses from "@/components/leftNaviOfCourses";
import { mapState } from "vuex";
import {
  FETCH_ONE_CLASS_OF_COURSE_LIST,
  SET_CURRENT_CLASS_OF_COURSE
} from "@/store/type/actions.js";

export default {
  name: "index",
  components: { leftNaviOfCourses, courseItem },
  data() {
    return {
      currentVideo: require("../../assets/test.mp4")
    };
  },
  computed: {
    ...mapState({
      currentClass: state => state.course.currentClass,
      oneClassOfCourseList: state => state.course.oneClassOfCourseList
    })
  },
  methods: {
    fetchOneClassOfCourseList(key) {
      this.$store.dispatch(FETCH_ONE_CLASS_OF_COURSE_LIST, key);
      this.$store.dispatch(SET_CURRENT_CLASS_OF_COURSE, key);
    },
    playVideo(url) {
      this.currentVideo = url;
      $("#cover").css("display", "inherit");
      $("#video").css("display", "inherit");
    }
  },
  async mounted() {
    $("#cover").click(function() {
      $("#cover").css("display", "none");
      $("#video").css("display", "none");
      $("video").trigger("pause");
    });
    await this.$store.dispatch(
      FETCH_ONE_CLASS_OF_COURSE_LIST,
      this.currentClass
    );
    await this.$store.dispatch(SET_CURRENT_CLASS_OF_COURSE, this.currentClass);
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 30px 0;
  .navi {
    max-width: 250px;
    max-height: 200px;
  }
}

#cover {
  width: 100%;
  height: 100%;
  z-index: 20;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.9;
  display: none;
}

h2 {
  color: white;
  text-align: center;
  font-family: SimSun-ExtB;
}

#video {
  width: 70%;
  left: 15%;
  z-index: 21;
  position: fixed;
  top: 100px;
  display: none;
}

.navi {
  display: inline-block;
  margin-left: 9%;
}

.courseList {
  display: inline-block;
  vertical-align: top;
  width: 54%;
  margin-left: -14%;
}
</style>

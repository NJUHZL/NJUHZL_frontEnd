<template>
    <div class="main">
        <div class="navi">
            <left-navi></left-navi>
        </div>
        <courseItem></courseItem>
        <courseItem></courseItem>
        <!--<div class="items">-->
            <!--<news-item-->
                    <!--v-for="(item, index) in oneClassOfPassageList"-->
                    <!--v-bind:key="index"-->
                    <!--:title="item.title"-->
                    <!--:newsSource="item.newsSource"-->
                    <!--:newsClass="item.newsClass"-->
                    <!--:contentShort="item.contentShort"-->
            <!--&gt;</news-item>-->
        <!--</div>-->
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
import LeftNavi from "@/components/LeftNavi";
// import { mapState } from "vuex";
// import {
//     FETCH_ONE_CLASS_OF_Courses_LIST,
//     SET_CURRENT_Courses
// } from "@/store/type/actions.js";

export default {
  name: "index",
  components: { LeftNavi, courseItem },
  data() {
    return {
      currentVideo: require("../../assets/test.mp4")
    };
  },
  mounted: function() {
    $("#cover").click(function() {
      $("#cover").css("display", "none");
      $("#video").css("display", "none");
      $("video").trigger("pause");
    });
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
}
</style>

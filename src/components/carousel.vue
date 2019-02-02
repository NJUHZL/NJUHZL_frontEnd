<template>
    <div class="block" style="width:79%;margin-left: 10.5%;margin-bottom: 30px;">
        <!--<el-carousel height="500px">-->
            <!--<el-carousel-item v-for="item in carouselPassages" :key="item.index">-->
                <!--<img :src="item.src" style="width: 100%;height: 100%;z-index: -1"/>-->
                <!--<h1 style="height: 30px">{{item.name}}</h1>-->
                <!--<div class="back"></div>-->
            <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <el-carousel height="500px">
            <el-carousel-item v-for="item in hotPassage" :key="item.id">
                <img :src="item.coverPicture" style="width: 100%;z-index: -1"/>
                <h1 style="height: 30px" @click="showDetail(item.id)">{{item.title}}</h1>
                <div class="back"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_HOT_PASSAGE } from "@/store/type/actions";

export default {
  name: "carousel",
  data() {
    return {
      carouselPassages: [
        {
          src:
            "http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/realistic.png",
          name: "文章1",
          index: 1
        },
        {
          src: "http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/banner.png",
          name: "文章2",
          index: 2
        }
      ]
    };
  },
  methods: {
    showDetail(passageID) {
      console.log(passageID);
      localStorage.njuhzl_passageID = passageID;
      this.$router.push({ name: "passageDetail" });
    }
  },
  computed: {
    ...mapState({
      hotPassage: state => state.passage.hotPassage
    })
  },

  async mounted() {
    //挂载后拉取数据
    await this.$store.dispatch(FETCH_HOT_PASSAGE);
  }
};
</script>

<style scoped>
h1 {
  color: white;
  position: absolute;
  float: bottom;
  bottom: 0;
  margin-left: 10%;
  font-family: "Simsun";
  z-index: 1;
  cursor: pointer;
}
.back {
  position: absolute;
  float: bottom;
  bottom: 0;
  z-index: 0;
  opacity: 0.5;
  background-color: black;
  height: 70px;
  width: 100%;
}
</style>

<template>
  <div>
    <banner class="banner"/>
    <div class="page-content">
      <div style="text-align: center">
        <div class="el-card is-always-shadow function-card">
          <img src="../assets/img/事实核查.png"/>
        </div>
        <div class="el-card is-always-shadow function-card">
          <img src="../assets/img/可视化新闻.png"/>
        </div>
        <div class="el-card is-always-shadow function-card">
          <img src="../assets/img/研究中心.png"/>
        </div>
        <div class="el-card is-always-shadow function-card">
          <img src="../assets/img/质量报告.png"/>
        </div>
      </div>
    </div>
    <carousel style="margin-top: 90px"></carousel>
    <div style="margin-left: 10%;margin-top: 80px">
      <abstract v-for="(item, id) in latestPassage"
                 v-bind:key="id"
                 :title="item.title"
                 :abstract="item.script"
                 :postTime="item.date"
                @click="openArticle(item.id)"
      ></abstract>
      <!--<abstract></abstract>-->
      <!--<abstract></abstract>-->
      <img style="width: 2%;display: inline-block;vertical-align: top;padding-top: 10px" src="../assets/img/commentIcon.png">
      <div style="width: 18%;display: inline-block;vertical-align: top">
        <recommendComment v-for="(item, id) in latestComments"
                          v-bind:key="id"
                          :comment="item.comment"
                          :postTime="item.postTime"
                          @click="openArticle(item.passageID)"
        ></recommendComment>
      </div>
    </div>
    <div style="text-align: center;margin-top: 50px">
      <div class="introBlock">
        <h2><i class="el-icon-success" style="color: lightblue"></i>  新闻核实</h2>
        <p>“核真录”始终免费开放的功能，为公众提供免费的新闻核实、查验服务，对各种假新闻、错误信息、谣言等进行核查和澄清。</p>
        <a>更多信息 <p style="font-size: 10px;display: inline-block">>></p></a>
      </div>
      <div class="introBlock">
        <h2><i class="el-icon-success" style="color: lightblue"></i>  课程培训</h2>
        <p>“核真录”开拓新闻素养课程培训作为会员订阅付费内容，我们将长期连续提供专业的新闻素养教学课程及实施案例分析。</p>
        <a>更多信息 <p style="font-size: 10px;display: inline-block">>></p></a>
      </div>
      <div class="introBlock">
        <h2><i class="el-icon-success" style="color: lightblue"></i>  行研报告</h2>
        <p>“核真录”开拓媒介研究报告作为会员订阅付费内容，我们将以会员付费订阅的方式定期向订阅的会员推送最前沿的媒介研究报告。</p>
        <a>更多信息 <p style="font-size: 10px;display: inline-block">>></p></a>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/components/banner.vue";
import carousel from "@/components/carousel.vue";
import abstract from "@/components/abstract.vue";
import recommendComment from "@/components/recommendComment.vue";
import { mapState } from "vuex";
import { FETCH_LATEST_PASSAGE } from "@/store/type/actions";
import { FETCH_LATEST_COMMENTS } from "@/store/type/actions";

export default {
  name: "Home",
  components: { banner, carousel, abstract, recommendComment },
  methods: {
    openArticle(passageID) {
      localStorage.njuhzl_passageID = passageID;
      this.$router.push({ name: "article" });
    }
  },
  computed: {
    ...mapState({
      latestPassage: state => state.home.latestPassage,
      latestComments: state => state.home.latestComments
    })
  },

  async mounted() {
    //挂载后拉取数据
    $("#nav").css("backgroundColor", "transparent");
    await this.$store.dispatch(FETCH_LATEST_PASSAGE);
    await this.$store.dispatch(FETCH_LATEST_COMMENTS);
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  z-index: -1;
  top: -58px;
}
.page-content {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 100%;
  margin: 20px 40px;
}

.function-card {
  width: 20%;
  text-align: center;
  display: inline-block;
  padding: 5px;
  margin-left: 0.5%;
  margin-right: 0.5%;
}

.function-card img {
  margin: 0;
  width: 100%;
  height: 100%;
}

.introBlock {
  width: 22.5%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  display: inline-block;
  padding: 10px;
  vertical-align: top;
}

.introBlock a {
  font-size: 12px;
  color: #036e8b;
  float: left;
}

.introBlock h2 {
  padding-right: 30px;
}

p {
  text-align: left;
  color: #898989;
}
</style>

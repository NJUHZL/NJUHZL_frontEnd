<template>
    <div class="main">
      <div class="navi">
        <LeftNavi/>
      </div>
      <div class="body">
        <div class="top">
          <div class="head">
            <div class="title">{{passageInfo.title}}</div>
            <div class="info">{{passageInfo.newsSource}},  {{passageInfo.newsClass}},  {{passageInfo.postTime}},
              {{passageInfo.keyword1}}, {{passageInfo.keyword2}}, {{passageInfo.keyword3}}</div>
          </div>
        </div>
        <div class="block" style="width:90%;margin-left: 5%;">
          <el-carousel>
            <el-carousel-item v-for="item in passageInfo.picUrls" :key="item">
              <img :src="item" style="width: 100%"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="content" v-html="passageInfo.content"></div>
      </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_PASSAGE_DETAIL } from "@/store/type/actions";
import LeftNavi from "../components/LeftNavi";

export default {
  name: "PassageDetail",
  components: { LeftNavi },
  computed: {
    ...mapState({
      passageInfo: state => state.passage.passageInfo
    })
  },
  //   data(){
  //     return{
  //         passageInfo:{
  //             title:"标题",
  //             newsSource: "NJU核真录",
  //             newsClass: "事实核查",
  //             postTime: "2018-12-12 12:30",
  //             keyword1:"关键词",
  //             keyword2:"关键词",
  //             keyword3:"关键词",
  //             picUrls:["http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/realistic.png"],
  //             content:"青崖寂无声\n" +
  //             "浮云抱孤城，\n" +
  //             "星枫散漫群山中,溪涧知鸣虫。\n" +
  //             "桃树下几盅，\n" +
  //             "醺醉白鹿脚程\n" +
  //             "我寄轻舟寻踪\n" +
  //             "入烟霞朦胧.\n" +
  //             "(昆曲):仙境枕石对长空，\n" +
  //             "总觉一点痴心欠奉。\n" +
  //             "世间种种,情有独钟，\n" +
  //             "皆是刹那,心弦被拨弄，\n" +
  //             "余生都为，那片刻花月相逢。\n" +
  //             "我用情下笔，装作从容,\n" +
  //             "对抗岁月、山海变更，\n" +
  //             "你在心里,栩栩如生，\n" +
  //             "也算永恒。",
  //         }
  //     }
  //   }
  async mounted() {
    //挂载后拉取数据
    await this.$store.dispatch(FETCH_PASSAGE_DETAIL, {
      id: parseInt(localStorage.njuhzl_passageID)
    });
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 30px 0;
  .navi {
    display: inline-block;
    margin-left: 9%;
  }
}

.body {
  display: inline-block;
  vertical-align: top;
  width: 54%;
  margin-left: 10%;
  position: relative;
}

.top {
  width: 100%;
  height: 140px;
}
.head {
  margin-top: 20px;
  height: auto;
  float: left;
}
.title {
  /*font-size: 50px;*/
  font-size: 30px;
}
.info {
  margin-top: 10px;
  /*font-size: 16px;*/
  font-size: 14px;
  color: #036e8b;
}
.content {
  width: 100%;
  height: auto;
  margin-top: 40px;
  /*font-size: 22px;*/
  font-size: 17px;
  line-height: 32px;
  text-indent: 2em;
  margin-bottom: 60px;
}
</style>

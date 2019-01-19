<template>
  <div class="main">
    <div class="navi">
      <left-navi/>
    </div>
    
    <div class="body">
      <div class="top">
        <div class="head">
          <div class="title">{{pageInfo.title}}</div>
          <div class="info">{{pageInfo.newsSource}}, {{pageInfo.newsClass}}, {{pageInfo.postDate}} {{pageInfo.postTime}}, {{pageInfo.keyword}}</div>
        </div>
        <div class="calendar">
          <div class="month">{{Month}}</div>
          <div class="day">{{Day}}</div>
        </div>
      </div>
      <div class="picBox"></div>
      <div class="content" v-html="pageInfo.content"></div>
      <div class="comment">
        <div class="head">全部评论</div>
        <div class="commentList">
          <Lev1 v-for="item in pageInfo.comments" v-bind:comment="item"></Lev1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavi from "../../components/LeftNavi";
import Lev1 from "../../components/Comment/Lev1";
import {
  FETCH_ONE_CLASS_OF_PASSAGE_LIST,
  SET_CURRENT_CLASS
} from "@/store/type/actions.js";

export default {
  name: "Article",
  components: {
    // LeftNav,
    LeftNavi,
    Lev1
  },
  data() {
    return {
      Load: function(_this) {
        _this.$axios
          .get(
            "https://www.easy-mock.com/mock/5beace67e551c21d755b9693/articles"
          )
          .then(function(response) {
            // console.log(response.data);
            _this.pageInfo = response.data.data;
            console.log(_this.pageInfo);
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      pageInfo: {},
      Month: "",
      Day: "12"
    };
  },
  computed: {},
  methods: {},
  mounted: function() {
    console.log("加载成功");
    this.Load(this);

    var time = new Date();
    var _this = this;
    switch (time.getMonth()) {
      case 0:
        this.Month = "Jan";
        break;
      case 1:
        this.Month = "Feb";
        break;
      case 2:
        this.Month = "Mar";
        break;
      case 3:
        this.Month = "Apr";
        break;
      case 4:
        this.Month = "May";
        break;
      case 5:
        this.Month = "June";
        break;
      case 6:
        this.Month = "July";
        break;
      case 7:
        this.Month = "Aug";
        break;
      case 8:
        this.Month = "Sept";
        break;
      case 9:
        this.Month = "Oct";
        break;
      case 10:
        this.Month = "Nov";
        break;
      case 11:
        this.Month = "Dec";
        break;
    }
    this.Day = time.getDate();
  }
  //日期显示
};
</script>

<style lang="css" scoped>
.main{
  display: flex;
  justify-content: center;
  position: relative;
  /*left: 50%;*/
  /*margin-left: 120px;*/
  margin-top: 30px;
}
.navi{
  /*margin-left: 100px;*/
}
.body{
  width: 800px;
  /*height:4000px;*/
  height: auto;
  margin-left: 120px;
  margin-bottom: 200px;
  /*border:solid black 1px;*/
  /*float:left;*/
}
.top{
  width: 100%;
  height: 140px;
}
.head{
  margin-top: 20px;
  height: auto;
  float:left;
}
.title{
  font-size: 50px;
}
.info{
  margin-top: 10px;
  font-size: 16px;
  color: #036e8b;
}
.calendar{
  float: right;
  height: 80px;
  width: 70px;
  background-color:#f7f8f8;
  color: #3e3a39;
  margin-top: 30px;
  /*margin-right:30px;*/
}
.calendar .month{
  font-size: 22px;
  width: 100%;
  text-align: center;
  margin-top: 5px;
}
.calendar .day{
  font-size: 26px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-top: 5px;
}

.picBox{
  width: 100%;
  height: 400px;
  background-color: lightgray;
}
.content{
  width: 100%;
  height: auto;
  margin-top: 40px;
  font-size: 22px;
  line-height: 32px;
  text-indent: 2em;
  margin-bottom: 60px;
}
.comment{
  border-top: solid #dcdddd 2px;
  height: auto;
  padding-top: 10px;
}
.comment .head{
  width: 100%;
  height: auto;
  font-size: 32px;
  color: #898989;
  margin-bottom: 30px;
  display: block;
  /*font-weight: bold;*/
}
.comment .commentList{
  width: 100%;
  height: auto;
  margin-top: 80px;
}


</style>

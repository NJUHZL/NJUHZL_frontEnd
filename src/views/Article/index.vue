<template>
  <div class="main">
    <LeftNav></LeftNav>
    <div class="body">
      <div class="top">
        <div class="head">
          <div class="title">{{title}}</div>
          <div class="info">{{newsSource}}, {{newsClass}}, {{postDate}} {{postTime}}, {{keyword}}</div>
        </div>
        <div class="calendar">
          <div class="month">May</div>
          <div class="day">19</div>
        </div>
      </div>
      <div class="picBox"></div>
    </div>
  </div>
</template>

<script>
import LeftNav from "./LeftNav";
import {
  FETCH_ONE_CLASS_OF_PASSAGE_LIST,
  SET_CURRENT_CLASS
} from "@/store/type/actions.js";

export default {
  name: "Article",
  components: {
      LeftNav,
  },
  data() {
    return {
      passageID:"xxx",
      title:"南京大学软件学院迎新晚会",
      newsSource: "南京大学网站",
      newsClass: "事实核查",
      postDate: "2018-12-12",
      postTime: "12:30",
      keyword:"关键词",
      pictureURL:["a.png","b.png","c.png"],
      content:"文章正文",
      comments:[
          {
              userID:"蜘蛛侠",
              userPic:"head.png", //用户头像图片
              postDate:"2018-12-12",
              postTime:"14:25",
              content:"评论内容",
              secondComments:[
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              }
              ]  //楼中楼评论
          }
      ]
    };
  },
  computed: {
   
  },
  methods: {
    
  },

};
</script>

<style lang="css" scoped>
.main{
  display: flex;
  position: relative;
  /*left: 50%;*/
  margin-left: 120px;
}
.body{
  width: 800px;
  height:4000px;
  /*border:solid black 1px;*/
  /*float:left;*/
}
.top{
  width: 100%;
  height: 140px;
}
.head{
  margin-top: 20px;
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

</style>

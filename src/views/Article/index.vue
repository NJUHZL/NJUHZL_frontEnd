<template>
  <div class="main">
    <div class="navi">
      <left-navi/>
    </div>
    
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
      <div class="content" v-html="content"></div>
      <div class="comment">
        <div class="head">全部评论</div>
        <div class="commentList">
          <Lev1 v-for="item in comments" v-bind:comment="item"></Lev1>
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
      Lev1,
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
      content:"<p>中央军委军事工作会议4日在京召开。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。习近平强调，全军要坚持以新时代中国特色社会主义思想为指导，深入贯彻党的十九大和十九届二中、三中全会精神，深入贯彻新时代党的强军思想，深入贯彻新时代军事战略方针，在新的起点上做好军事斗争准备工作，开创强军事业新局面。</p>  <p>习近平在讲话中指出，党的十八大以来，面对错综复杂的国内外形势和艰巨繁重的军事任务，党中央和中央军委审时度势、统揽全局，带领全军锐意进取、攻坚克难，军事工作在斗争中加强、在创新中发展，取得许多标志性、开创性、历史性重大成就。全军以坚定意志品质、灵活战略策略、有力军事行动，坚决维护国家主权、安全、发展利益，经受住了复杂形势和严峻斗争考验。 </p> <p>习近平强调，当今世界正面临百年未有之大变局，我国发展仍处于重要战略机遇期，同时各种可以预料和难以预料的风险挑战增多。全军要正确认识和把握我国安全和发展大势，强化忧患意识、危机意识、打仗意识，扎扎实实做好军事斗争准备各项工作，坚决完成党和人民赋予的使命任务。</p><p>习近平指出，要把新时代军事战略思想立起来，把新时代军事战略方针立起来，把备战打仗指挥棒立起来，把抓备战打仗的责任担当立起来。要强化战斗队思想，坚持战斗力这个唯一的根本的标准，各项工作和建设、各方面力量和资源都要聚焦军事斗争准备、服务军事斗争准备，推动军事斗争准备工作有一个很大加强。</p><p>习近平强调，要深化战争和作战筹划，确保一旦有事能快速有效应对。要加快推进联合作战指挥体系建设，提升联合作战指挥能力。要加强新型作战力量建设，增加新质战斗力比重。要大抓实战化军事训练，提高练兵备战质量和水平。要坚持问题导向，对突出短板弱项要扭住不放、持续用力，一个问题一个问题解决，确保取得成效。</p> <p>习近平指出，中央和国家机关各部门、地方各级党委和政府要支持国防和军队建设，共同把我们这支英雄的人民军队建设得更加强大、更有战斗力。</p><p>中共中央政治局委员、中央军委副主席许其亮主持会议。中共中央政治局委员、中央军委副主席张又侠宣读《中央军委关于表彰全军备战标兵单位和个人的通报》，表彰10个全军备战标兵单位、20名全军备战标兵个人。习近平等为受表彰对象颁奖。</p><p>中央军委委员魏凤和、李作成、苗华、张升民出席会议。军委机关各部门、全军各大单位负责同志等参加会议。</p>",
      comments:[
          {
              userID:"蜘蛛侠",
              userPic:"head.png", //用户头像图片
              postDate:"2018-12-12",
              postTime:"14:25",
              content:"吃葡萄不吐葡萄皮，不吃葡萄到吐葡萄皮",
              secondComments:[
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              },
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              },
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              }
              ]  //楼中楼评论
          },
          {
              userID:"蜘蛛侠",
              userPic:"head.png", //用户头像图片
              postDate:"2018-12-12",
              postTime:"14:25",
              content:"评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
              secondComments:[
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              }
              ]  //楼中楼评论
          },
          {
              userID:"蜘蛛侠",
              userPic:"head.png", //用户头像图片
              postDate:"2018-12-12",
              postTime:"14:25",
              content:"评论内容",
              secondComments:[
              
              ]  //楼中楼评论
          },
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
              },
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              },
              {
                  userID:"小蜘蛛侠",
                  userPic:"head.png",
                  postDate:"2018-12-12",
                  postTime:"15:35",
                  content:"评论内容",
              }
              ]  //楼中楼评论
          },
          {
              userID:"蜘蛛侠",
              userPic:"head.png", //用户头像图片
              postDate:"2018-12-12",
              postTime:"14:25",
              content:"评论内容",
              secondComments:[
              
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

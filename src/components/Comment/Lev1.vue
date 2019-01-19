<template>
  <div class="lev1">
  	<div class="time">{{timeInfo}}</div>
    <div class="picBox">
    	<!-- <div class="img"></div> -->
    	<img v-bind:src="comment.userPic" class="img">
    </div>
    <div class="commentBox">
    	<div class="ID">{{comment.userID}} 留言</div>
    	<div class="content">{{comment.content}}</div>
    </div>
    <Lev2 v-for="item in comment.secondComments" v-bind:comment="item"></Lev2>
  </div>
</template>

<script>
import Lev2 from "./Lev2";
export default {
  name: "Lev1",
  data() {
    return {
      timeInfo: ""
    };
  },
  props: {
    comment: Object
  },
  components: {
    Lev2
  },
  mounted: function() {
    // console.log(this.comment.postDate);
    var postDate = new Date(
      Date.parse(this.comment.postDate.replace(/-/g, "/"))
    );
    // console.log(postDate);
    var date = new Date();
    // console.log(date);
    var start = postDate.getTime();
    // console.log(start);
    var end = date.getTime();
    // console.log(end);
    var day = parseInt((end - start) / 1000 / 3600 / 24);
    if (day >= 365) {
      this.timeInfo = parseInt(day / 365);
      this.timeInfo += "年前";
    } else if (day >= 30 && day < 365) {
      this.timeInfo = parseInt(day / 30);
      this.timeInfo += "月前";
    } else if (day >= 1 && day < 30) {
      this.timeInfo = day;
      this.timeInfo += "天前";
    } else if (parseInt((end - start) / 1000 / 3600) >= 1) {
      this.timeInfo = parseInt((end - start) / 1000 / 3600);
      this.timeInfo += "小时前";
    } else if (parseInt((end - start) / 1000 / 60) >= 1) {
      this.timeInfo = parseInt((end - start) / 1000 / 60);
      this.timeInfo += "分钟前";
    } else {
      this.timeInfo = "刚刚";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lev1 {
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  /*border:solid black 1px;*/
}
.time {
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  right: 5%;
  top: 11px;
  color: #595757;
}
.picBox {
  width: 81px;
  height: 81px;
  border: solid black 1px;
  float: left;
}
.img {
  width: 70px;
  height: 70px;
  margin-top: 5px;
  margin-left: 5px;
  /*background-color: lightgray;*/
}
.commentBox {
  width: 82%;
  /*height: 70px;*/
  border: solid black 1px;
  float: right;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.ID {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  /*margin-left: 20px;*/
  /*margin-top: 10px;*/
}
.content {
  font-size: 18px;
  color: #898989;
  padding-bottom: 18px;
}
</style>

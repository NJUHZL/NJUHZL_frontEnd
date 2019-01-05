<template>
  <div class="lev1">
  	<div class="time">一小时前</div>
    <div class="picBox">
    	<div class="img"></div>
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
  name: 'Lev1',
  data () {
    return {
      
    }
  },
  props:{
  	comment:Object,
  },
  components:{
  	Lev2,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lev1{
	width: 100%;
	height: auto;
	position: relative;
	margin-bottom: 20px;
	overflow: hidden;
	/*border:solid black 1px;*/
}
.time{
	position: absolute;
	font-size: 18px;
	font-weight: bold;
	right:5%;
	top:12px;
}
.picBox{
	width: 81px;
	height: 81px;
	border:solid black 1px;
	float:left;
}
.img{
	width: 70px;
	height: 70px;
	margin-top: 5px;
	margin-left: 5px;
	background-color: lightgray;
}
.commentBox{
	width: 82%;
	/*height: 70px;*/
	border:solid black 1px;
	float:right;
	padding-top: 10px;
	padding-left: 20px;
	padding-right: 20px;
}
.ID{
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 5px;
	/*margin-left: 20px;*/
	/*margin-top: 10px;*/
}
.content{
	font-size: 18px;
	color: #898989;
	padding-bottom: 18px;
}
</style>

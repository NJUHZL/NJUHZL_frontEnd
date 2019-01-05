<template>
  <div class="lev2">
    <div class="time">一小时前</div>
    <div class="picBox">
    	<div class="img"></div>
    </div>
    <div class="commentBox">
    	<div class="ID">{{comment.userID}} 留言</div>
    	<div class="content">{{comment.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lev2',
  data () {
    return {
      
    }
  },
  props:{
  	comment:Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lev2{
	width: 100%;
	height: auto;
	position: relative;
	/*margin-bottom: 20px;*/
	padding-top: 20px;
	overflow: hidden;
}
.time{
	position: absolute;
	font-size: 18px;
	font-weight: bold;
	right:5%;
	top:30px;
}
.picBox{
	width: 81px;
	height: 81px;
	border:solid black 1px;
	float:left;
	margin-left: 55px;
}
.img{
	width: 70px;
	height: 70px;
	margin-top: 5px;
	margin-left: 5px;
	background-color: lightgray;
}
.commentBox{
	width: 75%;
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

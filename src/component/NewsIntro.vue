<template>
  <div class="newsintro">
    <div class="body">
    	<div class="pic"><img src="#"></div>
    	<div class="intro">
    		<div class="title">大标题</div>
    		<div class="content">
	    		文章简介</br>
	    		文章简介</br>
	    		文章简介</br>
    		</div>
    		<div class="footer">
    			<div class="date">	
    				分类 | 2018-xx-xx
    			</div>
    			<div class="tools">
    				<div class="el-icon-edit">view</div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsIntro',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding:0;
}
.body{
	width: 100%;
	height:240px;
	margin-bottom: 20px;
	border: 2px solid #036e8b;
}
.pic{
	width:35%;
	height: 220px;
	margin: 10px 1%;
	margin-right: 2%;
	background-color: #dcdddd;
	float: left;
}
.intro{
	height: 220px;
	width: 61%;
	margin: 10px 0;
	margin-top: 10px;
	/*background-color: lightgray;*/
	float: left;
}
.title{
	width: 100%;
	height: 70px;
	font-size: 30px;
	line-height: 70px;
	font-weight: bold;
}
.content{
	width: 100%;
	height: 120px;
	font-size: 18px;
	color:#595757;
}
.footer{
	height: 30px;
}
.date{
	width: 150px;
	float: left;
}
.tools{
	width: 250px;
	height: 21px;
	background-color: lightgray;
	float: right;

}
</style>

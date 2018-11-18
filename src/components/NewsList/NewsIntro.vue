<template>
  <div class="newsintro">
    <div class="body">
    	<div class="pic"><img src="News.coverPicture"></div>
    	<div class="intro">
    		<div class="title">{{News.title}}</div>
    		<div class="content">{{News.script}}</div>
    		<div class="footer">
    			<div class="date">{{News.type}} | {{News.date}}</div>
    			<div class="tools">
    				<div class="el-icon-view icons">10245</div>
    				<div class="el-icon-view icons">152</div>
    				<div class="el-icon-view icons">1352</div>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import "../../../node_modules/element-ui/lib/theme-chalk/index.css";
export default {
  name: "NewsIntro",
  data() {
    return {};
  },
  props: {
    News:Object,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.body {
  width: 100%;
  height: 240px;
  margin-bottom: 20px;
  border: 2px solid #036e8b;
}
.pic {
  width: 35%;
  height: 220px;
  margin: 10px 1%;
  margin-right: 2%;
  background-color: #dcdddd;
  float: left;
}
.intro {
  height: 220px;
  width: 61%;
  margin: 10px 0;
  margin-top: 10px;
  float: left;
}
.title {
  width: 100%;
  height: 70px;
  font-size: 30px;
  line-height: 70px;
  font-weight: bold;
}
.content {
  width: 100%;
  height: 120px;
  font-size: 18px;
  color: #595757;
}
.footer {
  height: 30px;
}
.date {
  width: 150px;
  color: #595757;
  float: left;
}
.tools {
  width: 200px;
  height: 21px;
  float: right;
}
.icons {
  margin-left: 10px;
}
</style>

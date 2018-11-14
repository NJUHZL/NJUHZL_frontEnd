<template>
  <div class="newslist">
    <div class="body">
      <NewsIntro v-for="news in NewsArray" v-bind:News=news></NewsIntro>
    </div>
  </div>
</template>

<script>
import NewsIntro from "./NewsIntro";

export default {
  name: "NewsList",
  data() {
    return {
      NewsArray: [
      {
      title: "String",
      id: "String",
      coverPicture: "String",
      script: "String",
      type: "String",
      date: "String"
      },
      {
      title: "String",
      id: "String",
      coverPicture: "String",
      script: "String",
      type: "String",
      date: "String"
      },
      {
      title: "String",
      id: "String",
      coverPicture: "String",
      script: "String",
      type: "String",
      date: "String"
      },
      {
      title: "String",
      id: "String",
      coverPicture: "String",
      script: "String",
      type: "String",
      date: "String"
      },
      ]
    };
  },

  components: {
    NewsIntro
  },
  created() {
    console.log("测试 created函数是否生效");

    (function(_this){
      _this.$axios
        .get(
          "https://www.easy-mock.com/mock/5beace67e551c21d755b9693/simplenews"
        )
        .then(function(response) {
          console.log(response.data);
          _this.NewsArray=response.data.data;
          console.log(_this.NewsArray);
          //var data = response.data;
          //_this.NewsArray.push(data);
        })
        .catch(function(error) {
          console.log(error);
        });
    })(this);
    

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
  width: 45%;
  height: 1000px;
  /*border: 1px solid black;*/
}
</style>

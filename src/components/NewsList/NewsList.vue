<template>
  <div class="newslist">
    <div class="body">
      <NewsIntro v-for="news in NewsArray" v-bind:News=news></NewsIntro>
      <button class="load-more" v-on:click="LoadMore">点击加载更多</button>
    </div>
  </div>
</template>

<script>
import NewsIntro from "./NewsIntro";

export default {
  name: "NewsList",
  data() {
    return {
      NewsArray: [],
      Load: function(_this) {
        _this.$axios
          .get(
            "https://www.easy-mock.com/mock/5beace67e551c21d755b9693/simplenews"
          )
          .then(function(response) {
            console.log(_this.NewsArray);
            for (var i = 0; i < 5; i++)
              _this.NewsArray.push(response.data.data[i]);
            console.log(_this.NewsArray);
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    };
  },

  components: {
    NewsIntro
  },

  methods: {
    LoadMore: function() {
      console.log("加载成功");
      this.Load(this);
    }
  },

  mounted() {
    console.log("测试 created函数是否生效");
    this.Load(this);
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
.load-more {
  border: 0;
  background-color: #595757;
  color: #fff;
  font-size: 18px;
  width: 30%;
  margin-left: 35%;
  height: 50px;
}
</style>

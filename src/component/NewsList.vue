<template>
  <div class="newslist">
    <div class="body">
      <NewsIntro v-for="news in NewsArray" v-bind:News="news"></NewsIntro>
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
          title: "I am a title",
          id: "001", //文章的id，后台自动生成
          coverPicture: "xxxxx.xxxx.xxx", //url
          script: "第一篇文章内容", //简介
          type: "A", //具体未定
          date: "2018-11-09"
        },
        {
          title: "I am a title2",
          id: "002", //文章的id，后台自动生成
          coverPicture: "xxxxx.xxxx.xxx", //url
          script: "第二篇文章内容", //简介
          type: "B", //具体未定
          date: "2018-11-09"
        },
        {
          title: "I am a title2",
          id: "002", //文章的id，后台自动生成
          coverPicture: "xxxxx.xxxx.xxx", //url
          script: "第二篇文章内容", //简介
          type: "B", //具体未定
          date: "2018-11-09"
        },
        {
          title: "I am a title2",
          id: "002", //文章的id，后台自动生成
          coverPicture: "xxxxx.xxxx.xxx", //url
          script: "第二篇文章内容", //简介
          type: "B", //具体未定
          date: "2018-11-09"
        },
        {
          title: "I am a title2",
          id: "002", //文章的id，后台自动生成
          coverPicture: "xxxxx.xxxx.xxx", //url
          script: "第二篇文章内容", //简介
          type: "B", //具体未定
          date: "2018-11-09"
        }
      ]
    };
  },

  components: {
    NewsIntro
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

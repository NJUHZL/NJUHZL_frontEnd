<template>
    <div class="main">
        <img class="videoPreview" :src="pictureUrl"/>
        <div class="rightPart">
            <h2>{{title}}</h2>
            <div class="divider">
                <div class="blue-style">{{newsSource}} {{newsClass}}</div>
                <div class="plain-style">更新时间{{postTime}}</div>
            </div>
            <div class="text">{{contentShort}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "newsItem",
  props: {
    pictureURL: {
      type: String,
      default: require("../../../assets/img/realistic.png")
    },
    title: {
      type: String,
      default: "课程标题"
    },
    newsSource: {
      type: String,
      default: "南京大学网站"
    },
    newsClass: {
      type: String,
      default: "种类1"
    },
    postTime: {
      type: String,
      default: "2018-12-11"
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin-left: 40%;
  width: 50%;
  max-height: 320px;
}

.videoPreview {
  width: 60%;
  display: inline-block;
}

.rightPart {
  vertical-align: top;
  width: 40%;
}

.divider {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 25px 0;
  .plain-style {
    margin-left: 10px;
    font-size: 12px;
    color: rgba(100, 100, 100, 0.8);
    overflow: hidden;
    flex-shrink: 2;
  }
  .blue-style {
    font-size: 12px;
    color: rgb(85, 173, 214);
    flex-shrink: 0;
  }
}

.text {
  margin-left: 20px;
  overflow: hidden;
  font-size: 15px;
  color: rgba(10, 10, 10, 0.8);
}
</style>

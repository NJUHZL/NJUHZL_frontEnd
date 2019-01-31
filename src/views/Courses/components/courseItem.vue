<template>
    <div class="main">
        <div class="el-card is-always-shadow videoPreview">
            <img style="width: 100%" :src="pictureURL" @click="passVideoUrl"/>
        </div>
        <div class="rightPart">
            <h2>{{title}}</h2>
            <div class="divider">
                <div class="blue-style">{{courseSource}} {{courseClass}}</div>
                <div class="plain-style">更新时间{{postTime}}</div>
            </div>
            <div class="text">{{content}}</div>
            <h5  v-for="word in keywords" :key="word"><i class="el-icon-success" style="color: lightblue"></i>  {{word}}</h5>
            <div class="detail" @click="passVideoUrl">查看详情 》</div>
            <div class="right">
                <div class="blue-style">{{collectCount}}收藏</div>
                <div class="plain-style">{{likeCount}}点赞</div>
                <div class="plain-style">{{commentCount}}评论</div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  name: "newsItem",
  props: {
    pictureURL: {
      type: String,
      default:
        "http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/defaultVideoPreview.jpg"
    },
    videoUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "课程标题"
    },
    courseSource: {
      type: String,
      default: "南京大学网站"
    },
    courseClass: {
      type: String,
      default: "种类1"
    },
    postTime: {
      type: String,
      default: "2018-12-11"
    },
    content: {
      type: String,
      default:
        "世间种种,情有独钟，\n" +
        "皆是刹那,心弦被拨弄，\n" +
        "余生都为，那片刻花月相逢。\n" +
        "我用情下笔，装作从容,\n" +
        "对抗岁月、山海变更，\n" +
        "你在心里,栩栩如生，\n" +
        "也算永恒。"
    },
    keywords: {
      type: Array,
      default: function() {
        return ["软件学院", "迎新", "大学生活"];
      }
    },
    likeCount: {
      type: Number,
      default: 30
    },
    collectCount: {
      type: Number,
      default: 20
    },
    commentCount: {
      type: Number,
      default: 14
    }
  },
  methods: {
    passVideoUrl() {
      console.log("here");
      this.$parent.playVideo(this.videoUrl);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin-left: 40%;
  width: 100%;
  max-height: 320px;
  position: relative;
  margin-bottom: 30px;
}

.videoPreview {
  width: 58%;
  display: inline-block;
  margin: 0;
  padding: 5px;
  cursor: pointer;
}

.rightPart {
  vertical-align: top;
  width: 36%;
  display: inline-block;
  padding-left: 4%;
  min-height: 320px;
}

.divider {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 15px 2px;
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
  margin-left: 2px;
  overflow: hidden;
  font-size: 14px;
  color: rgba(10, 10, 10, 0.8);
  line-height: 20px;
}

h2 {
  margin-top: -10px;
  margin-bottom: 15px;
}

h5 {
  margin: 12px 0 12px 0;
  font-weight: bold;
  color: dimgrey;
}

.detail {
  width: 70px;
  flex-shrink: 0;
  color: white;
  font-size: 12px;
  font-weight: bold;
  background-color: rgb(89, 181, 224);
  border: 1px rgb(89, 181, 224) outset;
  border-radius: 3px;
  text-align: center;
  position: absolute;
  float: bottom;
  bottom: 20px;
  display: inline-block;
  cursor: pointer;
}

.right {
  position: absolute;
  float: bottom;
  bottom: 20px;
  right: 0;
  .blue-style {
    overflow: hidden;
    width: 50px;
    border-radius: 20%;
    text-align: center;
    color: white;
    font-size: 11px;
    font-weight: bold;
    background-color: rgb(85, 173, 214);
    margin-top: 10px;
  }
  .plain-style {
    width: 50px;
    border-radius: 20%;
    text-align: center;
    color: white;
    font-size: 11px;
    font-weight: bold;
    background-color: rgba(100, 100, 100, 0.35);
    margin-top: 10px;
  }
}
</style>

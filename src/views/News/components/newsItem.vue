<template>
  <div class="main">
    <div class="align-right">
      <div class="header">{{title}}</div>
      <div class="divider">
        <div class="blue-style">{{newsSource}} {{newsClass}}</div>
        <div class="plain-style">{{postTime}}</div>
      </div>
      <div class="content">
        <img class="picture" v-bind:src="pictureURL">
        <div class="text">{{abstract}}</div>
      </div>
      <div class="footer">
        <div class="left">
          <div class="detail">详细信息 》</div>
          <div class="keywords">
            <div class="title">关键词:</div>
            <div class="keyword" v-for="word in keywords" :key="word">{{word}}</div>
          </div>
        </div>
        <div class="right">
          <div class="blue-style">{{collectCount}}收藏</div>
          <div class="plain-style">{{likeCount}}点赞</div>
          <div class="plain-style">{{commentCount}}评论</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsItem",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: "这是新闻的标题"
    },
    abstract: {
      type: String,
      default:
        "是你的看你发的吃你的尺度回复地方还是看得出你快点是你的看你发的吃你的尺度回复地方还是看得出你快点是你的看你发的吃你的尺度回复地方还是看得出你快点"
    },
    pictureURL: {
      type: String,
      default:
        "https://bequank.oss-cn-beijing.aliyuncs.com/try/cover/JuniperPhoton%20%202018-07-05%2012-00-00.jpg?x-oss-process=style/main_cover"
    },
    newsSource: {
      type: String,
      default: "南京大学网站"
    },
    newsClass: {
      type: String,
      default: "事实核查"
    },
    postTime: {
      type: String,
      default: "2018-12-11"
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
  }
};
</script>


<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: flex-start;
  max-width: 650px;
  max-height: 360px;
  .align-right {
    display: flex;
    flex-direction: column;
    .header {
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
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
    .content {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .picture {
        max-width: 300px;
        max-height: 250px;
      }
      .text {
        margin-left: 20px;
        overflow: hidden;
        font-size: 15px;
        color: rgba(10, 10, 10, 0.8);
      }
    }
    .footer {
      margin: 30px 0 10px 0;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      .left {
        overflow: hidden;
        display: flex;
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
        }
        .keywords {
          flex-shrink: 0;
          margin-left: 15px;
          display: flex;
          .title {
            margin-right: 5px;
            font-size: 12px;
            color: rgba(100, 100, 100, 0.8);
          }
          .keyword {
            margin-left: 5px;
            font-size: 12px;
            color: rgb(85, 173, 214);
          }
        }
      }
      .right {
        flex-shrink: 1;
        display: flex;
        justify-content: flex-start;
        .blue-style {
          overflow: hidden;
          margin-left: 5px;
          width: 50px;
          border-radius: 20%;
          text-align: center;
          color: white;
          font-size: 10px;
          font-weight: bold;
          background-color: rgb(85, 173, 214);
        }
        .plain-style {
          margin-left: 10px;
          width: 50px;
          border-radius: 20%;
          text-align: center;
          color: white;
          font-size: 11px;
          font-weight: bold;
          background-color: rgba(100, 100, 100, 0.35);
        }
      }
    }
  }
}
</style>

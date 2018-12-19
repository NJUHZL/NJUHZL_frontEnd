<template>
  <div class="rightBarContainer">
    <div id="share">
      <div class="rightItem">
        <i class="el-icon-share"></i>
      </div>
      <div id="shareContainer">
        <img src="../assets/img/qq.png" class="shareChoice" v-on:click="qqShare"/>
        <img src="../assets/img/wechat.png" class="shareChoice"/>
        <img src="../assets/img/sina.png" class="shareChoice" v-on:click="sinaShare"/>
      </div>
    </div>
    <div class="rightItem" id="favourite">
      <i class="el-icon-star-off"></i>
    </div>
    <div class="rightItem">
      <a>意见<br>反馈</a>
      <i class="el-icon-edit-outline"></i>
    </div>
    <div class="rightItem" id="backTop">
      <a>返回<br>顶部</a>
      <i class="el-icon-caret-top"></i>
    </div>
    <div></div>
  </div>
</template>

<script>
let title = "NJU核真录";
let url = "http://193.112.82.110:3030/";
let picurl = "../assets/img/hzl_logo.png";

export default {
  name: "rightBar",
  mounted: function() {
    let backButton = $("#backTop");

    backButton.on("click", function() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        500
      );
    });

    $(window).on("scroll", function() {
      /*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
      if ($(window).scrollTop() > $(window).height()) backButton.fadeIn();
      else backButton.fadeOut();
    });
    $(window).trigger("scroll");

    $("#favourite").click(function() {
      let ctrl =
        navigator.userAgent.toLowerCase().indexOf("mac") != -1
          ? "Command/Cmd"
          : "CTRL";
      if (document.all) {
        window.external.addFavorite("http://localhost:8080", "trust平台");
      } else if (window.sidebar) {
        window.sidebar.addPanel("trust平台", "http://localhost:8080", "");
      } else {
        alert("您可以尝试通过快捷键" + ctrl + " + D 加入到收藏夹~");
      }
    });

    $("#share").hover(function() {
      $("#shareContainer").animate({ width: "toggle" }, 350);
    });
  },

  methods: {
    qqShare: function() {
      let shareString =
        "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=" +
        encodeURIComponent(title) +
        "&url=" +
        encodeURIComponent(url || document.location) +
        "&pics=" +
        encodeURIComponent(picurl);
      window.open(
        shareString,
        "newwindow",
        "height=400,width=400,top=100,left=100"
      );
    },

    sinaShare: function() {
      let shareString =
        "http://v.t.sina.com.cn/share/share.php?title=" +
        encodeURIComponent(title) +
        "&url=" +
        encodeURIComponent(url || document.location) +
        "&pics=" +
        encodeURIComponent(picurl);
      window.open(
        shareString,
        "newwindow",
        "height=400,width=400,top=100,left=100"
      );
    }
  }
};
</script>

<style scoped>
.rightBarContainer {
  float: right;
  position: fixed;
  top: 180px;
  z-index: 5;
  right: 5px;
}

.rightItem {
  height: 50px;
  width: 50px;
  display: block;
  position: relative;
  text-align: center;
  background: hsla(0, 0%, 100%, 0.9);
  margin-top: 6px;
  -webkit-box-shadow: 0 0 0 0 #ccc;
  box-shadow: 0 0 0 0 #ccc;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  cursor: pointer;
}

.rightItem a {
  color: white;
  width: 100%;
  height: 100%;
  padding-top: 6px;
  text-align: center;
  display: none;
  text-decoration: none;
  font-size: 14px;
}

.rightItem i {
  padding-top: 10px;
  font-size: 32px;
}

.rightItem:hover {
  background-color: lightskyblue;
}

.rightItem:hover a {
  display: inherit;
}

.rightItem:hover i {
  color: white;
}

.rightItem:hover img {
  display: none;
}

#shareContainer {
  padding: 6px 0;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  position: absolute;
  right: 50px;
  margin-top: -56px;
  width: 140px;
  height: 50px;
  display: none;
}

.shareChoice {
  height: 38px;
  width: 38px;
  border-radius: 19px;
  float: right;
  padding: 3px;
  cursor: pointer;
  display: inline-block;
}

#share:hover .rightItem {
  background-color: lightskyblue;
}

#share:hover .rightItem i {
  color: white;
}
</style>

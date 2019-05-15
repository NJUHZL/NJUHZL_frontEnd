<template>
  <div class="rightBarContainer">
    <div id="share">
      <div class="rightItem">
        <i class="el-icon-share"></i>
      </div>
      <div id="shareContainer">
        <img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/qq.png" class="shareChoice" v-on:click="qqShare"/>
        <img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/wechat.png" class="shareChoice" v-on:click="showPublicAccount"/>
        <div id="publicAccount" ref="publicAccount" style="display: none;">
          <p>欢迎关注</p>
          <img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/publicAccount.jpg" style="width:100px;height: 100px" />
          <p><strong>NJU核真录</strong>公众号</p>
          <p>更多往期精彩文章</p>
        </div>
        <img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/sina.png" class="shareChoice" v-on:click="sinaShare"/>
      </div>
    </div>
    <div class="rightItem" id="favourite">
      <i class="el-icon-star-off"></i>
    </div>
    <div class="rightItem">
      <a>意见<br>反馈</a>
      <i class="el-icon-edit-outline"></i>
    </div>
    <div class="rightItem" @mouseenter="showPay" @mouseleave="hidePay">
      <a>打赏<br>本站</a>
      <i class="el-icon-coin"></i>
    </div>
    <img src="http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/payPic.jpg" class="pay" style="display: none" ref="payPic"/>
    <div class="rightItem" id="backTop">
      <a>返回<br>顶部</a>
      <i class="el-icon-caret-top"></i>
    </div>
    <div></div>
  </div>
</template>

<script>
let Title = "NJU核真录";
let Url = "http://www.njuhzl.cn/";
let Picurl = "http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/hzl_logo.png";
let Abstract="NJU核真录";

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
        let title=localStorage.getItem("title")||Title;
        let url="www.njuhzl.cn"||window.location.href.split("//")[1]||Url;
        let picurl=localStorage.getItem("picurl")||Picurl;
        let abstract=localStorage.getItem("abstract")||Abstract;
      let shareString =
        "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+
          encodeURIComponent(url || document.location) +
        "&title=" +
        encodeURIComponent(title) +
          "&pics=" +
          encodeURIComponent(picurl)+
          "&summary="+
          encodeURIComponent(abstract);
      window.open(
        shareString,
        "_blank",
      );
    },

    sinaShare: function() {
        let title=localStorage.title||Title;
        let url=window.location.href||Url;
        let picurl=localStorage.picurl||Picurl;
        let abstract=localStorage.abstract||Abstract;
      let shareString =
        "http://v.t.sina.com.cn/share/share.php?title=" +
        encodeURIComponent(title) +
        "&url=" +
        encodeURIComponent(url || document.location) +
          '&content=utf-8&sourceUrl='+
          encodeURIComponent(url || document.location)+
        "&pic=" +
        encodeURIComponent(picurl);
      window.open(
        shareString,
          "_blank"
      );
    },
      showPublicAccount(){
        if(this.$refs.publicAccount.style.display==="none"){
            this.$refs.publicAccount.style.display="block";
        }else{
            this.$refs.publicAccount.style.display="none";
        }
      },
      showPay(){
          this.$refs.payPic.style.display="block";
      },
      hidePay(){
          this.$refs.payPic.style.display="none";
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

  #publicAccount{
    height:170px;
    width:150px;
    background-color: #f7f8f8;
    position: absolute;
    font-size: 12px;
    margin-top: 60px;
    margin-left: 0;
    text-align: center;
  }
#publicAccount p{
  margin: 5px;
  font-size: 12px;
}

  .pay{
    position:absolute;
    width: 150px;
    min-height: 150px;
    margin-left: -150px;
    margin-top:-90px;
  }
</style>

<template>
  <div style="width: 100%;">
    <div style="position: absolute;right: 0;top:10px"></div>
    <a href="/" style="margin-right: 20px">返回主页</a>
    <a href="/backstage/passageAdmin">文章管理</a>

    <div style="width: 40%;text-align: center;margin-left: 30%">
      <h1 style="color: lightskyblue">文章发布</h1>
      <el-input v-model="title" placeholder="请输入标题" maxlength="20" style="margin-bottom: 20px"></el-input>
      <el-select v-model="type" placeholder="请选择文章分类" style="margin-bottom: 10px;width: 40%">
        <el-option
                v-for="item in options"
                :key="item"
                :value="item">
        </el-option>
      </el-select>
      <el-input v-model="newsSource" placeholder="请输入来源" maxlength="10" style="margin-left: 20px;width: 30%"></el-input>
      <br>
      <el-input v-model="keyword1" placeholder="请输入关键词1" maxlength="5" style="width: 30%;margin: 1%"></el-input>
      <el-input v-model="keyword2" placeholder="请输入关键词2" maxlength="5" style="width: 30%;margin: 1%"></el-input>
      <el-input v-model="keyword3" placeholder="请输入关键词3" maxlength="5" style="width: 30%;margin: 1%"></el-input>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入摘要"
        v-model="abstract"
        maxlength="50"
        style="margin-top: 10px">
      </el-input>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 50}"
        placeholder="请输入内容"
        v-model="content"
        style="margin-top: 20px">
      </el-input>
      <!--<input type="file" @change="fileChanged" accept="image/jpg,image/jpeg,image/png,image/bmp" class="picturesChoose" ref="file" id="picturesChoose" placeholder="选取图片" multiple="multiple" style="margin-top: 20px"/>-->
      <el-upload class="upload-demo" drag action="" multiple accept="image/jpg,image/jpeg,image/png,image/bmp" :http-request="fileChanged" style="margin-top: 20px">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，建议不超过500kb</div>
      </el-upload>
      <el-button round @click="submit" :loading="loading" style="margin-top: 20px">确认上传</el-button>
      <br>
      <el-button type="primary" plain @click="publishPassage" style="margin-top: 20px;width: 50%" :disabled="waiting">发布</el-button>
    </div>

  </div>
</template>

<script>
//import { PUBLISH_PASSAGE } from "@/store/type/actions";

import { PUBLISH_PASSAGE } from "@/store/type/actions";
import { mapState } from "vuex";

export default {
  name: "publishPassage",
  data() {
    return {
      files: [],
      title: "",
      abstract: "",
      content: "",
      keyword1: "",
      keyword2: "",
      keyword3: "",
      type: "",
      newsSource: "",
      waiting: false,
      loading: false,
      options: ["事实核查", "可视化新闻", "研究中心", "质量报告"],
      pictureUrls: []
    };
  },
  computed: {
    ...mapState({
      publishResult: state => state.passage.publishResult
    })
  },
  beforeCreate() {
    if (localStorage.njuhzl_root !== "ok") {
      this.$router.replace("/login");
    }
  },
  methods: {
    publishPassage: async function() {
      await this.$store.dispatch(PUBLISH_PASSAGE, {
        title: this.title,
        abstract: this.abstract,
        content: this.content,
        keyword1: this.keyword1,
        keyword2: this.keyword2,
        keyword3: this.keyword3,
        type: this.type,
        newsSource: this.newsSource,
        pictureUrls: this.pictureUrls
      });
      console.log(this.publishResult);
      if (this.publishResult === 1) {
        this.$message({
          message: "发布成功",
          type: "success"
        });
        this.$router.push("./passageAdmin");
      } else {
        //fail to login
        this.$message({
          message: "发布失败",
          type: "error"
        });
      }
    },

    submit() {
      console.log();
      this.pictureUrls = [];
      let that = this;
      that.waiting = true;
      that.loading = true;
      console.log(this.files);
      // if (this.files.length === 0) {
      //     console.warn('no file!');
      //     return
      // }
      //  这里是OSS
      let OSS = require("ali-oss");
      const client = new OSS({
        region: "oss-cn-hangzhou",
        accessKeyId: "LTAIL4RFw3fPAweH",
        accessKeySecret: "xOw4hzztNsCPm5LtJoWVwsvSOFl8IB",
        bucket: "njuhzl"
      });
      const fNum = this.files;
      for (let i = 0; i < fNum.length; i++) {
        let f = fNum[i].file;
        console.log(f);
        const Name = f.name;
        console.log(Name);
        const suffix = Name.substr(Name.indexOf("."));
        const obj = this.timestamp();
        const storeAs = "passagePictures/" + obj + suffix; //  路径+时间戳+后缀名
        console.log(storeAs);
        client
          .multipartUpload(storeAs, f)
          .then(function(result) {
            let data = result.res.requestUrls[0];
            let url = data.split("?uploadId")[0];
            console.log(url);
            that.pictureUrls.push(url);
            if (that.pictureUrls.length === that.files.length) {
              that.$message({
                message: "上传成功",
                type: "success"
              });
              that.waiting = false;
              that.loading = false;
            }
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    //  时间戳
    timestamp: function() {
      const time = new Date();
      const y = time.getFullYear();
      const m = time.getMonth() + 1;
      const d = time.getDate();
      const h = time.getHours();
      const mm = time.getMinutes();
      const s = time.getSeconds();
      const ms = time.getMilliseconds();
      return (
        "" +
        y +
        this.Add0(m) +
        this.Add0(d) +
        this.Add0(h) +
        this.Add0(mm) +
        this.Add0(s) +
        this.Add0(ms)
      );
    },

    Add0: function(m) {
      return m < 10 ? "0" + m : m;
    },

    fileChanged(param) {
      // const list = this.$refs.file.files;
      // for (let i = 0; i < list.length; i++) {
      //   if (!this.isContain(list[i])) {
      //     const item = {
      //       name: list[i].name,
      //       size: list[i].size,
      //       file: list[i]
      //     };
      //     this.html5Reader(list[i], item);
      //     this.files.push(item);
      //   }
      // }
      //this.$refs.file.value = "";
      const file = param.file;
      if (!this.isContain(file)) {
        const item = {
          name: file.name,
          size: file.size,
          file: file
        };
        this.html5Reader(file, item);
        this.files.push(item);
      }
    },
    // 将图片文件转成BASE64格式
    html5Reader(file, item) {
      const reader = new FileReader();
      reader.onload = e => {
        this.$set(item, "src", e.target.result);
      };
      reader.readAsDataURL(file);
    },
    isContain(file) {
      return this.files.find(
        item => item.name === file.name && item.size === file.size
      );
    }
  }
};
</script>

<style scoped>
</style>

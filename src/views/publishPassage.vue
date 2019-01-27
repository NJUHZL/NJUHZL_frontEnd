<template>
  <div style="width: 100%;">
    <div style="width: 40%;text-align: center;margin-left: 30%">
      <h1 style="color: lightskyblue">文章发布</h1>
      <el-input v-model="title" placeholder="请输入标题" maxlength="20" style="margin-bottom: 10px"></el-input>
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
      <input type="file" class="picturesChoose" id="picturesChoose" placeholder="选取图片" multiple="multiple" style="margin-top: 20px"/>
      <br>
      <el-button type="primary" plain @click="publishPassage" style="margin-top: 20px;width: 50%">发布</el-button>
    </div>

  </div>
</template>

<script>
import { PUBLISH_PASSAGE } from "@/store/type/actions";

export default {
  name: "publishPassage",
  data() {
    return {
      title: "",
      abstract: "",
      content: "",
      keyword1: "",
      keyword2: "",
      keyword3: ""
    };
  },
  methods: {
    publishPassage: async function() {
      let files = document.getElementById("picturesChoose").files;
      let formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
        console.log(i);
      }
      formData.append("title", this.title);
      formData.append("abstract", this.abstract);
      formData.append("content", this.content);
      formData.append("keyword1", this.keyword1);
      formData.append("keyword2", this.keyword2);
      formData.append("keyword3", this.keyword3);
      await this.$store.dispatch(PUBLISH_PASSAGE, formData);
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <div class="bannerContainer" style="width: 100%;" id="banner">
    <img src="../assets/img/banner.png" style="width: 100%;">
    <div style="margin-top:-100px;margin-left: 60%;width:18%">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchContent"
        id="search"
      ></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      searchContent: ""
    };
  },
  mounted: function() {
    $("#search").bind("keypress", function(event) {
      if (event.keyCode == "13") {
        console.log("search");
      }
    });
  }
};
</script>

<style scoped>
</style>

<template>
    <el-card :body-style="{ padding: '0px' }" style="width:100%">
        <img :src="picSrc" style="width: 100%;height:100px" class="image">
        <div style="padding: 0;">
            <div style="padding: 5px;color: white; background-color: #898989">
                <strong><p>{{title}}</p></strong>
                <p>评论：{{comment}}</p>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
  name: "rightComment",
  data() {
    return {
      title: "文章1",
      comment: "写得好，有深度",
      picSrc: ""
    };
  },
  mounted: function() {}
};
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
  font-size: 12px;
  line-height: 18px;
}
</style>

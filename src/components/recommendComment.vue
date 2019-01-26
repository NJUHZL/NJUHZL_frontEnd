<template>
    <div style="width: 100%;padding: 5px;height: 100px;position: relative">
        <p>{{comment}}</p>
        <p class="postTime">{{postTime}}</p>
    </div>
</template>

<script>
export default {
  name: "recommendComment",
  props: {
    comment: {
      type: String,
      default:
        "冷冷秋风隐隐潺，行经夜半紫金山。\n" +
        "千方清臭疲神醒，百载幽林山鬼还。\n" +
        "建邺英灵终建业，中山浩气镇钟山。\n" +
        "紫薇问我将何往，御剑直登玄武关。"
    },
    postTime: {
      type: String,
      default: "2018-12-11    22:07:51"
    }
  }
};
</script>

<style scoped>
p {
  text-align: left;
  color: #898989;
  font-size: 14px;
  margin: 0;
}
.postTime {
  color: #dcdddd;
  bottom: 0;
  right: 5px;
  position: absolute;
  font-size: 12px;
  display: block;
}
</style>

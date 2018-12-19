<template>
    <div style="width: 20%;padding: 10px;height: 200px;display: inline-block;position: relative">
        <h3>{{title}}</h3>
        <p>{{abstract}}</p>
        <p class="postTime">发布时间 {{postTime}}</p>
    </div>
</template>

<script>
export default {
  name: "abstract",
  props: {
    title: {
      type: String,
      default: "这是新闻的标题"
    },
    abstract: {
      type: String,
      default:
        "凛晓宜高卧，淹留更起沉。\n" +
        "孤人行古径，三雀跃幽林。\n" +
        "雨冷松针倦，风潮瓦黛深。\n" +
        "瑶池银杏树，只砌一园金。\n"
    },
    postTime: {
      type: String,
      default: "2018-12-11    21:02:25"
    }
  }
};
</script>

<style scoped>
h3 {
  color: black;
  margin-top: 0;
}
p {
  text-align: left;
  color: #898989;
  font-size: 14px;
}
.postTime {
  color: #dcdddd;
  bottom: 0;
  position: absolute;
  font-size: 12px;
  display: block;
}
</style>

<template>
  <div class="main">
    <div class="img-box">
      <img v-bind:src="pictureUrl">
    </div>
    <div class="title">
      <h4>{{title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleCard",
  props: {
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pictureUrl: require("../../assets/pictures/" + this.picture)
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/default.scss";

.main {
  width: 200px;
  height: 280px;
  position: relative;
  border-radius: $default-border-radius;
  box-shadow: $default-box-shadow;
}

.img-box {
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: aquamarine;
  img {
    width: 200px;
    height: 280px;
  }
}

.title {
  position: absolute;
  top: 50px;
  left: 43px;
  display: flex;
  justify-content: center;
  font-size: $font-size-h3;
  color: lightseagreen;
}
</style>

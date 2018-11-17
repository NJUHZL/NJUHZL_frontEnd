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
    return ({
      pictureUrl : require("../../assets/pictures/"+ this.picture)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/default.scss';

.main {
  border: 2px solid black;
  width: 200px;
  height: 200px;
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
    width: 100%;
    height: 100%;
  }
}

.title {
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: center;
}
</style>

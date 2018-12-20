<template>
    <div class="block" style="width:79%;margin-left: 10.5%;margin-bottom: 30px;">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in carouselPassages" :key="item.index">
                <img :src="item.src" style="width: 100%;height: 100%;z-index: -1"/>
                <h1 style="height: 30px">{{item.name}}</h1>
                <div class="back"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      carouselPassages: [
        {
          src: require("../assets/img/loginBackground.jpg"),
          name: "文章1",
          index: 1
        },
        {
          src: require("../assets/img/banner.png"),
          name: "文章2",
          index: 2
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: white;
  position: absolute;
  float: bottom;
  bottom: 0;
  margin-left: 10%;
  font-family: "Simsun";
  z-index: 1;
}
.back {
  position: absolute;
  float: bottom;
  bottom: 0;
  z-index: 0;
  opacity: 0.5;
  background-color: black;
  height: 70px;
  width: 100%;
}
</style>

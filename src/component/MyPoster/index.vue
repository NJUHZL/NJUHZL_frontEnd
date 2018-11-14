<template>
  <div class="main">
    <el-carousel indicator-position="outside" class="body">
      <el-carousel-item v-for="item in passageList" :key="item.id" class="item">
        <div>
          <poster-card
            v-bind:title="item.title"
            v-bind:coverPicture="item.coverPicture"
            v-bind:script="item.script"
            v-bind:type="item.type"
            v-bind:date="item.date"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import PosterCard from "./PosterCard.vue";

export default {
  name: "MyPoster",
  components: { PosterCard },
  props: {
    passageList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/style/default.scss';

.body {
  width: 100%;
  height: 100%;
  border-radius: $default-border-radius;
  box-shadow: $default-box-shadow;

  .item {
    height: 100%;
  }
}
</style>

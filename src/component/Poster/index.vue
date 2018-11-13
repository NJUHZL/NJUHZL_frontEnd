<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in passageList" :key="item.id">
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
</template>

<script>
import { PosterCard } from "./PosterCard";

export default {
  name: "Poster",
  components: { PosterCard },
  props: {
    passageList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


<template>
  <div class="poster-card">
    <div>{{title}}</div>
    <div>{{script}}</div>
    <div>{{date}}</div>
  </div>
</template>

<script>
export default {
  name: "PosterCard",
  props: {
    title: {
      type: String,
      required: true
    },
    coverPicture: {
      type: String,
      required: true
    },
    script: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

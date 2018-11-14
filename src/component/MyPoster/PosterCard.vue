<template>
  <div class="poster-card">
    <div class="card-body">
      <img v-bind:src="coverPicture" class="cover-picture">
      <div class="hover-bar">
        <div class="title">{{title}}</div>
        <div class="script">{{script}}</div>
      </div>
    </div>
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
@import '@/style/default.scss';

.poster-card {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  .cover-picture {
    width: 100%;
    height: 100%;
  }
  .hover-bar {
    position: absolute;
    top: 220px;
    z-index: 1;
    width: 100%;
    height: 80px;
    background-color: rgba(92, 176, 224, 0.8);
    .title {
      margin: 10px 0 0 10px;
      font-family: $default-font-family;
      font-size: $font-size-h3;
    }
    .script {
      margin: 10px 0 0 10px;
      font-family: $default-font-family;
      font-size: $font-size-h5;
    }
  }
}
</style>

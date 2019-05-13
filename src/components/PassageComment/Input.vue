<template>
  <div class="comment-body">
    <div class="align-left">
      <div v-if="hasFather" class="reply">
        <small>回复</small>
        {{fnickname}}
      </div>
    </div>
    <div class="align-right">
      <textarea/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentInput",
  props: {
    femail: {
      type: String,
      default: ""
    },
    fnickname: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    hasFather: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style>
.comment-body {
  display: flex;
  justify-content: space-between;
  border: 1px black solid;
  padding: 24px 0 24px 24px;
}
.comment-body .align-left {
  color: #036e8b;
}
.comment-body .align-left .reply {
}
</style>

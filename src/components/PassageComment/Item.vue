<template>
  <div>
    <div class="item-body">
      <div class="align-left">
        <div class="item-title">
          <div class="nickname">{{nickname}}</div>
          <div v-if="hasFather" class="reply">
            <small>回复</small>
            {{fnickname}}
          </div>
        </div>
        <div class="content">{{content}}</div>
      </div>
      <div class="align-right">
        <div class="reply" v-on:click="doReply()">回复</div>
        <div class="time">{{time}}</div>
      </div>
    </div>
    <div v-if="isReply">
      <comment-input
        :email="email"
        :nickname="nickname"
        :femail="email"
        :fnickname="nickname"
        :hasFather="true"
      ></comment-input>
    </div>
  </div>
</template>

<script>
import CommentInput from "./Input";
import { mapState } from "vuex";
export default {
  name: "Item",
  components: {
    CommentInput
  },
  data() {
    return {
      isReply: false
    };
  },
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
    content: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    hasFather: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      userProfile: state => state.user.userProfile
    })
  },
  methods: {
    doReply() {
      this.isReply = true;
      console.log(this.userProfile);
    }
  }
};
</script>

<style>
.item-body {
  box-shadow: 2px 2px 2px rgba(3, 110, 139, 0.4);
  display: flex;
  justify-content: space-between;
  padding-right: 24px;
  margin: 24px 0;
}
.item-body .align-left {
  display: flex;
  height: 100%;
  padding: 24px 0px 24px 24px;
}
.item-body .item-title {
  color: #036e8b;
  display: flex;
  flex-shrink: 0;
  align-self: center;
}
.item-body .item-title small {
  margin: 0 8px;
}
.item-body .content {
  margin: 0 32px 0 32px;
}
.item-body .align-right {
  flex-shrink: 0;
  align-self: flex-end;
  display: flex;
}
.item-body .align-right .reply {
  flex-shrink: 0;
  color: #036e8b;
  font-size: 14px;
  align-self: flex-end;
  margin: 0 48px 0 0;
  cursor: pointer;
}
.item-body .align-right .reply:hover {
  color: #38bce0;
}

.item-body .time {
  flex-shrink: 0;
  color: rgba(100, 100, 100, 1);
  font-size: 14px;
  align-self: flex-end;
  font-style: italic;
  text-align: end;
}
</style>

<template>
  <div>
    <input v-model="email">
    <button @click="onSendCode()">发生验证码</button>
    <div v-if="identifyCodeHasSend">验证码已发送至{{email}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER_IDENTIFY } from "@/store/type/mutations";
export default {
  name: "Register",
  data() {
    return {
      email: "xxxxxx"
    };
  },
  computed: {
    ...mapState({
      identifyCodeHasSend: state => state.user.identifyCodeHasSend,
      registerResult: state => state.user.registerResult
    })
  },
  methods: {
    onSendCode() {
      this.$store.dispatch(REGISTER_IDENTIFY, "xxx");
    }
  }
};
</script>

<style>
</style>

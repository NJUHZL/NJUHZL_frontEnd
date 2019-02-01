<template>
  <div>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  // mounted() {
  //   window.onbeforeunload = function() {
  //     console.log("clear")
  //     localStorage.removeItem("njuhzl_state");
  //     localStorage.removeItem("njuhzl_root");
  //   };
  // },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

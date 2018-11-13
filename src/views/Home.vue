<template>
  <div>
    <h1>Home</h1>
    <Poster></Poster>
  </div>
</template>

<script>
import { Poster } from "@/component/Poster/index.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: { Poster },
  methods: {

  },
  computed: {
    ...mapState({
      
    })
  }
}
</script>

<style lang="scss" scoped>
</style>



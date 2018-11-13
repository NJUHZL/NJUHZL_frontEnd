<template>
  <div>
    <h1>Home</h1>
    <my-poster v-bind:passageList="hotPassage"></my-poster>
  </div>
</template>

<script>
import MyPoster from "@/component/MyPoster/index.vue";
import { mapState } from "vuex";
import { FETCH_HOT_PASSAGE } from "@/store/type/actions";

export default {
  name: "Home",
  components: { MyPoster },
  methods: {},
  computed: {
    ...mapState({
      hotPassage: state => state.passage.hotPassage
    })
  },

  async mounted() {
    //挂载后拉取数据
    await this.$store.dispatch(FETCH_HOT_PASSAGE);
  }
};
</script>

<style lang="scss" scoped>
</style>

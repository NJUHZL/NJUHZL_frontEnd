<template>
  <div>
    <h1>Home</h1>
    <div class="part">
      <div class="item">
        <my-poster v-bind:passageList="hotPassage"></my-poster>
      </div>
    </div>
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
.part {
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 100%;
  .item {
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div>
    <banner class="banner"/>
    <div class="page-content">
      <div class="page-width-item">
        <my-poster class="max-width-item" v-bind:passageList="hotPassage"/>
      </div>
      <div class="page-width-item">
        <simple-card title="事实核查" picture="sshc.jpg" class="multi-item"/>
        <simple-card title="事实核查" picture="yjzx.jpg" class="multi-item"/>
        <simple-card title="事实核查" picture="zlbg.jpg" class="multi-item"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyPoster from "@/components/MyPoster/index.vue";
import SimpleCard from "@/components/SimpleCard/index.vue";
import banner from "@/components/banner.vue";
import { mapState } from "vuex";
import { FETCH_HOT_PASSAGE } from "@/store/type/actions";

export default {
  name: "Home",
  components: { MyPoster, SimpleCard, banner },
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
.banner {
  position: relative;
  z-index: -1;
  top: -58px;
}
.page-content {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 100%;
  margin: 20px 40px;
}
.page-width-item {
  display: flex;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  margin: 20px;

  .max-width-item {
    flex-grow: 1;
  }

  .multi-item {
    margin: 0 60px;
  }
}
</style>

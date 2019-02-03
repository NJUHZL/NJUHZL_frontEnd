<template>
  <div class="main">
    <div class="navi">
      <left-navi/>
    </div>
    <div class="items">
      <news-item
        v-for="(item, index) in oneClassOfPassageList.passage"
        v-bind:key="index"
        :title="item.title"
        :newsSource="item.newsSource"
        :newsClass="item.newsClass"
        :abstract="item.abstract"
        :keywords="item.keywords"
        @click.native="showDetail(item.passageId)"
        style="cursor: pointer"
      ></news-item>
    </div>
  </div>
</template>

<script>
import NewsItem from "./components/newsItem";
import LeftNavi from "../../components/LeftNavi";
import { mapState } from "vuex";
import {
  FETCH_ONE_CLASS_OF_PASSAGE_LIST,
  SET_CURRENT_CLASS
} from "@/store/type/actions.js";

export default {
  name: "News",
  components: { NewsItem, LeftNavi },
  data() {
    return {
      logoURL: "http://njuhzl.oss-cn-hangzhou.aliyuncs.com/static/realistic.png"
    };
  },
  computed: {
    ...mapState({
      currentClass: state => state.passage.currentClass,
      oneClassOfPassageList: state => state.passage.oneClassOfPassageList
    })
  },
  methods: {
    fetchOneClassOfPassageList(key) {
      this.$store.dispatch(FETCH_ONE_CLASS_OF_PASSAGE_LIST, key);
      this.$store.dispatch(SET_CURRENT_CLASS, key);
    },
    showDetail(passageID) {
      console.log(passageID);
      localStorage.njuhzl_passageID = passageID;
      this.$router.push({ name: "passageDetail" });
    }
  },
  async mounted() {
    await this.$store.dispatch(
      FETCH_ONE_CLASS_OF_PASSAGE_LIST,
      this.currentClass
    );
    console.log(this.oneClassOfPassageList);
    await this.$store.dispatch(SET_CURRENT_CLASS, this.currentClass);
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  padding: 30px 50px;
  .navi {
    max-width: 250px;
    max-height: 200px;
  }
  .items {
    margin: 0 150px;
  }
}
</style>

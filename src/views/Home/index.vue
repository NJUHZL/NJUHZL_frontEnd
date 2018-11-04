<template>
    <div class="home">
        <div class="tag-container">
            <tag
                    v-for="item in tags"
                    :key="item.id"
                    :tag-id="item.id"
                    :tag-type="item.type"
                    :share-link="item.shareLink"
                    :tag-name="item.name"
                    :created-at="item.createdAt"
                    :updated-at="item.updatedAt" />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { TEST } from "@/store/type/actions";
import Tag from "@/components/test";
export default {
  name: "Home",
  components: { Tag },
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState({
      tags: state => state.test.tags
    })
  },
  async mounted() {
    await this.$store.dispatch(TEST);
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/config";
.home {
  max-width: 900px;
  height: 100%;
  margin: 0 auto;

  .title {
    font-family: $logo-font-family;
    font-size: $logo-font-size;
    color: $logo-color;
    text-align: center;
  }
  .decoration-container {
    display: flex;
    justify-content: center;
  }
  .decoration {
    background-color: $logo-color;
    width: 50px;
    height: 5px;
    margin: 15px 5px 30px;
  }
  .tag-container {
    display: flex;
    justify-content: flex-start;
  }
}
</style>

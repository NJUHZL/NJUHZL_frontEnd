<template>
    <div>
        <div id="navi">
            <navi></navi>
        </div>
        <router-view></router-view>
        <div id="foot">
            <foot></foot>
        </div>
        <div id="rightBar">
            <rightBar></rightBar>
        </div>
    </div>
</template>

<script>
import navi from "@/components/navi.vue";
import foot from "@/components/footer.vue";
import rightBar from "@/components/rightBar.vue";
export default {
  name: "DefaultLayout",
  components: { navi, foot, rightBar }
};
</script>

<style lang="scss" scoped>
#navi {
  z-index: 100;
}
</style>

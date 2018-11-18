<template>
    <div>
        <div id="navi">
            <navi></navi>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import navi from "@/components/navi.vue";
export default {
  name: "DefaultLayout",
  components: { navi }
};
</script>

<style lang="scss" scoped>
#navi {
  z-index: 100;
}
</style>

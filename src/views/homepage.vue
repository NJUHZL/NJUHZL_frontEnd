<template>
    <div>
        <navi></navi>
        <banner style="margin-bottom: 100px"></banner>
        <rightNavi></rightNavi>
    </div>
</template>

<script>
import navi from "@/components/navi.vue";
import banner from "@/components/banner.vue";
import rightNavi from "@/components/rightNavi.vue";

export default {
  name: "homepage",
  components: { navi, banner, rightNavi },
  mounted: function() {
    $("#nav").css("position", "absolute");
    // let beginY = $("#rightNavi").offset().top;
    // console.log("top:" + beginY);
    // $(window).on("scroll", function() {
    //   if ($(window).scrollTop() > beginY - 30) {
    //     $("#rightNavi").css("position", "fixed");
    //     console.log("f");
    //   } else {
    //     //$("#rightNavi").css("position", "relative");
    //     //console.log("r");
    //   }
    // });
  }
};
</script>

<style scoped>
</style>

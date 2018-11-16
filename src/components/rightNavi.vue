<template>
    <el-menu
            id="rightNavi"
            default-active="1"
            class="el-menu-vertical-demo"
            shadow="always"
            @open="handleOpen"
            @close="handleClose"
            unique-opened="true"
    style="float: right;right: 100px;top:30px;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);z-index: 3">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-news"></i>
                <span>热门新闻</span>
            </template>
            <el-menu-item-group>
                <el-menu-item  v-for="item in ranks" :key="item.index" index="item.index" style="height: 40px">
                    {{item.title}}
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2" style="padding-bottom: 10px">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>最新评论</span>
            </template>
            <el-menu-item-group>
                <el-menu-item  v-for="i in 3" index="i" :key="i" style="
                width: 200px;height:140px;padding-left: 10px;padding-right: 10px;margin-bottom: 3px">
                    <rightComment></rightComment>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
import rightComment from "@/components/rightComment.vue";
export default {
  name: "rightNavi",
  components: { rightComment },
  data() {
    return {
      ranks: [
        { title: "新闻1", link: "/", index: 11 },
        { title: "新闻2", link: "/", index: 12 },
        { title: "新闻3", link: "/", index: 13 },
        { title: "新闻4", link: "/", index: 14 },
        { title: "新闻5", link: "/", index: 15 },
        { title: "新闻6", link: "/", index: 16 },
        { title: "新闻7", link: "/", index: 17 },
        { title: "新闻8", link: "/", index: 18 },
        { title: "新闻9", link: "/", index: 19 },
        { title: "新闻10", link: "/", index: 20 }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
</style>

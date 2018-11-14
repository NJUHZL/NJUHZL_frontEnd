<template>
    <div class="whole" id="nav" style="width:100%;float: top">
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="black"
                text-color="#fff"
                active-text-color="lightskyblue">
            <el-menu-item index="1"><a href="/"><img src="assests/img/hzl_logo.png"></a></el-menu-item>
            <el-submenu index="2">
                <template slot="title">热闻</template>
                <el-menu-item index="2-1"><a href="/">教育</a></el-menu-item>
                <el-menu-item index="2-2"><a href="/">经济</a></el-menu-item>
                <el-menu-item index="2-3"><a href="/">娱乐</a></el-menu-item>
                <el-menu-item index="2-3"><a href="/">生态</a></el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="/">评估</a></el-menu-item>
            <el-menu-item index="4"><a href="/">指南</a></el-menu-item>
            <el-menu-item index="5" disabled><a href="/">消息</a></el-menu-item>
            <el-menu-item style="float: right">
                <a href="/login">登录</a>>
                /
                <a href="/signup">注册</a>>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "nav"
    }
</script>

<style scoped>

</style>
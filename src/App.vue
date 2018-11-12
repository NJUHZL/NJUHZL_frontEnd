<template>
  <div>
    <router-view></router-view>
    <NewsList></NewsList>
  </div>
</template>

<script>
import NewsList from './component/NewsList'
export default {
  name: "App",
  components:{
  	NewsList,
  }
};
</script>

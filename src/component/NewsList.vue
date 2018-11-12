<template>
  <div class="newslist">
    <div class="body">
      <NewsIntro></NewsIntro>
    </div>
  </div>
</template>

<script>
import NewsIntro from './NewsIntro'

export default {
  name: 'NewsList',
  data () {
    return {

    }
  },
  components:{
    NewsIntro,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding:0;
}
.body{
	width: 50%;
	height:1000px;
	/*border: 1px solid black;*/
}
</style>

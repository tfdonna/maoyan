<template>
  <div id="app">
    <Footer></Footer>

  </div>
</template>
<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
     Footer
  }
}
</script>

<style>
/*清除浏览器的默认样式*/
* {
  padding: 0;
  margin: 0;
}

</style>

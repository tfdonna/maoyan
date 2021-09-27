<template>
  <div>
    <Header1></Header1>
    <Header></Header>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Header1 from '../components/Header1.vue'

export default {
    name: 'MiniVedio',
    components: {
    Header, Header1
  }
}
</script>

<style scoped>

</style>
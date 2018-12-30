<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
  // import { mapGetters } from 'vuex'
  // export default {
  //   mounted() {
  //     this.$store.commit('setTest', 12)
  //     this.$store.dispatch('setTest', 23)
  //   },
  //   computed: {
  //     ...mapGetters(['test']),
  //     testNum() {
  //       return this.test
  //     }
  //   }
  // }
  export default {}
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>
<style lang="scss" scoped>
  .test {
    font-size: px2rem(37.5);
  }
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>

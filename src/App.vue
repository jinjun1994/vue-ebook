<template>
  <div id="app">
    <div id="nav">
    </div>
    <span class="test">{{test}}test</span>

    <router-view/>
  </div>
</template>
<script>
  export default {
    mounted() {
      this.$store.commit('setTest', 12)
      this.$store.dispatch('setTest', 9)
    },
    computed: {
      test() {
        return this.$store.state.test
      }
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>
<style lang="scss" scoped>
  @import "./assets/styles/global";
  .test {
    font-size: px2rem(37.5);
  }
</style>

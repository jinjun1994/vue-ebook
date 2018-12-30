<template>
  <div class="home">
    <div id="read"></div>
    <span class="icon-book"></span>
    <span>aaaaa</span>
    <span class="day">aaaaaa</span>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Epub from 'epubjs'
  global.epub = Epub
  export default {
    name: 'home',
    components: {
    },
    mounted () {
      this.book = new Epub('/2013_Book_AndroidOnX86.epub')
      console.log(this.book)
      // this.book.renderTo('read', {
      //   width: window.innerWidth,
      //   height: window.innerHeight
      // }).display()
    }
  }
</script>
<style lang="scss" scoped>
  .icon-book{
    font-size: 20px;
    color: red;
  }
  .day {
    font-family: "Days One",serif;
    font-size: px2rem(6);
  }
</style>

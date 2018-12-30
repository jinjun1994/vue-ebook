<!--suppress ALL -->
<template>
<div class="ebook-reader">
  <div id="read"></div>
</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Epub from 'epubjs'
  global.ePub = Epub
  export default {
    name: 'EbookReader',
    computed: {
      ...mapGetters(['fileName'])
    },
    methods: {
      initEpub() {
        const url = 'http://127.0.0.1/book/' + this.fileName + '.epub'
        this.book = new Epub(url)
        console.log(this.book)
        console.log(url)
      }
    },
    mounted() {
      // this.$route.params.fileName.split('|').join('/')  获取文件名
      this.$store.dispatch('setFileName', this.$route.params.fileName.split('|').join('/')).then(() => {
        this.initEpub()
        }
      )
    }
  }
</script>

<style scoped>

</style>

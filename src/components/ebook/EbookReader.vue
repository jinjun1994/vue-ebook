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
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
        }
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
        }
      },
      toggleTitleAndMenu() {},
      initEpub() {
        const url = 'http://127.0.0.1/book/' + this.fileName + '.epub'
        this.book = new Epub(url)
        console.log(this.book)
        console.log(url)
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
          // 微信兼容
        })
        this.rendition.display()
        this.rendition.on('touchstart', event => {
          this.touchStartX = event.changedTouches[0].clientX
          this.touchStartTime = event.timeStamp
        })
        this.rendition.on('touchend', event => {
          const offSet = event.changedTouches[0].clientX - this.touchStartX
          const touchTime = event.timeStamp - this.touchStartTime
          if (touchTime < 500 && offSet > 40) {
             this.prevPage()
          } else if ((touchTime < 500 && offSet < -40)) {
            this.nextPage()
          } else {
            this.toggleTitleAndMenu()
          }
          event.preventDefault()
          event.stopPropagation()
        })
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

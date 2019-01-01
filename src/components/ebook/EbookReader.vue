<!--suppress ALL -->
<template>
<div class="ebook-reader">

  <div id="read"></div>
</div>
</template>

<script>
  import { ebookMix } from '../../utils/mixin'
  import Epub from 'epubjs'
  global.ePub = Epub

  export default {
    name: 'EbookReader',
    mixins: [ebookMix],
    methods: {
      prevPage() {
        if (this.rendition) {
          this.rendition.prev()
          this.hideTitleAndMenu()
        }
      },
      nextPage() {
        if (this.rendition) {
          this.rendition.next()
          this.hideTitleAndMenu()
        }
      },
      toggleTitleAndMenu() {
        // this.$store.dispatch('setMenuVisible', !this.menuVisible)
        this.setMenuVisible(!this.menuVisible)
      },
      hideTitleAndMenu() {
        // this.$store.dispatch('setMenuVisible', false)
        this.setMenuVisible(false)
      },
      initEpub() {
        const url = 'http://127.0.0.1/book/' + this.fileName + '.epub'
        this.book = new Epub(url)
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
          // event.preventDefault()  // https://segmentfault.com/q/1010000016012946
          event.preventDefault()
          event.stopPropagation()
        }
        )
      }

    },
    mounted() {
      // this.$route.params.fileName.split('|').join('/')  获取文件名
      this.setFileName(this.$route.params.fileName.split('|').join('/')).then(() => {
        this.initEpub()
        }
      )
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/global";
</style>

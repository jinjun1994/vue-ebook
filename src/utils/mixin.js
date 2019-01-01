import { mapGetters, mapActions } from 'vuex'

export const ebookMix = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible'
      ])
  },
  methods: {
    ...mapActions([
      'setMenuVisible',
      'setFileName'
      ])
  }
}

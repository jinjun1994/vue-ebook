const book = {
  state: {
    fileName: ''
  },
  mutations: {
    'SET_FILENAME' (state, fileName) {
      state.fileName = fileName
    }
  },
  actions: {
    setFileName(contest, fileName) {
      contest.commit('SET_FILENAME', fileName)
    }
  }
}
export default book

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 1
  },
  mutations: {
    setTest (state, newTest = 7) {
      state.test = newTest
    }
  },
  actions: {
    setTest(contest, newTest) {
      contest.commit('setTest', newTest)
    }
  }
})

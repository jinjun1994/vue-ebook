import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/styles/icon.css'
import './assets/fonts/daysOne.css'
import './assets/fonts/cabin.css'
import './assets/fonts/montserrat.css'
import './assets/fonts/tangerine.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

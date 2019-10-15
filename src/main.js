import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@/assets/styles/main.scss'
import './plugins/ui-kits.js'
import './plugins/day.js'
import './plugins/dragula.js'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

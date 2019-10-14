import Vue from 'vue'
import dragula from 'dragula'
import 'dragula/dist/dragula.min.css'

const dragulaPlugin = {
  install(Vue, options) {
    Vue.prototype.$dragula = dragula
  }
}

Vue.use(dragulaPlugin)

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
      children: [
        {
          path: '/accounting',
          name: 'accounting',
          component: () => import('./views/Accounting'),
          meta: { title: '記帳', icon: 'el-icon-notebook-1' }
        }
      ]
    }
  ]
})

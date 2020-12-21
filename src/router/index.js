import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import page1 from '../pages/page1'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/home', name: 'Home', component: Home},
      { path: '/page1', name: 'page1', component: page1},
    ],
    scrollBehavior () {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    }
  })
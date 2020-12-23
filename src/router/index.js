import Vue from 'vue'
import Router from 'vue-router'
import About from '../pages/About'
import Blog from '../pages/Blog'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/about', name: 'about', component: About},
      { path: '/blog', name: 'blog', component: Blog},
    ],
    scrollBehavior () {
      // return 期望滚动到哪个的位置
      return { x: 0, y: 0 }
    }
  })
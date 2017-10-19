import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home.vue'
import secrecy from '@/page/secrecy.vue'
import about from '@/page/about.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'home1',
      component: about
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/secrecy',
      name: 'secrecy',
      component: secrecy
    },{
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/*',
      name: 'home2',
      component: home
    }
  ]
})
